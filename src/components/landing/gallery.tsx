const SHOTS = [
  {
    src: "/images/gallery-large.jpg",
    alt: "A wood front door flanked by two abundant pumpkin harvests, dried corn, and a hanging basket on a stone porch.",
    className: "md:col-span-2 md:row-span-2",
    imgClass: "object-center",
  },
  {
    src: "/images/gallery-small.jpg",
    alt: "Two pumpkin harvests stacked around stone lantern pedestals at a Portland entry.",
    className: "",
    imgClass: "object-[center_38%]",
  },
  {
    src: "/images/gallery-close.jpg",
    alt: "A walnut door on white siding with hay, dried corn, and heirloom pumpkins piled on both sides.",
    className: "",
    imgClass: "object-[center_42%]",
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
            Classic orange with ghost white and sage heirlooms —
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
                className={`size-full min-h-64 object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:min-h-0 ${shot.imgClass}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
