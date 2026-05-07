import ship from "@/assets/ship.jpg";
import { SectionTitle } from "./SectionTitle";
import { Phone, Mail, Linkedin, Github, Code } from "lucide-react";

const items = [
  { Icon: Phone, label: "+91 9769199859", href: "tel:+919769199859" },
  { Icon: Mail, label: "mokshgala00@gmail.com", href: "mailto:mokshgala00@gmail.com" },
  { Icon: Linkedin, label: "linkedin.com/in/moksh-gala", href: "https://linkedin.com/in/moksh-gala" },
  { Icon: Github, label: "github.com/MokshGala", href: "https://github.com/MokshGala" },
  { Icon: Code, label: "leetcode.com/u/mokshgala00", href: "https://leetcode.com/u/mokshgala00" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <img src={ship} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1536} height={768} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="⚓">LET'S CONNECT</SectionTitle>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gold/15 hover:border-gold/60 hover:bg-gold/5 transition-all group">
                <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold group-hover:neon-glow transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-foreground/90 group-hover:text-gold truncate">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
