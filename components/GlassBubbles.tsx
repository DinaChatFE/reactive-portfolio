"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlassBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const bubbles = containerRef.current.querySelectorAll(".glass-bubble");
    
    // Create seamless floating animation for the bubbles
    bubbles.forEach((bubble, i) => {
      // Randomize initial position
      gsap.set(bubble, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        scale: () => 0.5 + Math.random() * 1.5,
      });

      // Animate continuously
      gsap.to(bubble, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        duration: () => 15 + Math.random() * 20,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: -Math.random() * 20,
      });
    });

    return () => {
      gsap.killTweensOf(bubbles);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div className="glass-bubble absolute w-[40vw] h-[40vw] rounded-full bg-tertiary blur-[120px] mix-blend-screen opacity-40" />
      <div className="glass-bubble absolute w-[50vw] h-[50vw] rounded-full bg-primary blur-[150px] mix-blend-screen opacity-40" />
      <div className="glass-bubble absolute w-[30vw] h-[30vw] rounded-full bg-primary-container blur-[100px] mix-blend-screen opacity-30" />
    </div>
  );
}