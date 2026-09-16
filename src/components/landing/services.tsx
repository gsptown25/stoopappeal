import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const INCLUDED = [
  "2 Grand Prize heirloom pumpkins",
  "10 large jack-o'-lanterns",
  "8 medium pumpkins",
  "10 white ghost pumpkins",
  "16 specialty heirlooms — Fairytale, Jarrahdale, Porcelain Doll, Cinderella",
  "Assorted pie pumpkins and minis",
  "2 hay bales and seasonal mums",
  "Dried floral accents, composed on site",
  "Design, delivery, and professional styling",
  "End-of-season removal, composted with a local farm",
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/package.jpg"
            alt="A grand Fall Harvest Deluxe install flanking black double doors with prize pumpkins, hay, and rust mums."
            className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
          />
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
            The offering
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-[3.15rem]">
            Fall Harvest Deluxe
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Our only package — a full, artful harvest composed for your stoop.
            Heirlooms in cream, blush, sage, and classic orange, styled on site
            and left to carry you from the first cool morning through Thanksgiving.
          </p>

          <p className="mt-8 font-display text-5xl font-medium tracking-tight text-ink">
            $1,450
          </p>
          <p className="mt-1 text-sm text-muted">
            Design, delivery, styling, and removal included. Portland metro.
          </p>

          <ul className="mt-8 space-y-2.5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-terracotta"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button asChild size="lg">
              <a href="#book">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
