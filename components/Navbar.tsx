"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useEffect, useRef, useState, type MouseEvent } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const CLICK_SCROLL_OFFSET = 170;
  const isProgrammaticScrollRef = useRef(false);
  const scrollUnlockTimerRef = useRef<number | null>(null);

  const links = [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/#services" },
    { label: "Experience", href: "/#educations" },
    { label: "Work", href: "/#work" },
    { label: "Thoughts", href: "/#blogs" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["services", "educations", "work", "blogs"];
    const ACTIVE_OFFSET = 160;

    const updateActiveSection = () => {
      if (isProgrammaticScrollRef.current) {
        return;
      }

      const scrollPosition = window.scrollY + ACTIVE_OFFSET;
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (scrollUnlockTimerRef.current !== null) {
        window.clearTimeout(scrollUnlockTimerRef.current);
      }
    };
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/contact") {
      return pathname === "/contact";
    }

    if (href === "/") {
      return pathname === "/" && activeSection === "home";
    }

    if (href.startsWith("/#")) {
      if (pathname !== "/") return false;
      return activeSection === href.replace("/#", "");
    }

    return pathname === href;
  };

  const handleNavClick = (href: string, event: MouseEvent<HTMLAnchorElement>, closeMenu = false) => {
    if (closeMenu) {
      setOpen(false);
    }

    if (!href.startsWith("/#")) {
      return;
    }

    // On non-home routes, let Next.js navigate to /#section normally.
    if (pathname !== "/") {
      return;
    }

    const sectionId = href.replace("/#", "");
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    event.preventDefault();

    if (scrollUnlockTimerRef.current !== null) {
      window.clearTimeout(scrollUnlockTimerRef.current);
    }

    isProgrammaticScrollRef.current = true;
    setActiveSection(sectionId);

    const targetTop = Math.max(
      0,
      section.getBoundingClientRect().top + window.scrollY - CLICK_SCROLL_OFFSET + 20
    );

    window.scrollTo({ top: targetTop, behavior: "smooth" });
    window.history.replaceState(null, "", `/#${sectionId}`);

    // Re-enable scroll-based detection after smooth scroll settles.
    scrollUnlockTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 650);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8">
      <nav className="mx-auto w-full max-w-6xl flex items-center justify-between glass rounded-full px-6 py-4 shadow-lg border border-white/5 bg-[#131316]/40 backdrop-blur-[20px]">
        <Link href="/" className="font-display font-bold text-xl tracking-tight">
          DINA<span className="text-primary">.</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {links.map((link) => {
            const active = isLinkActive(link.href);

            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  onClick={(event) => handleNavClick(link.href, event)}
                  className={cn(
                    "transition-colors hover:text-primary relative",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div>
          <Button asChild className="rounded-full bg-gradient-primary text-white hover:opacity-90 font-bold border-0 h-10 px-6 hidden md:inline-flex">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col bg-surface-container-low border-l border-white/10">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-12">
                {links.map((link) => {
                  const active = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(event) => handleNavClick(link.href, event, true)}
                      className={cn(
                        "text-xl font-medium transition-colors hover:text-primary",
                        active ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button asChild className="rounded-full bg-gradient-primary text-white hover:opacity-90 font-bold border-0 h-12 mt-4 w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>Let&apos;s Talk</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}