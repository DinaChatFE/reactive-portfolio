import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedParams = await searchParams;
  const categoryFilter = resolvedParams.category || "All";
  
  let blogsData;
  if (categoryFilter === "All") {
    blogsData = await db.select().from(blogs).orderBy(desc(blogs.createdAt));
  } else {
    blogsData = await db.select().from(blogs).where(eq(blogs.category, categoryFilter)).orderBy(desc(blogs.createdAt));
  }

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
                <Link
                  href={`/blogs${cat === "All" ? "" : `?category=${cat}`}`}
                  scroll={false}
                  key={cat} 
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    (categoryFilter === cat) 
                    ? "bg-primary text-white font-bold" 
                    : "glass-card border border-white/10 text-foreground hover:border-primary/50"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog, i) => (
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
