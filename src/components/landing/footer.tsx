import { BrandMark } from "@/components/landing/brand";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Portland's porch concierge. Harvested and Delivered.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Footer">
          <a
            href="#services"
            className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink/80 hover:text-terracotta"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink/80 hover:text-terracotta"
          >
            About Us
          </a>
          <a
            href="#book"
            className="text-[0.75rem] font-medium uppercase tracking-[0.16em] text-terracotta hover:text-terracotta-hover"
          >
            Book Now
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Stoop Appeal · Portland, Oregon</p>
          <a href="mailto:jade@stoopappeal.com" className="hover:text-ink">
            Jade@stoopappeal.com
          </a>
        </div>
      </div>
    </footer>
  );
}
