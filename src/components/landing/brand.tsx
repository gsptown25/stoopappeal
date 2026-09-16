import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5 text-ink sm:gap-3", className)}
    >
      <img
        src="/images/logo-mark.png"
        alt=""
        width={116}
        height={76}
        className={cn(
          "w-auto shrink-0 outline-none transition-transform duration-200 group-hover:-translate-y-px",
          compact ? "h-11 sm:h-12" : "h-14",
        )}
      />
      <span
        className={cn(
          "font-display font-medium tracking-tight",
          compact ? "text-[1.4rem] leading-none sm:text-[1.55rem]" : "text-[1.7rem] leading-none",
        )}
      >
        Stoop Appeal
      </span>
    </a>
  );
}
