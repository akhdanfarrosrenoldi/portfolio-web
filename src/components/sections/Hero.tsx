"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export function Hero() {
  const { language } = useLanguage();
  const nameParts = portfolioData.personal.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts[1];
  const lastName = nameParts[2];

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-tag"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {"// SOFTWARE ENGINEER"}
        </motion.div>
        
        <motion.h1
          className="hero-name"
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {firstName}
          <br />
          {middleName} <span className="last">{lastName}</span>
        </motion.h1>

        <motion.div
          className="hero-title"
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {portfolioData.personal.tagline[language]}
          <span className="cursor"></span>
        </motion.div>

        <motion.p
          className="hero-desc"
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          {portfolioData.personal.description[language]}
        </motion.p>

        <motion.div
          className="hero-cta"
          custom={1.0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <Link href="#projects" className="btn-primary">
            {language === 'en' ? 'View Projects ↓' : 'Lihat Proyek ↓'}
          </Link>
          <Link href="/CV_AkhdanFR.pdf" className="btn-outline" target="_blank">
            {language === 'en' ? 'Download CV' : 'Unduh CV'}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        custom={1.2}
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        <div className="scroll-line"></div>
        {language === 'en' ? 'SCROLL' : 'GULIR'}
      </motion.div>
    </section>
  );
}
