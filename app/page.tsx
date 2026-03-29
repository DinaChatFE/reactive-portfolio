import { ProjectFloatCard } from "@/components/ProjectFloatCard";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, LayoutPanelLeft, Code, LineChart, Terminal, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent font-sans">
      <main className="relative z-10 flex min-h-screen flex-col items-center pt-40 md:pt-48 pb-16">
        {/* HERO SECTION */}
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start px-6">
          <FadeIn>
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider font-sans bg-secondary/80 text-secondary-foreground uppercase">
              Digital Artistry & Code
            </Badge>
            <h1 className="text-6xl font-extrabold tracking-tight font-display sm:text-8xl md:text-[6rem] leading-[1.1] max-w-4xl">
              Crafting Luminous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Digital Experiences</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mt-8 flex flex-col md:flex-row md:items-center gap-8 w-full">
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl font-sans leading-relaxed">
              I am Dina, a Full-Stack & Front-End Developer with strong abilities in Vue/Nuxt, React/Next.js, Laravel, and data architectures. I blend professional engineering with high-performance aesthetics to create products that don&apos;t just work—they resonate.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row md:ml-auto">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-md font-bold bg-gradient-primary text-white border-none shadow-[0_0_30px_-10px_rgba(255,144,104,0.4)] hover:opacity-90">
                <Link href="#work">Explore Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-md font-bold bg-surface-variant/40 backdrop-blur-[12px] border-primary/30 text-primary hover:bg-surface-variant/60 gap-2">
                <Link href="#showreel">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Showreel
                </Link>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="w-full mt-40 mx-auto max-w-6xl px-6 scroll-mt-32">
          <FadeIn delay={0.3}>
            <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl mb-4">Expertise & Skills</h2>
            <p className="text-muted-foreground text-lg max-w-xl mb-16">
              A comprehensive suite of technical skills honed through building robust applications and impactful digital products.
            </p>
          </FadeIn>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Frontend Developer", desc: "Creating web applications that prioritize responsiveness while seamlessly integrating speed and performance into a user-centric digital experience.", tags: ["Vue / Nuxt.js", "React / Next.js", "Tailwind CSS"], icon: <LayoutPanelLeft className="w-8 h-8 text-[#E79C73] mb-6" strokeWidth={1.5} /> },
              { title: "Backend Developer", desc: "Complete API reference to build and store sensitive user data securely on any front-end platform, including web and mobile.", tags: ["Laravel / PHP", "Python / FastAPI", "Docker & AWS"], icon: <Code className="w-8 h-8 text-[#A882DD] mb-6" strokeWidth={1.5} /> },
              { title: "Data Analyst", desc: "Gathering the necessity, construct coding to work with raw Data from system application and uncovering business insights.", tags: ["Python", "Apache Spark", "Excel"], icon: <LineChart className="w-8 h-8 text-foreground mb-6" strokeWidth={1.5} /> }
            ].map((service, i) => (
              <FadeIn key={service.title} delay={0.4 + i * 0.1}>
                <div className="flex flex-col h-full bg-surface-container-low rounded-[1.5rem] p-8 glass-card">
                  {service.icon}
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.tags.map(t => (
                      <li key={t} className="flex items-center text-sm font-medium text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mr-3" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section id="educations" className="w-full mt-40 mx-auto max-w-6xl px-6 scroll-mt-32">
          <FadeIn delay={0.3}>
            <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl mb-16">My Journey Through<br />Pure Knowledge</h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn delay={0.4} className="flex flex-col group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-500 group-hover:scale-110">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">2018 - 2022</span>
              </div>
              <h3 className="text-3xl font-display font-semibold mb-4">Bachelor of Information Technology</h3>
              <p className="text-lg font-medium mb-3">Royal University of Phnom Penh</p>
              <p className="text-muted-foreground leading-relaxed">
                Focused on software engineering principles, graduating with a profound understanding of software structures and foundational technology.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} className="flex flex-col group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-500 group-hover:scale-110">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">2024 - Present</span>
              </div>
              <h3 className="text-3xl font-display font-semibold mb-4">Master of Data Science & Engineering</h3>
              <p className="text-lg font-medium mb-3">Royal University of Phnom Penh</p>
              <p className="text-muted-foreground leading-relaxed">
                Advanced studies in data structures, data analysis, and developing high-performance data-driven applications.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FEATURED WORK / PROJECTS */}
        <section id="work" className="w-full mt-40 scroll-mt-32">
           <div className="mx-auto max-w-6xl px-6 mb-20 text-center">
             <FadeIn delay={0.2}>
               <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Curated Projects</h2>
             </FadeIn>
           </div>
           
           <div className="flex flex-col gap-32 pb-16 px-6">
             {[
                {
                  title: "Luminous Aesthetics",
                  description: "An intelligent chatbot interface built with Next.js and Tailwind CSS featuring real-time streaming and custom tool calling.",
                  tags: ["Next.js", "OpenAI", "Tailwind"],
                  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600"
                },
                {
                  title: "The Silent Grid",
                  description: "A modern, animated developer portfolio with floating glass components, smooth transitions, and seamless dark mode.",
                  tags: ["React", "Framer Motion", "Shadcn UI"],
                  imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600"
                }
              ].map((project, index) => (
               <div 
                 key={project.title} 
                 className="sticky transition-all duration-300"
                 style={{ top: `calc(6rem + ${index * 2}rem)` }}
               >
                 <FadeIn delay={0.3}>
                   <ProjectFloatCard
                     title={project.title}
                     description={project.description}
                     tags={project.tags}
                     imageUrl={project.imageUrl}
                     align={index % 2 === 0 ? "right" : "left"}
                   />
                 </FadeIn>
               </div>
             ))}
           </div>
        </section>

        {/* LATEST INSIGHTS SECTION */}
        <section id="blogs" className="w-full mt-24 mx-auto max-w-6xl px-6 scroll-mt-32">
          <FadeIn delay={0.3} className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Latest Insights</h2>
            <Link href="/blogs" className="text-primary font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 flex items-center">
              Explore All <span className="ml-2">→</span>
            </Link>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { date: "March 12, 2024", cat: "Design", title: "The Psychology of Transparency in UI", desc: "How glassmorphism affects user trust and cognitive load in high-end dashboards." },
              { date: "Feb 28, 2024", cat: "Code", title: "Performance in the Era of Blurs", desc: "Optimizing CSS backdrop filters for a silky smooth 60fps experience on mobile." },
              { date: "Jan 15, 2024", cat: "Branding", title: "Minimalism as a Luxury Statement", desc: "Why expensive brands are moving towards ultra-simple, typography-focused identities." }
            ].map((post, i) => (
              <FadeIn key={post.title} delay={0.4 + i * 0.1}>
                <div className="group cursor-pointer flex flex-col h-full bg-surface-container-low hover:bg-surface-container transition-colors duration-300 rounded-[1.5rem] p-8 border border-white/5 hover:border-white/10">
                  <div className="flex gap-4 mb-6">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{post.cat}</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{post.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="w-full mt-40 pt-20 border-t border-white/[0.05] bg-surface-container-lowest text-center">
          <div className="mx-auto max-w-4xl px-6 pb-20">
            <FadeIn>
              <h2 className="text-5xl font-display font-bold tracking-tight sm:text-6xl mb-8">Let&apos;s Connect <br />& Build Together</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                I am always open to networking with matching professionals, exchanging ideas, and discussing new career opportunities in tech.
              </p>
              <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg font-bold bg-gradient-primary text-white border-none shadow-[0_0_30px_-10px_rgba(255,144,104,0.4)] hover:opacity-90">
                <Link href="/contact">Say Hello</Link>
              </Button>
            </FadeIn>
          </div>
          <p className="pb-8 text-sm text-muted-foreground">© 2024 Dina. Crafted with code and soul.</p>
        </section>

      </main>
    </div>
  );
}
