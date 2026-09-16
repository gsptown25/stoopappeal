import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/landing/brand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    document.body.style.overflow = "";
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandMark compact />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink/80 transition-colors duration-200 hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="pill">
            <a href="#book">Book Now</a>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[4.75rem] bottom-0 z-40 bg-paper px-6 py-10 md:hidden",
          open ? "flex flex-col" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center font-display text-3xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={closeMenu}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-terracotta text-sm font-medium text-paper"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
