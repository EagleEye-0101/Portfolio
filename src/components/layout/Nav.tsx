"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-paper/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-mono text-sm tracking-widest text-ink uppercase"
        >
          {site.name.split(" ")[0]}
          <span className="text-copper">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <span className="font-mono text-xs text-ink-faint tabular-nums">
            IST {time}
          </span>
          <ul className="flex items-center gap-6">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[0.65rem] tracking-widest text-ink-muted uppercase transition-colors hover:text-copper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="rounded-full border border-copper/40 bg-copper/10 px-3 py-1 font-mono text-[0.6rem] tracking-widest text-copper uppercase">
            Open to Opportunities
          </span>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-opacity",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-paper px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm tracking-widest text-ink uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
