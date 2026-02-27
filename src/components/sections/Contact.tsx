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

export function Contact() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();

  return (
    <section id="contact" ref={ref}>
      <div className="contact-grid">
        <motion.div
          className="contact-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariant}
        >
          <div className="section-tag">{language === 'en' ? '// 05 — CONTACT' : '// 05 — KONTAK'}</div>
          <h2>
            {language === 'en' ? "Let's work" : "Mari bekerja"}
            <br />
            <span>{language === 'en' ? "together." : "bersama."}</span>
          </h2>
          <p>
            {language === 'en' 
              ? "Open to full-time roles, freelance projects, or just a good conversation about tech. Feel free to reach out."
              : "Terbuka untuk posisi full-time, proyek freelance, atau sekadar diskusi menarik seputar teknologi. Jangan ragu untuk menghubungi."}
          </p>
          
          <div className="contact-links">
            <a href={`mailto:${portfolioData.personal.email}`} className="contact-link">
              <div className="contact-link-icon">✉</div>
              {portfolioData.personal.email}
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" className="contact-link" rel="noopener noreferrer">
              <div className="contact-link-icon">in</div>
              linkedin.com/in/akhdanfarrosrenoldi
            </a>
            <a href={`https://wa.me/${portfolioData.personal.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="contact-link" rel="noopener noreferrer">
              <div className="contact-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              {portfolioData.personal.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          custom={0.2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariant}
        >
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'NAME' : 'NAMA'}</label>
            <input className="form-input" type="text" placeholder={language === 'en' ? "Your name" : "Nama Anda"} />
          </div>
          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input className="form-input" type="email" placeholder={language === 'en' ? "your@email.com" : "email@anda.com"} />
          </div>
          <div className="form-group">
            <label className="form-label">{language === 'en' ? 'MESSAGE' : 'PESAN'}</label>
            <textarea className="form-textarea" placeholder={language === 'en' ? "Tell me about your project..." : "Ceritakan tentang proyek Anda..."}></textarea>
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            {language === 'en' ? 'Send Message →' : 'Kirim Pesan →'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
