import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-xs tracking-widest text-paper/60 uppercase">
          Built with intent · {year}
        </p>
        <p className="font-display text-lg text-paper/80">
          {site.name}
        </p>
        <p className="font-mono text-xs text-paper/50">
          {site.email}
        </p>
      </div>
    </footer>
  );
}
