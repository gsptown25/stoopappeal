import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PACKAGES = [
  {
    id: "gathering",
    name: "The Gathering",
    price: "$1,250",
    image: "/images/package-front.jpg",
    alt: "The Gathering: two abundant pumpkin piles flanking a black front door with dried corn and hay.",
    description:
      "Our biggest package — a very full, artful harvest composed for your stoop. Heirloom oranges, ghost whites, and sage stripes stacked to the door with straw and corn stalks — styled on site, never dropped in a pile.",
    included: [
      "10 large jack-o'-lanterns",
      "8 medium pumpkins",
      "10 white ghost pumpkins",
      "16 specialty pumpkins",
      "Assorted pie pumpkins and minis",
      "2 straw bales",
      "2 bundles of corn stalks",
      "Design, delivery, and professional styling",
      "End-of-season removal included, cooked into soup for local houseless kitchens",
    ],
  },
  {
    id: "harvest",
    name: "The Harvest",
    price: "$650",
    image: "",
    alt: "",
    description:
      "A tasteful harvest for a smaller stoop or a lighter touch — styled on site, still mixed in orange, ghost white, and specialty pumpkins, still taken away when the season turns.",
    included: [
      "4 large jack-o'-lanterns",
      "4 medium pumpkins",
      "4 white ghost pumpkins",
      "6 specialty pumpkins",
      "Assorted pie pumpkins and minis",
      "2 bundles of corn stalks",
      "Design, delivery, and professional styling",
      "End-of-season removal included, cooked into soup for local houseless kitchens",
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        {PACKAGES.map((pkg) => (
          <article key={pkg.id} id={pkg.id} className="scroll-mt-32">
            {pkg.image ? (
              <div className="overflow-hidden rounded-lg">
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  className="aspect-[16/10] w-full object-cover object-center sm:aspect-[3/2]"
                />
              </div>
            ) : null}

            <div
              className={`grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 ${pkg.image ? "mt-10 lg:mt-14" : ""}`}
            >
              <div>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
                  The offering
                </p>
                <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-[3.15rem]">
                  {pkg.name}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
                  {pkg.description}
                </p>

                <p className="mt-8 font-display text-5xl font-medium tracking-tight text-ink">
                  {pkg.price}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Design, delivery, styling, and removal included.
                </p>

                <div className="mt-9">
                  <Button asChild size="lg">
                    <a href="#book">Book Now</a>
                  </Button>
                </div>
              </div>

              <ul className="space-y-2.5 lg:pt-2">
                {pkg.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-terracotta"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className={item.startsWith("End-of-season") ? "font-semibold" : undefined}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
