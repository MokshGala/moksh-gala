export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 overflow-hidden border-t border-gold/15" style={{ backgroundColor: "oklch(0.08 0.03 260)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-gold text-2xl mb-4">☠</div>
        <blockquote className="font-display italic text-lg md:text-xl text-foreground/85 leading-relaxed">
          "When you give up, that's when everything ends.<br />
          But when you keep going, a path appears."
        </blockquote>
        <p className="mt-3 text-sm text-gold tracking-[0.3em]">— RORONOA ZORO</p>

        <div className="divider-gold my-10" />

        <p className="text-xs text-muted-foreground tracking-[0.25em]">
          © {new Date().getFullYear()} MOKSH GALA · BUILT WITH PASSION & AI
        </p>
      </div>
    </footer>
  );
}
