import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let ratelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, '1 d'),
    });
  }
} catch {
  console.warn("Redis not configured for rate limiting.");
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
    
    if (ratelimit) {
      // Prefix the identifier to avoid conflicting with the chat rate limit
      const { success } = await ratelimit.limit(`contact_${ip}`);
      if (!success) {
        return new NextResponse(
          JSON.stringify({ 
            error: 'Rate limit exceeded', 
            message: 'You can only send up to 10 messages per day. Please try again tomorrow.' 
          }), 
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY
    const emailJsPrivateKey = process.env.EMAILJS_PRIVATE_KEY

    // Following your previous implementation structure
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'origin': process.env.NODE_ENV === 'development' ? 'http://localhost' : (process.env.HOST_URL || ''),
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: emailJsPublicKey,
        ...(emailJsPrivateKey && { accessToken: emailJsPrivateKey }),
        template_params: {
          from_name: name,
          reply_to: email,
          message: message,
          to_name: "Dina Chat",
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS Error:', errorText);
      throw new Error(`EmailJS responded with ${response.status}: ${errorText}`);
    }

    return new NextResponse(
      JSON.stringify({ message: 'Successfully sent email to owner' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to send message', 
        message: 'Sorry, I encountered an issue sending your message. Please try again later.'
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
