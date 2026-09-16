"use client";

import { About } from "@/components/landing/about";
import { Book } from "@/components/landing/book";
import { Footer } from "@/components/landing/footer";
import { Gallery } from "@/components/landing/gallery";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";

const QUOTES = [
  {
    quote: "Neighbors slowed their walk. That is when I knew.",
    by: "Irvington",
  },
  {
    quote: "It looked as if it had always belonged there.",
    by: "Eastmoreland",
  },
  {
    quote: "The last thing I wanted to think about in October. They handled all of it.",
    by: "Lake Oswego",
  },
] as const;

export function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="bg-ink text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-paper">
        <p className="px-4 py-2.5">Fall 2026 is open — a few October weeks remain</p>
      </div>
      <Header />
      <main id="main">
        <Hero />
        <section className="border-y border-line bg-paper px-5 py-14 sm:px-8 sm:py-16">
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.15rem]">
            We bring the harvest to your stoop — then take it away when the
            season turns.
          </p>
        </section>
        <Gallery />
        <Services />
        <Process />
        <section className="border-y border-line bg-paper px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
            {QUOTES.map((item) => (
              <blockquote key={item.by} className="flex flex-col">
                <p className="font-display text-2xl leading-snug text-ink">
                  “{item.quote}”
                </p>
                <footer className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
                  {item.by}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
        <About />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
