export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <div className="order-2 overflow-hidden rounded-lg lg:order-1">
          <img
            src="/images/about.jpg"
            alt="Mara Quinn arranging white and blush pumpkins on a Portland craftsman porch."
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
            About us
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            I am so glad you are here.
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              I'm Mara Quinn — the person who will text you the morning of
              your install, who will stand in the drizzle deciding whether the
              Fairytale belongs on the second step or the third, and who still
              does a quiet little turn when a stoop looks exactly right.
            </p>
            <p>
              I started dressing my own Eastmoreland porch in 2016, after too
              many October weekends spent hauling pumpkins from farm stands and
              second-guessing the arrangement in the dark. Friends asked. Then
              their neighbors asked. In 2022 I stopped calling it a favor.
            </p>
            <p>
              Stoop Appeal does one thing: the Fall Harvest Deluxe. Not a menu
              of diminishing packages. Not a drop-and-go pile. A full, considered
              harvest composed for your entry, left through Thanksgiving, then
              collected and composted with a farm outside the city.
            </p>
            <p>
              I live here. I know the light on Irvington stoops at four in the
              afternoon in October. I would be honored to do yours.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-ink">Mara Quinn</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            Founder, Stoop Appeal · Portland, Oregon
          </p>
        </div>
      </div>
    </section>
  );
}
