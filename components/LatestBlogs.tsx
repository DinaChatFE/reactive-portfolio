import { db } from "@/db";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";
import { FadeIn } from "@/components/animations/FadeIn";

export async function LatestBlogs() {
  const latestBlogs = await db.select().from(blogs).orderBy(desc(blogs.createdAt)).limit(3);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {latestBlogs.map((post, i) => (
        <FadeIn key={post.title} delay={0.4 + i * 0.1}>
          <div className="group cursor-pointer flex flex-col h-full bg-surface-container-low hover:bg-surface-container transition-colors duration-300 rounded-[1.5rem] p-8 border border-white/5 hover:border-white/10">
            <div className="flex gap-4 mb-6">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">{post.date}</span>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{post.description}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function LatestBlogsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex flex-col h-[280px] bg-surface-container-low rounded-[1.5rem] p-8 border border-white/5 animate-pulse">
          <div className="flex gap-4 mb-6">
            <div className="h-4 w-16 bg-white/10 rounded"></div>
            <div className="h-4 w-24 bg-white/10 rounded"></div>
          </div>
          <div className="h-8 w-3/4 bg-white/10 rounded mb-4"></div>
          <div className="h-8 w-1/2 bg-white/10 rounded mb-6"></div>
          <div className="h-4 w-full bg-white/10 rounded mb-2 mt-auto"></div>
          <div className="h-4 w-5/6 bg-white/10 rounded"></div>
        </div>
      ))}
    </div>
  );
}