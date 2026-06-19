import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block border border-border bg-surface px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-ink-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
