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

export function Experience() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();

  const formatPeriod = (period: string) => {
    // "Oct 2024 – Jan 2025" -> "Oct 2024<br>— Jan 2025"
    if (period.includes("–")) {
        const [start, end] = period.split("–").map(s => s.trim());
        return <span dangerouslySetInnerHTML={{ __html: `${start}<br>— ${end}` }} />;
    }
    return period;
  };

  return (
    <section id="experience" ref={ref}>
      <motion.div
        className="section-tag"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? '// 03 — EXPERIENCE' : '// 03 — PENGALAMAN'}
      </motion.div>

      <motion.h2
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === 'en' ? 'Work History' : 'Riwayat Kerja'}
      </motion.h2>

      <div className="timeline">
        {portfolioData.experience.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            custom={index * 0.1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariant}
          >
            <div className="timeline-date">
                {formatPeriod(item.period)}
            </div>
            
            <div className="timeline-line">
              <div className="timeline-dot"></div>
              <div className="timeline-connector"></div>
            </div>

            <div className="timeline-content">
              <div className="timeline-role">{item.role[language]}</div>
              <div className="timeline-company">{item.company} · {item.type[language]}</div>
              <ul className="timeline-points">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point[language]}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
