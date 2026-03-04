export interface PersonalProject {
  id: number
  title: string
  description: { en: string; id: string }
  tags: string[]
  liveUrl: string | null
  githubUrls: {
  label: string
  url: string
  }[]
  previewImage: string
  status: 'live' | 'coming-soon'
}

export const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: "Greens & Co.",
    description: {
      en: "A full-stack F&B e-commerce platform built for a healthy food brand offering delivery and pickup ordering. Features a customer-facing storefront with product catalog, variant selection, cart management, and Midtrans payment integration — alongside a fully functional admin dashboard for managing products, categories, bundles, and orders. Built with Next.js, Go + Echo (Repository Pattern), and PostgreSQL, with Supabase Auth handling authentication and JWT-based route protection.",
      id: "Platform e-commerce F&B full-stack untuk brand makanan sehat dengan layanan pesan antar dan ambil di tempat. Dilengkapi storefront untuk pelanggan dengan katalog produk, pemilihan varian, manajemen keranjang, dan integrasi pembayaran Midtrans — serta dashboard admin lengkap untuk mengelola produk, kategori, bundel, dan pesanan. Dibangun dengan Next.js, Go + Echo (Repository Pattern), dan PostgreSQL, dengan Supabase Auth untuk autentikasi dan proteksi route berbasis JWT."
    },
    tags: ["Next.js", "Go", "PostgreSQL", "Supabase"],
    liveUrl: "https://greensco.vercel.app",
    githubUrls: [
      {
        label: "Frontend",
        url: "https://github.com/akhdanfarrosrenoldi/greens-co-frontend"
      },
      {
        label: "Backend",
        url: "https://github.com/akhdanfarrosrenoldi/greens-co-backend"
      }
    ],
    previewImage: "/greensco.png",
    status: "live"
  },
  {
    id: 2,
    title: "Portfolio Web",
    description: {
      en: "A personal portfolio website showcasing my work, experience, and technical background as a Software Engineer. Features bilingual support (EN/ID), smooth scroll reveal animations, and a clean dark-themed design — covering about, skills, work experience, selected projects, and a contact form. Built with Next.js, TypeScript, and Tailwind CSS, with Framer Motion handling animations and a custom Language Context managing the EN/ID toggle across all sections.",
      id: "Website portofolio pribadi yang menampilkan karya, pengalaman, dan latar belakang teknis saya sebagai Software Engineer. Dilengkapi dukungan bilingual (EN/ID), animasi scroll reveal yang halus, dan desain bertema gelap yang bersih — mencakup bagian tentang, keahlian, pengalaman kerja, proyek pilihan, dan formulir kontak. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS, dengan Framer Motion untuk animasi dan Language Context kustom yang mengelola toggle EN/ID di seluruh bagian."
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://akhdanfarrosrenoldi.vercel.app",
    githubUrls: [
      {
        label: "GitHub",
        url: "https://github.com/akhdanfarrosrenoldi/portfolio-web"
      }
    ],
    previewImage: "/portfolio-preview.png",
    status: "live"
  },
  {
    id: 3,
    title: "JobTrack",
    description: {
      en: "A personal job application tracker built with Next.js 14, TypeScript, Tailwind CSS, and Supabase. Features a productivity-focused dashboard to manage applications with status tracking (Applied, Interview, Offer, Rejected), salary range, deadlines, recruiter contacts, and notes — with real-time stats and Row Level Security via Supabase Auth.",
      id: "Pelacak lamaran kerja pribadi yang dibangun dengan Next.js 14, TypeScript, Tailwind CSS, dan Supabase. Dilengkapi dashboard yang berfokus pada produktivitas untuk mengelola lamaran dengan pelacakan status (Applied, Interview, Offer, Rejected), kisaran gaji, tenggat waktu, kontak rekruter, dan catatan — dengan statistik real-time dan Row Level Security melalui Supabase Auth."
    },
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://jobtrack-plum.vercel.app",
    githubUrls: [{
      label: "GitHub",
      url: "https://github.com/akhdanfarrosrenoldi/jobtrack"
    }],
    previewImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    status: "live"
  }
]
