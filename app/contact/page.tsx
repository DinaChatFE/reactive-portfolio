import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone } from "lucide-react";

// Lucide removed brand icons, so we provide them here
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.5a13.3 13.3 0 0 0-7 0C6.2 1.3 5 1.7 5 1.7a5.3 5.3 0 0 0-.1 3.8A5.2 5.2 0 0 0 3 9.3c0 5.5 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent font-sans">
      
      <main className="flex flex-col min-h-screen w-full selection:bg-primary/30 pt-40 md:pt-48 pb-20 px-6 sm:px-12 md:px-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        {/* Contact Info Header */}
        <div className="flex flex-col justify-center">
          <FadeIn direction="right" delay={0.2} className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-sans font-medium text-primary tracking-widest uppercase">
                Open to networking
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3} className="w-full">
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
              Let&apos;s build a <span className="text-gradient italic">connection.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-12">
              Whether you&apos;re a recruiter, a fellow developer, or just want to chat about tech, I&apos;m always happy to connect and exchange ideas.
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.4} className="flex flex-col gap-6 w-full">
            <div className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="flex items-center gap-2 text-xs font-sans tracking-[3px] text-tertiary uppercase font-bold">
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 group-hover:text-primary" /> Email
              </div>
              <a href="mailto:dinachatfe5@gmail.com" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                dinachatfe5@gmail.com
              </a>
            </div>
            
            <div className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="flex items-center gap-2 text-xs font-sans tracking-[3px] text-primary-container uppercase font-bold">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-primary" /> Phone
              </div>
              <a href="tel:087213208" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                +855 (87) 213 208
              </a>
            </div>

            <div className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="flex items-center gap-2 text-xs font-sans tracking-[3px] text-tertiary uppercase font-bold">
                <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-primary" /> GitHub
              </div>
              <a href="https://github.com/dinachat" target="_blank" rel="noopener noreferrer" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                github.com/dinachat
              </a>
            </div>

            <div className="group flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="flex items-center gap-2 text-xs font-sans tracking-[3px] text-primary-container uppercase font-bold">
                <FacebookIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-primary" /> Facebook
              </div>
              <a href="https://facebook.com/dinachat" target="_blank" rel="noopener noreferrer" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                facebook.com/dinachat
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="flex items-center justify-center lg:justify-end">
          <FadeIn direction="left" delay={0.5} className="w-full max-w-md">
            <ContactForm />
          </FadeIn>
        </div>

        </div>
      </main>
    </div>
  );
}