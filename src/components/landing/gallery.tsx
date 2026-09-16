const SHOTS = [
  {
    src: "/images/gallery-victorian.jpg",
    alt: "A cream Victorian porch with a deluxe pumpkin cascade down a long stoop of stairs.",
    caption: "Laurelhurst",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-modern.jpg",
    alt: "A modern black-door entry styled with a monochromatic white and cream pumpkin display.",
    caption: "Eastmoreland",
    className: "",
  },
  {
    src: "/images/still-life.jpg",
    alt: "Still life of cream, blush, sage, and terracotta heirloom pumpkins with dried eucalyptus.",
    caption: "The harvest",
    className: "",
  },
] as const;

export function Gallery() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
              Recent installs
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              A few of this season's stoops.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Cream, blush, sage, and a measured amount of classic orange —
            composed to the architecture, never dropped in a pile.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4">
          {SHOTS.map((shot) => (
            <figure
              key={shot.src}
              className={`group relative overflow-hidden rounded-lg bg-line ${shot.className}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="size-full min-h-64 object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:min-h-0"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
