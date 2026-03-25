import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";

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
                Currently taking projects
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3} className="w-full">
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
              Let&apos;s create something <span className="text-gradient italic">exceptional.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-12">
              Please use the email input form to send me a message for more information and references. Or direct message me—let&apos;s talk!
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.4} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="text-xs font-sans tracking-[3px] text-tertiary uppercase font-bold">Email</div>
              <a href="mailto:dinachatfe5@gmail.com" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                dinachatfe5@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-2 p-6 rounded-xl bg-surface-container-low border-0 shadow-sm transition-all hover:bg-surface-container-highest">
              <div className="text-xs font-sans tracking-[3px] text-primary-container uppercase font-bold">Phone</div>
              <a href="tel:087213208" className="text-lg font-sans text-foreground hover:text-primary transition-colors">
                +855 (87) 213 208
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