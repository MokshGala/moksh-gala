import { GraduationCap, Award } from "lucide-react";

const education = [
  { school: "Shah and Anchor Kutchhi Engineering College", detail: "B.Tech in Artificial Intelligence & Data Science", years: "(2022 – 2026)" },
  { school: "Mithibai College, Mumbai", detail: "HSC – Bifocal Computer Science", years: "" },
  { school: "St. Mary's High School, Mumbai", detail: "SSC", years: "" },
];

const certs = [
  "Machine Learning Specialization – Andrew Ng (Coursera, DeepLearning.AI)",
  "Python Full Stack Internship Credential – EduSkills Academy",
  "Intel – Get Started with Gen AI",
];

export function EducationCerts() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-7">
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gold/20">
            <GraduationCap className="w-5 h-5 text-gold" />
            <h3 className="font-display tracking-[0.2em] text-gold">EDUCATION</h3>
          </div>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.school} className="flex gap-3">
                <span className="text-gold mt-1">⚓</span>
                <div>
                  <div className="text-foreground font-semibold text-sm">{e.school}</div>
                  <div className="text-foreground/70 text-sm">{e.detail}</div>
                  {e.years && <div className="text-xs text-gold/80 mt-0.5">{e.years}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-xl p-7">
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gold/20">
            <Award className="w-5 h-5 text-gold" />
            <h3 className="font-display tracking-[0.2em] text-gold">CERTIFICATES</h3>
          </div>
          <ul className="space-y-4">
            {certs.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-foreground/85">
                <span className="text-gold">★</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
