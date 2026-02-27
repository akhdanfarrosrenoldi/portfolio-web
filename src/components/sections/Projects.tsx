"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" }
  }),
};

export function Projects() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();
  const totalProjects = portfolioData.projects.length;

  return (
    <section id="projects" ref={ref}>
      <motion.div
        className="section-tag"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? '// 04 — PROJECTS' : '// 04 — PROYEK'}
      </motion.div>

      <motion.h2
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? 'Selected Work' : 'Karya Pilihan'}
      </motion.h2>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.number}
            className="project-card"
            custom={index * 0.1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariant}
          >
            <div className="project-num">{project.number} / {totalProjects.toString().padStart(2, '0')}</div>
            <div className="project-name">{project.name}</div>
            <div className="project-client">{project.client[language]}</div>
            <p className="project-desc">
              {project.description[language]}
            </p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
