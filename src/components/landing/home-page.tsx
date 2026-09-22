"use client";

import { About } from "@/components/landing/about";
import { Book } from "@/components/landing/book";
import { Footer } from "@/components/landing/footer";
import { Gallery } from "@/components/landing/gallery";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";

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
        <section className="bg-paper px-5 py-14 sm:px-8 sm:py-16">
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.15rem]">
            In local partnership with Butteville Farms
          </p>
          <a
            href="https://www.buttevillefarms.com/"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-6 flex w-fit justify-center"
          >
            <img
              src="/images/butteville-farms.png"
              alt="Butteville Farms"
              className="h-16 w-auto outline-none sm:h-20 md:h-[5.5rem]"
            />
          </a>
        </section>
        <Gallery />
        <section className="border-y border-line bg-paper px-5 py-14 sm:px-8 sm:py-16">
          <p className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.15rem]">
            We bring the harvest to your stoop — then take it away when the
            season turns.
          </p>
        </section>
        <Process />
        <Services />
        <Book />
        <About />
      </main>
      <Footer />
    </div>
  );
}
