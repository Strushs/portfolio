import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 pb-20 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_65%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))]" />

      <Navbar />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 pt-28 sm:px-8 sm:pt-36">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 mx-auto mt-24 flex w-full max-w-5xl flex-col items-center gap-3 px-4 text-xs uppercase tracking-[0.28em] text-white/40">
        <span>© {currentYear} Dawid Strużyński</span>
      </footer>
    </div>
  );
}
