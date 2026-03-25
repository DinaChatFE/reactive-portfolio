'use client';

import { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import gsap from 'gsap';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, status, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <Card ref={containerRef} className="glass-card w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col overflow-hidden border border-white/10 rounded-[1.5rem]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/5 bg-surface/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm tracking-wide">Dina AI</h3>
                <p className="text-xs text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="rounded-full hover:bg-white/10 text-foreground/80">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm flex flex-col items-center justify-center h-[200px] space-y-3">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p>Hi! I&apos;m Dina&apos;s AI Assistant.<br/> How can I help you today?</p>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === 'user' 
                      ? 'bg-gradient-primary text-white rounded-br-sm' 
                      : 'glass bg-surface-container-highest/60 text-foreground/90 rounded-bl-sm'
                  }`}>
                    {m.parts ? m.parts.map(p => p.type === 'text' ? p.text : '').join('') : (m as any).content || ''}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"/>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.15s'}}/>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{animationDelay: '0.3s'}}/>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-3 border-t border-white/5 bg-surface/40 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
              <Input 
                value={input} 
                onChange={handleInputChange} 
                placeholder="Message Dina AI..." 
                className="glass-input h-12 w-full rounded-full border border-white/10 focus:border-primary transition-all px-4 pr-12 text-sm bg-black/20"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input || input.trim() === ''} className="absolute w-8 h-8 rounded-full bg-gradient-primary text-white right-2 border-0 hover:scale-105 transition-transform">
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </div>
        </Card>
      )}

      {/* Toggle Button */}
      <Button 
        onClick={toggleChat} 
        size="icon" 
        className="w-14 h-14 rounded-full bg-gradient-primary border-0 shadow-primary-glow hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </Button>
    </div>
  );
}