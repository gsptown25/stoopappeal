export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <div className="order-2 overflow-hidden rounded-lg lg:order-1">
          <img
            src="/images/about-jade-garth.jpg"
            alt="Jade and Garth of Stoop Appeal sitting on the front steps of their Portland home."
            className="aspect-[3/2] w-full object-cover object-[center_40%]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
            About us
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Our mission is to seamlessly deliver the magic of the harvest
            season directly to your door.
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              The stoop is the first thing a guest sees — the invitation to
              your home. Jade, Garth, and Hayden dress it with care. Jade
              brings a designer's eye. Garth and Hayden bring the work and the
              customer service: on time, in touch, and gone when the season
              turns. We live here. We would be honored to do yours.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-ink">
            Jade, Garth & Hayden
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            Stoop Appeal · Portland, Oregon
          </p>
        </div>
      </div>
    </section>
  );
}
