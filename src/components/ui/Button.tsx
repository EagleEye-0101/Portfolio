import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-200",
          variant === "primary" &&
            "bg-ink text-paper hover:bg-copper",
          variant === "secondary" &&
            "border border-ink bg-transparent text-ink hover:border-copper hover:text-copper",
          variant === "ghost" &&
            "bg-transparent text-ink-muted hover:text-copper",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
