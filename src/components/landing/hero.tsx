import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="relative h-[min(88vh,54rem)] w-full overflow-hidden bg-cream">
        <img
          src="/images/hero.jpg"
          alt="A Portland craftsman stoop styled with white, cream, blush, and terracotta heirloom pumpkins cascading down wooden steps."
          className="absolute inset-0 size-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-ink/15" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 md:p-12">
          <div className="max-w-xl rounded-lg bg-paper/95 p-6 shadow-lift sm:p-8 md:p-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
              Portland porch concierge
            </p>
            <h1
              id="hero-heading"
              className="mt-3 font-display text-[2.35rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.35rem]"
            >
              The most beautiful stoop on the block.
            </h1>
            <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted">
              One offering, done completely. The Fall Harvest Deluxe is designed,
              delivered, and styled for your entry — then collected when the
              season turns.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#book">Book Now</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">See the package</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
