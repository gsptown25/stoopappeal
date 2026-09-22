import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="relative h-[min(88vh,54rem)] w-full overflow-hidden bg-cream">
        <img
          src="/images/hero-gray-house.jpg"
          alt="A Portland stoop with a white door, straw bales, dried corn, and a cascade of heirloom pumpkins in orange, cream, sage, and blush."
          className="absolute inset-0 size-full object-cover object-[center_62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/15" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-5 md:bottom-6">
          <div className="w-fit rounded-lg bg-paper/55 px-3.5 py-3 shadow-lift backdrop-blur-md sm:px-4 sm:py-3.5">
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-terracotta sm:text-[0.88rem]">
              Portland porch concierge
            </p>
            <h1
              id="hero-heading"
              className="mt-1.5 font-display text-[1.4rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-[1.65rem] md:text-[1.8rem]"
            >
              The most beautiful
              <br />
              stoop on the block.
            </h1>
            <p className="mt-2.5 max-w-[18rem] text-[0.92rem] leading-relaxed text-ink/70">
              Designed, delivered, and styled for your entry. Then collected
              when the season turns.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button asChild size="sm">
                <a href="#book">Book Now</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="#services">See the package</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
