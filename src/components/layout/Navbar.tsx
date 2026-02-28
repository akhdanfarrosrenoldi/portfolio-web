"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/lib/data";

const links = [
  { href: "#about", label: "about", labelId: "tentang" },
  { href: "#skills", label: "skills", labelId: "keahlian" },
  { href: "#experience", label: "experience", labelId: "pengalaman" },
  { href: "#projects", label: "projects", labelId: "proyek" },
  { href: "#contact", label: "contact", labelId: "kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link href="/" className="nav-logo" style={{ marginLeft: '12px' }}>
          <Image src="/logo.png" width={32} height={32} alt="Logo" style={{ width: '52px', height: '32px' }} priority />
        </Link>
      </nav>
    );
  }

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo" style={{ marginLeft: '12px' }}>
        <Image src="/logo.png" width={32} height={32} alt="Logo" style={{ width: '52px', height: '32px' }} priority />
      </Link>
      
      <div className="nav-right">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                {language === 'en' ? link.label : link.labelId}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          {/* Theme Toggle */}
          <button 
            className="theme-toggle" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {/* Sun icon (show in dark mode) */}
            <span className="icon-sun">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent)'}}>
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="2" y1="12" x2="5" y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
              </svg>
            </span>
            {/* Moon icon (show in light mode) */}
            <span className="icon-moon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent)'}}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </span>
          </button>

          {/* Lang Toggle */}
          <div className="lang-toggle">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
              onClick={() => setLanguage('en')}
            >
              <Image 
                src="https://flagcdn.com/w20/gb.png" 
                width={18} 
                height={12} 
                alt="EN" 
                style={{borderRadius: '2px', objectFit: 'cover'}} 
              /> 
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'id' ? 'active' : ''}`} 
              onClick={() => setLanguage('id')}
            >
              <Image 
                src="https://flagcdn.com/w20/id.png" 
                width={18} 
                height={12} 
                alt="ID" 
                style={{borderRadius: '2px', objectFit: 'cover'}} 
              /> 
              ID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
