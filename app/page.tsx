import { ProjectFloatCard } from "@/components/ProjectFloatCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { ResearchContributionSection } from "@/components/ResearchContributionSection";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, LayoutPanelLeft, Code, LineChart, Terminal, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent font-sans pt-8">
      <main className="relative z-10 flex min-h-screen flex-col items-center pt-40 md:pt-48">
        {/* HERO SECTION */}
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start px-6 pb-20">
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
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 fill-current" />
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeIn>
        </section>
        <div className="w-full max-w-6xl mx-auto mt-32 mb-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* ABOUT / MEET DINA SECTION */}
        <section id="about" className="w-full mt-40 mx-auto max-w-6xl px-6 scroll-mt-32">
          <div className="grid gap-12 md:grid-cols-[240px_1fr] md:gap-16 items-start">
            <FadeIn className="flex flex-col gap-6 w-full max-w-[240px] mx-auto md:mx-0">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden glass-card p-1 border border-white/5">
                <div className="relative w-full h-full rounded-[1.35rem] overflow-hidden bg-surface-container-low">
                  <Image 
                    src="/images/me.jpg" 
                    alt="Dina" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-2" />
              
              <div className="flex flex-col gap-6 px-2 text-sm">
                <div>
                  <p className="text-primary font-bold tracking-widest text-[10px] uppercase mb-1">Based in</p>
                  <p className="font-semibold text-foreground">Phnom Penh, KH</p>
                </div>
                <div>
                  <p className="text-primary font-bold tracking-widest text-[10px] uppercase mb-1">Experience</p>
                  <p className="font-semibold text-foreground">6+ Years</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col max-w-2xl">
              <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Meet Dina</p>
              <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl mb-8 leading-tight">
                A Journey of Code & Curiosity
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello, I&apos;m Dina. I believe that digital platforms should be as much a piece of art as they are functional tools. My background in IT Engineering and a specialized Master&apos;s in Data Science allows me to approach problems with a dual lens: technical precision and human-centric design.
                </p>
                <p>
                  When I&apos;m not architecting complex data pipelines or refining Vue components, you can find me diving deep into open-source research or mentoring the next generation of developers in Phnom Penh. For me, every line of code is a step toward a more intuitive, luminous digital future.
                </p>
                <p>
                  I specialize in creating seamless connections between data and interface, ensuring that the back-end complexity is translated into a fluid, meaningful experience for the end-user.
                </p>
              </div>

              <div className="mt-10">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-container-low border border-white/10 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  Available for new projects
                </div>
              </div>
            </FadeIn>
          </div>
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
        <div className="w-full max-w-6xl mx-auto mt-32 mb-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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

        {/* 
        <div className="w-full max-w-6xl mx-auto mt-32 mb-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <ResearchContributionSection /> 
        */}
      <div className="w-full max-w-6xl mx-auto mt-32 mb-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* FEATURED WORK / PROJECTS */}
        <section id="work" className="w-full mt-32 scroll-mt-32">
           <div className="mx-auto max-w-6xl px-6 mb-20 text-center">
             <FadeIn delay={0.2}>
               <h2 className="text-4xl font-display font-bold tracking-tight sm:text-5xl">Curated Projects</h2>
             </FadeIn>
           </div>
           
           <div className="flex flex-col gap-32 pb-16 px-6">
             {[
                {
                  title: "OpenClaw Assistant",
                  description: "An intelligent Telegram bot functioning as a daily life assistant. It handles everything from automating routine tasks, logging workouts, to drafting blog posts seamlessly.",
                  tags: ["TypeScript", "Telegram API", "AI Integration"],
                  imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600"
                },
                {
                  title: "Reactive Portfolio",
                  description: "This very website—a modern, high-performance developer portfolio featuring smooth Framer Motion aesthetics, glassmorphism, and a luminous dark-mode design system.",
                  tags: ["Next.js", "Tailwind CSS", "React"],
                  imageUrl: "https://images.unsplash.com/photo-1618477247222-ac60c8e147bc?auto=format&fit=crop&q=80&w=1600"
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
