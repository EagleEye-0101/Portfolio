interface TerminalPreviewProps {
  title: string;
  year: string;
  stack: string[];
}

export function TerminalPreview({ title, year, stack }: TerminalPreviewProps) {
  const shortTitle = title.split("—")[0].trim().replace(/\s+/g, "_");
  const stackLines = stack.map((tech) => `    "${tech}",`).join("\n");

  return (
    <div className="terminal-window h-full">
      <div className="terminal-chrome">
        <span className="terminal-dot bg-[#ff5f57]" />
        <span className="terminal-dot bg-[#febc2e]" />
        <span className="terminal-dot bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[0.6rem] tracking-wide text-paper/50">
          {shortTitle}.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.7rem] leading-relaxed text-paper/85 sm:p-5 sm:text-xs">
        <code>
          <span className="text-copper-light">const</span> project = {"{"}
          {"\n"}
          {"  "}name: <span className="text-[#a8d8a8]">&quot;{shortTitle}&quot;</span>,
          {"\n"}
          {"  "}year: <span className="text-[#a8d8a8]">&quot;{year}&quot;</span>,
          {"\n"}
          {"  "}stack: [
          {"\n"}
          {stackLines}
          {"\n"}
          {"  "}],
          {"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  );
}
