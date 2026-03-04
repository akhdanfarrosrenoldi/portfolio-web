"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { personalProjects } from "@/lib/personal-projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function PersonalProjects() {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage();

  return (
    <section id="personal-projects" ref={ref}>
      <motion.div
        className="section-tag"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === "en"
          ? "// 05 — PERSONAL PROJECTS"
          : "// 05 — PROYEK PRIBADI"}
      </motion.div>

      <motion.h2
        className="section-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={revealVariant}
      >
        {language === "en" ? "Personal Projects" : "Proyek Pribadi"}
      </motion.h2>

      <div className="projects-grid">
        {personalProjects.map((project, index) => {
          const isComingSoon = project.status === "coming-soon";

          return (
            <motion.div
              key={project.id}
              className="project-card"
              style={{
                padding: 0,
                opacity: isComingSoon ? 0.5 : 1,
                overflow: "hidden",
              }}
              custom={index * 0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={revealVariant}
            >
              {/* Preview image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {isComingSoon ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ cursor: "default", filter: "brightness(0.45)" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="tag"
                        style={{ fontSize: "9px", letterSpacing: "0.15em" }}
                      >
                        {language === "en" ? "COMING SOON" : "SEGERA HADIR"}
                      </span>
                    </div>
                  </>
                ) : (
                  <a
                    href={project.liveUrl ?? project.githubUrls[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    tabIndex={0}
                    aria-label={language === "en" ? `Open ${project.title} live site` : `Buka situs ${project.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{ cursor: "pointer" }}
                      loading="lazy"
                    />
                  </a>
                )}
              </div>

              {/* Card content */}
              <div
                style={{
                  padding: "24px 28px 20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Title */}
                <div className="project-name" style={{ marginBottom: "10px" }}>
                  {project.title}
                </div>

                {/* Description */}
                <p className="project-desc" style={{ marginBottom: "16px" }}>
                  {project.description[language]}
                </p>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="project-tags" style={{ marginBottom: "20px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer actions */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: project.tags.length === 0 ? "4px" : "0",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {project.githubUrls.map((gh) => (
                    <a
                      key={gh.url}
                      href={gh.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub — ${gh.label}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--muted)")
                      }
                    >
                      <Github size={13} strokeWidth={1.75} />
                      {gh.label}
                    </a>
                  ))}

                  {!isComingSoon && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={language === "en" ? "Live preview" : "Pratinjau langsung"}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        color: "var(--accent)",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      <ExternalLink size={12} strokeWidth={1.75} />
                      {language === "en" ? "Preview →" : "Pratinjau →"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
