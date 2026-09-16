import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        suppressHydrationWarning
        className={cn(
          "flex min-h-28 w-full rounded-md bg-cream px-3.5 py-3 text-sm text-ink shadow-border transition-[box-shadow] duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
