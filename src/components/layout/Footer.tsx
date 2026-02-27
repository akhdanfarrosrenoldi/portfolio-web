"use client";

import { portfolioData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-text">© {year} {portfolioData.personal.name}</div>
      <div className="footer-text">
        {language === 'en' 
          ? "Built with Next.js · Designed with intention" 
          : "Dibangun dengan Next.js · Dirancang dengan niat"}
      </div>
    </footer>
  );
}
