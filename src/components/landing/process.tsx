import { CalendarDays, Camera, Truck } from "lucide-react";

const STEPS = [
  {
    icon: CalendarDays,
    title: "Reserve your week",
    body: "A few October install windows remain for 2026. Book now and we confirm within two business days.",
  },
  {
    icon: Camera,
    title: "We design to your stoop",
    body: "Send a photo of your entry. We compose the harvest to the architecture — steps, planters, and all.",
  },
  {
    icon: Truck,
    title: "Install, enjoy, we collect",
    body: "We style on site. You live with it through Thanksgiving. Then we haul it to a farm for compost.",
  },
] as const;

export function Process() {
  return (
    <section className="bg-cream">
      <div className="relative h-[min(52vh,28rem)] w-full overflow-hidden">
        <img
          src="/images/harvest.jpg"
          alt="White, cream, and terracotta pumpkins stacked in crates and woven baskets, ready for a porch install."
          className="size-full object-cover"
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
              <span className="flex size-10 items-center justify-center rounded-md bg-paper text-terracotta shadow-border">
                <step.icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
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
