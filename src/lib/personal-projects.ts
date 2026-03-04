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
      en: "Full-stack F&B e-commerce platform with admin dashboard, cart system, and Supabase auth. Built with Next.js, Go + Echo, and PostgreSQL.",
      id: "Platform e-commerce F&B full-stack dengan dashboard admin, sistem keranjang, dan autentikasi Supabase. Dibangun dengan Next.js, Go + Echo, dan PostgreSQL."
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
      en: "Personal portfolio website with bilingual support (EN/ID), dark/light mode toggle, and smooth scroll animations.",
      id: "Website portofolio pribadi dengan dukungan bilingual (EN/ID), toggle mode gelap/terang, dan animasi scroll yang halus."
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://akhdanfarrosrenoldi.vercel.app",
    githubUrls: [
      {
        label: "GitHub",
        url: "https://github.com/akhdanfarrosrenoldi/portfolio-web"
      }
    ],
    previewImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    status: "live"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: {
      en: "Next project in progress. Stay tuned.",
      id: "Proyek berikutnya sedang dalam pengerjaan. Pantau terus."
    },
    tags: [],
    liveUrl: null,
    githubUrls: [
      // {
      //   label: "GitHub",
      //   url: "https://github.com/akhdanfarrosrenoldi/shaynacosmeticbackend"
      // }
    ],
    previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    status: "coming-soon"
  }
]
