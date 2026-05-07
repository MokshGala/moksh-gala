import heroOcean from "@/assets/hero-ocean.jpg";
import portrait from "@/assets/portrait.jpg";
import parchment from "@/assets/parchment.jpg";
import { Github, Linkedin, Mail, FolderOpen, Download, MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroOcean}
          alt="Cinematic sunset ocean with pirate ship"
          className="w-full h-full object-cover ocean-wave"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/55 to-background" style={{ background: "linear-gradient(180deg, oklch(0.10 0.035 260 / 0.85) 0%, oklch(0.12 0.03 260 / 0.55) 50%, var(--background) 100%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        {/* Left */}
        <div className="fade-up">
          <p className="text-gold tracking-[0.5em] text-xs md:text-sm mb-6">— AI ENGINEER —</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] gold-gradient-text text-glow">
            MOKSH<br />GALA
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-xl">
            Building Intelligent Systems. Solving Real Problems.
          </p>

          <blockquote className="mt-8 max-w-xl border-l-2 border-gold/60 pl-5 text-foreground/80 italic">
            <span className="text-gold text-3xl leading-none mr-1 align-top">“</span>
            No matter how hard or impossible it is, never lose sight of your goal.
            <span className="text-gold text-3xl leading-none ml-1 align-bottom">”</span>
            <footer className="mt-2 not-italic text-sm text-gold tracking-wider">— Monkey D. Luffy</footer>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[oklch(0.82_0.16_80)] to-[oklch(0.68_0.16_70)] text-primary-foreground px-6 py-3 rounded-md text-xs tracking-[0.2em] font-bold neon-glow hover:scale-105 transition-transform">
              <FolderOpen className="w-4 h-4" /> VIEW PROJECTS
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs tracking-[0.2em] font-bold text-foreground hover:border-gold transition-colors">
              <Download className="w-4 h-4 text-gold" /> DOWNLOAD RESUME
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs tracking-[0.2em] font-bold text-foreground hover:border-gold transition-colors">
              <MessageSquare className="w-4 h-4 text-gold" /> CONTACT ME
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/MokshGala" },
              { Icon: Linkedin, href: "https://linkedin.com/in/moksh-gala" },
              { Icon: Mail, href: "mailto:mokshgala00@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-gold hover:neon-glow hover:border-gold transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Wanted Poster */}
        <div className="relative mx-auto w-full max-w-sm fade-up float-slow">
          <div className="relative rounded-md overflow-hidden shadow-card" style={{ boxShadow: "0 30px 80px -20px oklch(0 0 0 / 0.7), 0 0 60px -10px oklch(0.85 0.15 85 / 0.25)" }}>
            <img src={parchment} alt="Wanted poster" className="w-full" width={768} height={1024} />
            <div className="absolute inset-0 flex flex-col p-6 sm:p-8 text-[oklch(0.18_0.05_40)]">
              <div className="text-center font-display font-black text-4xl sm:text-5xl tracking-wider" style={{ color: "oklch(0.22 0.06 40)" }}>
                WANTED
              </div>
              <div className="mt-3 mx-auto w-[80%] aspect-square rounded-sm overflow-hidden border-4" style={{ borderColor: "oklch(0.35 0.08 50)" }}>
                <img src={portrait} alt="Moksh Gala portrait" className="w-full h-full object-cover" width={400} height={400} />
              </div>
              <div className="mt-4 text-center">
                <div className="font-display font-bold text-lg tracking-wider" style={{ color: "oklch(0.22 0.06 40)" }}>MOKSH GALA</div>
                <div className="text-[11px] tracking-[0.3em] mt-1" style={{ color: "oklch(0.32 0.07 45)" }}>AI ENGINEER</div>
                <div className="my-3 mx-auto w-12 h-px" style={{ backgroundColor: "oklch(0.35 0.08 50)" }} />
                <div className="text-[10px] tracking-[0.2em] font-semibold" style={{ color: "oklch(0.30 0.07 45)" }}>
                  BUILDING SOLUTIONS<br />THAT CREATE IMPACT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
