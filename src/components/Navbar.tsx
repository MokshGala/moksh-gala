import { useEffect, useState } from "react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CERTIFICATES", href: "#certificates" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/80 backdrop-blur-xl border-b border-gold/20" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "oklch(0.10 0.035 260 / 0.85)" } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center text-gold text-lg neon-glow">
            ☠
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base tracking-[0.2em] text-foreground">MOKSH GALA</div>
            <div className="text-[10px] tracking-[0.35em] text-gold">AI ENGINEER</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-base">
          🪖
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold text-2xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gold/20" style={{ backgroundColor: "oklch(0.10 0.035 260 / 0.95)" }}>
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm tracking-[0.2em] text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
