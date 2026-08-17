import ship from "@/assets/ship.jpg";
import { SectionTitle } from "./SectionTitle";
import { Phone, Mail, Linkedin, Github, Code } from "lucide-react";

const items = [
  { Icon: Phone, label: "Phone", href: "tel:+919769199859" },
  { Icon: Mail, label: "Email", href: "mailto:mokshgala00@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/moksh-gala-a6435125b/" },
  { Icon: Github, label: "GitHub", href: "https://github.com/MokshGala" },
  { Icon: Code, label: "LeetCode", href: "https://leetcode.com/u/mokshgala00" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <img src={ship} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-20" width={1536} height={768} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="⚓">LET'S CONNECT</SectionTitle>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-wrap justify-center gap-6">
            {items.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold hover:neon-glow hover:border-gold hover:bg-gold/10 transition-all">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
