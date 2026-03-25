"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "The Psychology of Transparency in UI",
      description: "How frosted surfaces and layered depth create a sense of trust and spatial awareness in modern digital interfaces.",
      category: "Design",
      date: "March 12, 2024",
      readTime: "5 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuWuQTZ9mE_M4PB8nLkzGndE5SsE_V-p8N1M2M95jEDptclOzuruvIICr2BFAHeNOpiyxO0_9CDP9Rt4h7VVWqv2KWfqbuLAcqLMBppL25wowurwhu_-u_-UnYdayGavkDZlUxpq1SV3h3FEhQi-ocyN8AbNRfYNxdPCHXs-5ug2m0SOloEaiURY3yoj1cixPP02qR3hARVLTd9t3I_GrCqfYblJNptTqIs_DBlwAu5PZFUA0TiSZBuEtfU2nxDDqToKjsBXtOHy86"
    },
    {
      id: 2,
      title: "Performance in the Era of Blurs",
      description: "Building futuristic digital screens with high resolution blur and glowing vibrant particles without sacrificing 60fps on mobile.",
      category: "Development",
      date: "Feb 28, 2024",
      readTime: "8 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfhKWMjEsDGJARXn7MzbhVDJ9rmcAUnQv58pX96ArldFntmjaZSZfGv79sgMD5zt8thoE087tazuUdrW2WfSIG-LAt36iKJCzuozddz9X9-bz1O5eY-iu2zfL8Jh3_uG_HF-7D3LZRd9em3rl84pbfsAnmPVTxUXBQmsFAhTjYOQMg1N7AkpE5m_6iiXs8r_K2bSxhbYIX1W1QsHGyPEBftOcKBgHxHL3MpE7vQ_qpC8r9Hlt2F90dUkvMh2CxqA5vCh38DK_3bLcr"
    },
    {
      id: 3,
      title: "Minimalism as a Luxury Statement",
      description: "Why high-end brands are pivoting towards brutalist simplicity, bold typography, and dramatic sharp lighting.",
      category: "Strategy",
      date: "Jan 15, 2024",
      readTime: "6 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAymLt4_p3DDMXyBkoBd2lg3zudKLou2GDcjxcmdkn2DTP9v05bMpHVMLEhqbL0jP19QZFnP6abOBBdCHHqbK6HDEr1Txrqb8QX0zLr5btkF05ui1JgrAF1ZU2DjdYrMvRlYB9to_1mlqAAWV5csPyrhcPZK_H9duSIzgA3mjg_CJ6T2WQHT19-kqRB5F3oQuTp9J3rdH8qpLyHJzFf4rU6Tqx--IEZmvyaA4P9CVMdjvXarE-LDwB2F2Z2le8vWMxrSUF2NssO85J-"
    },
    {
      id: 4,
      title: "Typography and Metallic Textures",
      description: "An artistic study of high-end typography printed on metallic textured paper with iridescent reflections.",
      category: "Design",
      date: "Nov 30, 2023",
      readTime: "4 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfOZOugIdAOKTtB7Vk-yIVAONRfP3hYMBvTBlkW1khFwgEM1WDJqFPuhmsWnNkHL-yzEKowhMI72OZEK6NU7m9yUtBGAi5zr7r7CVUSOuoVrh45Iha9JqKep7PvCyzXpWgb219VQ7DO47l-uMVtVSw6Q4EMkYqLDtGWsML4DXGsklGXyRo03EiRjYFxeCfrOeKcXZpCxtw-EQeM04L8D6V_0UXyiIHNDUK5NNHBuWLvDDFc1AC5D3iiFCEPvpEnUFKUZaGXhJdq5qh"
    },
    {
      id: 5,
      title: "The Modern Moody Workspace",
      description: "Showcasing a dark moody workspace with dual monitors showing code and design software glowing with subtle coral accents.",
      category: "Development",
      date: "Oct 22, 2023",
      readTime: "7 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN8n3cdPtaMM0YeZV9L3TddEXuyg_bMNUb42Gq2qmRwnaDjcpGKxHdj6OqJcyn2P6X3dT4R-yzCZGKztGBjIUq5JXlJPgIdKrRfbTHv0ZQdpjZz2MaeeqE7AJtWlkSmL7Yym24Vct-6yF2GjeEtXg0UOuLjm1k0Zmj0oMxknnYdYXOVUjydH0pqeNf5kJ8qyZTXeq1Jl6JzNVfSrMZXpgtocI7oxpl_0RW4rfz7Epjll8dXTAVOBoMJbY5C41CloA-gwnGkWubf48S"
    },
    {
      id: 6,
      title: "Color Theory Abstraction",
      description: "How abstract vibrant gradients flowing from deep violet to sunset orange influence user perception.",
      category: "Archive",
      date: "Sep 12, 2023",
      readTime: "5 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5vepb7TNiZiAd5QmLot4UcapYn2bVuDnlubxRFY4Wr3nrUfKJp16QX9Y5umTUYZ55laIerQqWejCyCF7oOXqH9RVk1w8UtQbdyCpb3yCM654nviKgJGCmDq5ji8XiQU6yOOzEqH959EZNTEDZ1NhDy4CXF5w8em3XHxSyvHUBA5F7qvE1DT8-KCN7pCfjG7dQiH9U_MukYlKrXkJ_HNSALNLFQAuxW4sqV5FzotTHSyD7m6EDhprDevM7PFGRTjum8VTdddmG1kf"
    }
  ];

  const categories = ["All", "Design", "Development", "Strategy", "Archive"];
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <main className="relative z-10 flex min-h-screen flex-col items-center pt-40 md:pt-48 pb-16">
        
        <section className="w-full max-w-6xl px-6">
          <FadeIn>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </FadeIn>
          
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-8">
            <FadeIn delay={0.1}>
              <div className="w-12 h-1 bg-primary mb-8 rounded-full"></div>
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">Latest Insights & Musings</h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
                A collection of thoughts on the intersection of high-end design, editorial aesthetics, and technical precision.
              </p>
            </FadeIn>
          </header>

          <FadeIn delay={0.2} className="mb-12 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex gap-3 min-w-max">
              {categories.map((cat, idx) => (
                <button 
                  key={cat} 
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    idx === 0 
                    ? "bg-primary text-white font-bold" 
                    : "glass-card border border-white/10 text-foreground hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <FadeIn key={blog.id} delay={0.3 + (i * 0.1)}>
                <article className="group flex flex-col h-full bg-surface-container-low border border-white/5 rounded-2xl overflow-hidden hover:translate-y-[-4px] hover:border-white/10 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden bg-surface-container-highest">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-primary text-[10px] font-bold tracking-widest uppercase">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {blog.description}
                    </p>
                    <div className="flex items-center text-[11px] text-muted-foreground font-medium tracking-wide uppercase mt-auto pt-4 border-t border-white/5">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {blog.date}
                      <span className="mx-3 text-white/20">•</span>
                      <Clock className="w-3.5 h-3.5 mr-2" />
                      {blog.readTime}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
