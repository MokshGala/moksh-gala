import { SectionTitle } from "./SectionTitle";
import { Code2, Brain, Cpu, MessageSquare, Eye, Sparkles, Layers, Database, Globe, Wrench } from "lucide-react";

const groups = [
  { Icon: Code2, title: "PROGRAMMING", items: ["Python"] },
  { Icon: Brain, title: "MACHINE LEARNING", items: ["Scikit-learn", "Pandas", "NumPy"] },
  { Icon: Cpu, title: "DEEP LEARNING", items: ["TensorFlow", "Keras", "PyTorch"] },
  { Icon: MessageSquare, title: "NLP", items: ["NLTK", "TF-IDF", "Transformers"] },
  { Icon: Eye, title: "COMPUTER VISION", items: ["OpenCV", "Image Processing", "Data Augmentation", "Image Classification"] },
  { Icon: Sparkles, title: "GENERATIVE AI", items: ["LangChain", "LangGraph", "LangSmith", "RAG", "Prompt Engineering", "AI Agents", "OpenAI API", "Gemini API", "Groq", "Ollama", "Hugging Face Transformers"] },
  { Icon: Layers, title: "VECTOR DATABASES", items: ["FAISS", "ChromaDB"] },
  { Icon: Database, title: "DATABASES", items: ["PostgreSQL", "MySQL"] },
  { Icon: Globe, title: "FRAMEWORKS", items: ["Streamlit", "FastAPI", "Django"] },
  { Icon: Wrench, title: "TOOLS", items: ["Git", "GitHub", "DVC", "MLFlow"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="✦">SKILLS & TECH STACK</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="glass-card rounded-xl p-5 hover:border-gold/60 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gold/20">
                <g.Icon className="w-4 h-4 text-gold" />
                <h3 className="text-[11px] tracking-[0.25em] text-gold font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 hover:text-gold transition-colors">
                    <span className="w-1 h-1 rounded-full bg-gold/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
