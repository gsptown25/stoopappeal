function PumpkinMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M16.2 2.8c1.7.4 2.7 1.8 2.8 4.2"
        stroke="#6E6648"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="19.2" rx="12.4" ry="9.7" fill="#E8903A" />
      <path
        d="M10.2 11.6c-1.6 2.2-2.5 4.8-2.5 7.6 0 5.1 3.7 9.3 8.3 9.3"
        stroke="#F6F1E8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M13.2 10.6c-1 2.6-1.5 5.5-1.5 8.6 0 3.2.5 6.1 1.5 8.6"
        stroke="#F6F1E8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M16 10.2v18.2"
        stroke="#F6F1E8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M18.8 10.6c1 2.6 1.5 5.5 1.5 8.6 0 3.2-.5 6.1-1.5 8.6"
        stroke="#F6F1E8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M21.8 11.6c1.6 2.2 2.5 4.8 2.5 7.6 0 5.1-3.7 9.3-8.3 9.3"
        stroke="#F6F1E8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

const STEPS = [
  {
    title: "Reserve your week",
    body: "A few October install windows remain for 2026. Book now and we confirm within one calendar day.",
  },
  {
    title: "We design to your stoop",
    body: "Send a photo of your entry. We compose the harvest to the architecture — steps, planters, and all.",
  },
  {
    title: "Install, enjoy, we collect",
    body: "We style and deliver. You enjoy it through Thanksgiving or a time of your choosing. Then we haul it off for cooking and donation to local houseless shelters.",
  },
] as const;

export function Process() {
  return (
    <section className="bg-cream">
      <div className="relative h-[min(52vh,28rem)] w-full overflow-hidden">
        <img
          src="/images/process-porch.jpg"
          alt="A covered porch with a wooden door and a dense harvest of heirloom pumpkins, hay, and dried corn along the siding."
          className="size-full object-cover object-[68%_50%]"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <p className="absolute bottom-6 left-5 font-display text-3xl text-paper sm:left-8 sm:text-4xl">
          How it works.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-8 md:py-20">
        {STEPS.map((step, index) => (
          <article key={step.title} className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-paper shadow-border">
                <PumpkinMark className="size-6" />
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                Step 0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
