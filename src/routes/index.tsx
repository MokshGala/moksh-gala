import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { EducationCerts } from "@/components/EducationCerts";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moksh Gala — AI Engineer Portfolio" },
      { name: "description", content: "Portfolio of Moksh Gala, AI Engineer building intelligent systems with ML, NLP, and Generative AI. Cinematic anime-inspired showcase of projects, skills, and journey." },
      { property: "og:title", content: "Moksh Gala — AI Engineer Portfolio" },
      { property: "og:description", content: "Building intelligent systems. Solving real problems." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <EducationCerts />
      <Contact />
      <Footer />
    </main>
  );
}
