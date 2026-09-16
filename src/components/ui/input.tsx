import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-border transition-[box-shadow] duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
