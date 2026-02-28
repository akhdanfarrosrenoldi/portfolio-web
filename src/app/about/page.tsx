import { portfolioData } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-16 md:px-6 md:pt-28">
        <section className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
            About
          </p>
          <h1 className="font-display text-3xl font-semibold text-[var(--text)] md:text-4xl">
            {portfolioData.personal.name}
          </h1>
          <p className="text-sm text-[var(--muted2)]">
            {portfolioData.personal.title.en} · {portfolioData.personal.location.en}
          </p>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            {portfolioData.about.paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{paragraph.en}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

