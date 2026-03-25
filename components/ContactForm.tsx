"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_at36o0b', 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_y68ovpg',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Dina Chat"
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );
      
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message.", {
        description: "Please try again later or reach out directly."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full relative z-10 p-8 glass-card rounded-xl">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-muted-foreground font-sans text-xs uppercase tracking-wider">Name</Label>
        <Input 
          id="name" 
          name="name" 
          required 
          placeholder="John Doe" 
          value={formData.name} 
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-foreground font-sans text-xs uppercase tracking-wider">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          required 
          placeholder="john@example.com" 
          value={formData.email} 
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-foreground font-sans text-xs uppercase tracking-wider">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          placeholder="Tell me about your project..." 
          value={formData.message} 
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary text-white font-bold h-12 shadow-[0_0_30px_-10px_rgba(255,144,104,0.4)] hover:opacity-90">
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
      </Button>
    </form>
  );
}