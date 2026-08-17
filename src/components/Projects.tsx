import youtubeRag from "@/assets/project-youtube-rag.png.asset.json";
import docAgent from "@/assets/project-doc-agent.png.asset.json";
import fakenews from "@/assets/project-fakenews.jpg";
import skin from "@/assets/project-skin.jpg";
import summarizer from "@/assets/project-summarizer.jpg";
import { SectionTitle } from "./SectionTitle";

const projects = [
  {
    year: "2026",
    img: youtubeRag.url,
    title: "YouTube Video Q&A Chatbot (RAG)",
    desc: "End-to-end RAG pipeline that ingests YouTube transcripts, embeds them with Google's text-embedding-004, indexes them in FAISS, and answers questions via Gemini 2.5 Flash with source-transparent responses in a Streamlit app.",
    tags: ["Python", "LangChain", "FAISS", "Google Gemini", "Streamlit"],
  },
  {
    year: "2026",
    img: docAgent.url,
    title: "Autonomous Document Generation Agent",
    desc: "A 5-stage agent pipeline that turns natural-language requests into fully formatted Word documents. It plans structured sections via a deterministic tool registry, reflects on quality to rewrite weak parts, and exposes everything through a resilient FastAPI layer with Pydantic v2 validation, retries, and rolling memory.",
    tags: ["FastAPI", "Google Gemini", "python-docx", "Pydantic v2"],
  },
  {
    year: "2024",
    img: fakenews,
    title: "Fake News Detection",
    desc: "Machine learning pipeline that classifies news articles as real or fake using NLP techniques, TF-IDF vectorization, and ensemble models to combat misinformation.",
    tags: ["Python", "Scikit-learn", "NLTK", "TF-IDF"],
  },
  {
    year: "2024",
    img: skin,
    title: "Skin Disease Classification",
    desc: "Deep learning model using CNN, VGG16 and ResNet to classify skin diseases from medical images with high accuracy.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
  },
  {
    year: "2025",
    img: summarizer,
    title: "Automatic Text Summarizer",
    desc: "NLP-based Django web app for automatic text summarization using TF-IDF, NLTK and spaCy with word-specific summarization.",
    tags: ["Python", "Django", "NLTK", "spaCy"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle icon="⚓">FEATURED PROJECTS</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:border-gold/60" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1024} height={640} />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.035_260)] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 glass px-3 py-1 rounded text-xs tracking-[0.2em] text-gold font-semibold">{p.year}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-[0.15em] px-2.5 py-1 rounded border border-gold/30 text-gold/90 bg-gold/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
