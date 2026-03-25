import { openai } from '@ai-sdk/openai';
import { streamText, tool, convertToModelMessages } from 'ai';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { findRelevantContent } from '@/lib/ai/embedding';

let ratelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(100, '1 h'),
    });
  }
} catch {
  console.warn("Redis not configured for rate limiting.");
}

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
    
    if (ratelimit) {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return new NextResponse(
          JSON.stringify({ error: 'Rate limit exceeded', message: 'Too many requests. Please try again later.' }), 
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const { messages = [] } = await req.json();
    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: openai('gpt-4o'),
      system: `You are a helpful assistant of Dina who is a male software engineer and owns the website you are currently in. 
Greetings to anyone who comes and chats with you respectfully. Check your knowledge base before answering any questions.
Only respond to questions using information from tool calls, careful response with knowledge base.
If no relevant information is found, respond, "Sorry, I don't know."

Information about Dina:
Dina is a Front-End & Full-Stack Developer with about 3 years of experience. Strong abilities in Vue, Nuxt, React, NextJS, PHP/Laravel, Python/FastAPI, Docker, AWS, and data architectures (Spark, Excel).
He holds a Bachelor's Degree in Information Technology Engineering (2018-2022) and is currently pursuing a Master's in Data Science and Engineering (2024-Present) at the Royal University of Phnom Penh.
He is passionate about highly interactive UI, animations (GSAP, Framer Motion), and clean robust architectures, as well as problem-solving using data structures.
Contact Dina at dinachatfe5@gmail.com.`,
      messages: modelMessages,
      tools: {
        getInformation: tool({
          description: `get information from your knowledge base to answer questions by choosing the most similarity to response, if it doesn't have, you could response with "I don't have information about that"`,
          parameters: z.object({
            question: z.string().describe('the users question'),
          }),
          execute: async ({ question }) => findRelevantContent(question),
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}