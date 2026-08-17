import portrait from "@/assets/about-portrait.jpg";
import compass from "@/assets/compass.png";
import { SectionTitle } from "./SectionTitle";
import { MapPin, GraduationCap, Star } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <img src={compass} alt="" className="absolute -right-32 top-20 w-[500px] opacity-10 spin-slow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="☠">ABOUT ME</SectionTitle>

        <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">
          <div className="glass-card rounded-lg overflow-hidden gold-border-glow">
            <img src={portrait} alt="Anime portrait" className="w-full" loading="lazy" width={400} height={500} />
          </div>

          <div className="space-y-6">
            <p className="text-foreground/85 text-base md:text-lg leading-relaxed">
              I'm a B.Tech graduate in Artificial Intelligence and Data Science from
              Shah and Anchor Kutchhi Engineering College, with a strong foundation in machine learning,
              deep learning, NLP, computer vision, and Generative AI.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              Passionate about building intelligent solutions and continuously learning emerging technologies,
              I love turning ideas into real-world systems that create impact.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { Icon: MapPin, title: "LOCATION", value: "Mumbai, India" },
                { Icon: GraduationCap, title: "DEGREE", value: "B.Tech AIML\n(2022 – 2026)" },
                { Icon: Star, title: "INTERESTS", value: "AI · Coding\nAnime · Fitness" },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-lg p-5 text-center hover:border-gold/60 transition-all hover:-translate-y-1">
                  <item.Icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <div className="text-[10px] tracking-[0.3em] text-gold mb-1">{item.title}</div>
                  <div className="text-sm text-foreground whitespace-pre-line">{item.value}</div>
                </div>
              ))}
            </div>

            <blockquote className="glass-card rounded-lg p-6 mt-6 relative">
              <span className="absolute top-2 left-4 text-5xl text-gold/40 leading-none">“</span>
              <p className="italic text-foreground/85 pl-8">
                It's not about how far you go in life, it's about how much you grow while moving forward.
              </p>
              <footer className="text-right text-sm text-gold mt-2">— Monkey D. Luffy</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
