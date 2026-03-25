"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Skill", href: "/#services" },
    { label: "Educations", href: "/#educations" },
    { label: "Work", href: "/#work" },
    { label: "Blogs", href: "/#blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8">
      <nav className="mx-auto w-full max-w-6xl flex items-center justify-between glass rounded-full px-6 py-4 shadow-lg border border-white/5 bg-[#131316]/40 backdrop-blur-[20px]">
        <Link href="/" className="font-display font-bold text-xl tracking-tight">
          DINA<span className="text-primary">.</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary relative",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Button asChild className="rounded-full bg-gradient-primary text-white hover:opacity-90 font-bold border-0 h-10 px-6 hidden md:inline-flex">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
          <Button variant="ghost" className="md:hidden rounded-full h-10 px-4">
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
}