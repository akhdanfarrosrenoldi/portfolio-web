"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

export function About() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="section-tag"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? '// 01 — ABOUT' : '// 01 — TENTANG'}
      </motion.div>

      <motion.div
        className="about-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        <div className="about-photo">
          <Image
            src="/akhdan-white-square.jpg"
            alt="Akhdan Farros Renoldi"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="about-text">
          {portfolioData.about.paragraphs.map((para, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: para[language] }} />
          ))}

          <div className="about-meta">
            <div className="meta-item">
              <span className="meta-label">{language === 'en' ? 'LOCATION' : 'LOKASI'}</span>
              <span className="meta-value">{portfolioData.personal.location[language]}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">{language === 'en' ? 'EDUCATION' : 'PENDIDIKAN'}</span>
              <span className="meta-value">{portfolioData.personal.education[language]}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">{language === 'en' ? 'EMAIL' : 'EMAIL'}</span>
              <span className="meta-value">{portfolioData.personal.email}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
