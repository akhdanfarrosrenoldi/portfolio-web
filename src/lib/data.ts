export type LocalizedString = {
  en: string;
  id: string;
};

export type Personal = {
  name: string;
  initials: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  email: string;
  linkedin: string;
  phone: string;
  location: LocalizedString;
  education: LocalizedString;
};

export type About = {
  paragraphs: LocalizedString[];
};

export type SkillCategory = {
  category: LocalizedString;
  items: string[];
};

export type ExperienceItem = {
  role: LocalizedString;
  company: string;
  type: LocalizedString;
  period: string;
  points: LocalizedString[];
};

export type ProjectItem = {
  number: string;
  name: string;
  client: LocalizedString;
  description: LocalizedString;
  tags: string[];
  github: string;
  demo: string;
};

export type PortfolioData = {
  personal: Personal;
  about: About;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Akhdan Farros Renoldi",
    initials: "Akhdan",
    title: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    tagline: {
      en: "Building reliable web systems",
      id: "Membangun sistem web yang andal",
    },
    description: {
      en: "Fresh graduate from ITENAS Bandung with hands-on experience at PT. GITS Indonesia — shipping real products for Danone, Jasa Raharja, and Frisianflag.",
      id: "Fresh graduate dari ITENAS Bandung dengan pengalaman langsung di PT. GITS Indonesia — mengembangkan produk nyata untuk Danone, Jasa Raharja, dan Frisianflag.",
    },
    email: "renoldiakhdanfarros@gmail.com",
    linkedin: "https://linkedin.com/in/akhdanfarrosrenoldi",
    phone: "+62 822-1898-6548",
    location: {
      en: "Bandung, Indonesia",
      id: "Bandung, Indonesia",
    },
    education: {
      en: "Informatics — ITENAS Bandung",
      id: "Informatika — ITENAS Bandung",
    },
  },
  about: {
    paragraphs: [
      {
        en: "I'm a <strong>Software Engineer</strong> and fresh graduate from the Informatics program at Institut Teknologi Nasional Bandung. I thrive in collaborative environments and love picking up new technologies along the way.",
        id: "Saya adalah <strong>Software Engineer</strong> dan fresh graduate dari Program Studi Informatika di Institut Teknologi Nasional Bandung. Saya berkembang dalam lingkungan kolaboratif dan senang mempelajari teknologi baru.",
      },
      {
        en: "During my time at <strong>PT. GITS Indonesia</strong>, I worked on maintenance and feature development for enterprise clients like <strong>Danone, Jasa Raharja,</strong> and <strong>Frisianflag</strong> — giving me early exposure to real-world, production-grade systems.",
        id: "Selama bekerja di <strong>PT. GITS Indonesia</strong>, saya terlibat dalam maintenance dan pengembangan fitur untuk klien enterprise seperti <strong>Danone, Jasa Raharja,</strong> dan <strong>Frisianflag</strong> — memberikan saya pengalaman nyata dengan sistem production.",
      },
      {
        en: "I care about <strong>clean code, accurate delivery,</strong> and building things that actually work in the wild — not just in development.",
        id: "Saya peduli dengan <strong>kode yang bersih, pengiriman yang akurat,</strong> dan membangun sesuatu yang benar-benar berfungsi di dunia nyata — bukan hanya di lingkungan development.",
      },
    ],
  },
  skills: [
    {
      category: { en: "Frontend", id: "Frontend" },
      items: ["Next.js", "Vue.js", "Tailwind CSS", "Laravel Blade"],
    },
    {
      category: { en: "Backend", id: "Backend" },
      items: ["Node.js", "AdonisJS", "Laravel", "CodeIgniter", "Go"],
    },
    {
      category: { en: "Database & Infra", id: "Database & Infra" },
      items: ["MySQL", "MongoDB", "PostgreSQL", "Microservices"],
    },
    {
      category: { en: "Tools & Other", id: "Tools & Lainnya" },
      items: ["Git", "Postman", "Power BI", "Tableau", "Python / ML"],
    },
  ],
  experience: [
    {
      role: { en: "Fullstack Engineer", id: "Fullstack Engineer" },
      company: "PT. GITS Indonesia",
      type: { en: "Contract", id: "Kontrak" },
      period: "Oct 2025 – Present",
      points: [
        {
          en: "Maintained Frisianflag QNS using AdonisJS & MySQL — weekly server checks and monthly data insight reports for client.",
          id: "Maintenance Frisianflag QNS menggunakan AdonisJS & MySQL — pengecekan server mingguan dan laporan data insight bulanan untuk klien.",
        },
        {
          en: "Maintained Jasa Raharja JRKU (external & internal) using Node.js with Microservices architecture and MongoDB.",
          id: "Maintenance Jasa Raharja JRKU (eksternal & internal) menggunakan Node.js dengan arsitektur Microservices dan MongoDB.",
        },
        {
          en: "Maintained Jasa Raharja Webpartner using Go (backend), Next.js (frontend), and PostgreSQL.",
          id: "Maintenance Jasa Raharja Webpartner menggunakan Go (backend), Next.js (frontend), dan PostgreSQL.",
        },
        {
          en: "Implemented Danone SSO integration and developed new SSHCF V2 features for Danone NAV & BEST.",
          id: "Implementasi integrasi Danone SSO dan pengembangan fitur baru SSHCF V2 untuk Danone NAV & BEST.",
        },
      ],
    },
    {
      role: { en: "Software Engineer Intern", id: "Magang Software Engineer" },
      company: "PT. GITS Indonesia",
      type: { en: "Internship", id: "Magang" },
      period: "May 2025 – Aug 2025",
      points: [
        {
          en: "Developed Danone Nutribuy e-commerce website using Vue.js, Tailwind CSS, and Laravel Blade Template.",
          id: "Mengembangkan website e-commerce Danone Nutribuy menggunakan Vue.js, Tailwind CSS, dan Laravel Blade Template.",
        },
        {
          en: "Worked in an Agile Scrum environment with structured sprint cycles.",
          id: "Bekerja dalam lingkungan Agile Scrum dengan siklus sprint yang terstruktur.",
        },
      ],
    },
    {
      role: { en: "Website Developer Intern", id: "Magang Website Developer" },
      company: "PT. Industri Telekomunikasi Indonesia (Persero)",
      type: { en: "Internship", id: "Magang" },
      period: "Aug 2023 – Nov 2023",
      points: [
        {
          en: "Developed an internal CSR website for office use using CodeIgniter 4 and Bootstrap.",
          id: "Mengembangkan website CSR internal untuk keperluan kantor menggunakan CodeIgniter 4 dan Bootstrap.",
        },
      ],
    },
  ],
  projects: [
    {
      number: "01",
      name: "Danone Nutribuy",
      client: { en: "PT. GITS Indonesia · Danone", id: "PT. GITS Indonesia · Danone" },
      description: {
        en: "E-commerce platform for Danone's nutrition product line. Built with a full frontend-backend integration using modern JavaScript stack in an Agile environment.",
        id: "Platform e-commerce untuk lini produk nutrisi Danone. Dibangun dengan integrasi frontend-backend penuh menggunakan stack JavaScript modern dalam lingkungan Agile.",
      },
      tags: ["Vue.js", "Laravel", "Tailwind", "Agile"],
      github: "",
      demo: "",
    },
    {
      number: "02",
      name: "Jasa Raharja JRKU",
      client: { en: "PT. GITS Indonesia · Jasa Raharja", id: "PT. GITS Indonesia · Jasa Raharja" },
      description: {
        en: "Maintenance of external and internal insurance management systems built on a Node.js microservices architecture with MongoDB for high-availability data handling.",
        id: "Maintenance sistem manajemen asuransi eksternal dan internal yang dibangun di atas arsitektur microservices Node.js dengan MongoDB untuk penanganan data ketersediaan tinggi.",
      },
      tags: ["Node.js", "Microservices", "MongoDB", "Next.js"],
      github: "",
      demo: "",
    },
    {
      number: "03",
      name: "IndoBERT Sentiment Analysis",
      client: { en: "Undergraduate Thesis · ITENAS Bandung", id: "Skripsi · ITENAS Bandung" },
      description: {
        en: "Fine-tuned the IndoBERT NLP model to improve sentiment analysis accuracy on Indonesian product reviews — supporting data-driven marketing strategy decisions.",
        id: "Fine-tuning model NLP IndoBERT untuk meningkatkan akurasi analisis sentimen pada ulasan produk berbahasa Indonesia — mendukung pengambilan keputusan strategi pemasaran berbasis data.",
      },
      tags: ["Python", "IndoBERT", "scikit-learn", "NLP"],
      github: "",
      demo: "",
    },
  ],
};
