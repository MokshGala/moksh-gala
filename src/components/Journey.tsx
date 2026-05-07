import { SectionTitle } from "./SectionTitle";

const milestones = [
  { year: "2022", icon: "🎓", text: "Started my journey\nin AIML" },
  { year: "2023", icon: "⚔", text: "Built Fake News\nDetection" },
  { year: "2024", icon: "👁", text: "Explored Deep Learning\n& Computer Vision" },
  { year: "2025", icon: "🧠", text: "Entered Generative AI\nEra & Built NLP Projects" },
  { year: "2026", icon: "☠", text: "Ready to build impactful\nAI solutions" },
];

export function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="⚓">MY JOURNEY</SectionTitle>

        <div className="relative glass-card rounded-2xl p-8 md:p-12">
          <div className="hidden md:block absolute left-12 right-12 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {milestones.map((m) => (
              <div key={m.year} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.22_0.04_260)] to-[oklch(0.16_0.03_260)] border border-gold/60 flex items-center justify-center text-2xl neon-glow mb-4">
                  {m.icon}
                </div>
                <div className="font-display text-xl gold-gradient-text">{m.year}</div>
                <p className="text-xs text-foreground/75 mt-2 whitespace-pre-line leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
