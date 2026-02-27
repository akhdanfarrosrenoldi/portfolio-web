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

export function Skills() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();

  return (
    <section id="skills" ref={ref}>
      <motion.div
        className="section-tag"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? '// 02 — SKILLS' : '// 02 — KEAHLIAN'}
      </motion.div>

      <motion.h2
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? 'Tech Stack' : 'Teknologi'}
      </motion.h2>

      <div className="skills-grid">
        {portfolioData.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            className="skill-group"
            custom={index * 0.1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariant}
          >
            <div className="skill-group-title">{skillGroup.category[language].toUpperCase()}</div>
            <div className="skill-items">
              {skillGroup.items.map((skill) => (
                <div key={skill} className="skill-item">
                  <div className="skill-dot"></div> {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
