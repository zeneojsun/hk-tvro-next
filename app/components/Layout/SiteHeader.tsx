"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { copy, getLangFromSearchParams } from "@/app/lib/i18n";
import LangSwitch from "./LangSwitch";

const navEntries = [
  { key: "solutions", href: "#solutions" },
  { key: "industries", href: "#industries" },
  { key: "whyus", href: "#whyus" },
  { key: "process", href: "#process" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
  { key: "hiring", href: "#hiring" },
] as const;

type NavKey = (typeof navEntries)[number]["key"];

export default function SiteHeader() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<NavKey | null>(null);
  const sp   = useSearchParams();
  const lang = getLangFromSearchParams(sp);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navEntries.map((e) => e.key);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        // fires when the section occupies the middle band of the viewport
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-md transition-[border-color,box-shadow] duration-200",
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        <a href="#top" className="text-lg font-bold tracking-tight text-foreground shrink-0">
          HKTVRO
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base">
          {navEntries.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={cn(
                "transition-colors duration-150 whitespace-nowrap",
                activeSection === key
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {copy.nav[key][lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Suspense fallback={null}>
            <LangSwitch />
          </Suspense>

          {/* Desktop CTA */}
          <Button asChild size="default" className="hidden md:inline-flex">
            <a href="#contact">{copy.cta.getInTouch[lang]}</a>
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                aria-label="Open menu"
              >
                <span className="block w-5 h-0.5 bg-foreground" />
                <span className="block w-5 h-0.5 bg-foreground" />
                <span className="block w-5 h-0.5 bg-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-1">
                {navEntries.map(({ key, href }) => (
                  <a
                    key={key}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-lg font-medium py-3 px-2 border-b border-border transition-colors",
                      activeSection === key
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {copy.nav[key][lang]}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <Button asChild size="lg" className="w-full">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    {copy.cta.getInTouch[lang]}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
