## portfolio-akhdan

Website portfolio pribadi untuk menampilkan pengalaman, skill, dan proyek yang pernah dikerjakan oleh Akhdan. Dibangun dengan standar engineering yang mirip workflow startup (branching strategy jelas, CI/CD, dan deploy via Docker).

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + komponen UI bergaya shadcn/ui
- Package manager: npm
- Container: Docker + docker-compose
- CI/CD: GitHub Actions

## Struktur Project

- `app/` – Next.js App Router: halaman dan layout
- `components/` – reusable UI components (button, input, textarea, dsb.)
- `lib/` – utilities dan data statis (misalnya data portfolio)
- `hooks/` – custom React hooks
- `types/` – type definition TypeScript
- `public/` – static assets

## Menjalankan Secara Lokal (tanpa Docker)

Pastikan Node.js 20+ sudah terinstall.

```bash
npm install
npm run dev
```

Aplikasi akan berjalan di http://localhost:3000.

Script lain yang tersedia:

```bash
npm run build   # build production
npm run start   # menjalankan hasil build
npm run lint    # menjalankan eslint
```

## Menjalankan Dengan Docker

### Build dan run secara manual

```bash
docker build -t portfolio-akhdan .
docker run -p 3000:3000 --name portfolio-akhdan portfolio-akhdan
```

### Menggunakan docker-compose (untuk development)

```bash
docker compose up
```

Secara default akan menjalankan `npm run dev` di dalam container dan memetakan port 3000 ke host.

## Branch Strategy

Branch utama yang digunakan:

- `main` → production
- `develop` → staging
- `feature/nama-fitur` → pengembangan feature sebelum di-merge ke `develop`

Alur kerja yang disarankan:

1. Branch baru dari `develop`:

   ```bash
   git checkout develop
   git pull
   git checkout -b feature/nama-fitur
   ```

2. Coding dan commit seperti biasa.
3. Push branch, lalu buat Pull Request ke `develop`.
4. Setelah fitur stabil di staging, buat PR dari `develop` ke `main` untuk release ke production.

## CI/CD – GitHub Actions

Terdapat dua workflow di `.github/workflows`:

### Staging (`staging.yml`)

Trigger: push ke branch `develop`.

Job:

1. Lint check (`npm run lint`)
2. Build check (`npm run build`)
3. Build & push Docker image ke Docker Hub dengan tag `:staging`
4. Deploy ke server staging via SSH:
   - SSH ke server menggunakan secrets
   - Pull image terbaru
   - Stop dan remove container lama
   - Run container baru dengan nama `portfolio-akhdan-staging`

### Production (`production.yml`)

Trigger: push ke branch `main`.

Job:

1. Lint check (`npm run lint`)
2. Build check (`npm run build`)
3. Build & push Docker image ke Docker Hub dengan tag `:latest`
4. Deploy ke server production via SSH:
   - SSH ke server menggunakan secrets
   - Pull image terbaru
   - Stop dan remove container lama
   - Run container baru dengan nama `portfolio-akhdan-production`

### Secrets yang Digunakan

Atur secrets berikut di GitHub repository:

- `DOCKER_USERNAME`
- `DOCKER_TOKEN`
- `STAGING_HOST`
- `STAGING_USER`
- `STAGING_SSH_KEY`
- `PRODUCTION_HOST`
- `PRODUCTION_USER`
- `PRODUCTION_SSH_KEY`

## Environment Variables

Contoh file `.env` bisa dilihat di `.env.example`.

Variabel yang digunakan aplikasi:

- `NEXT_PUBLIC_SITE_URL` – URL publik website (misal: `http://localhost:3000` atau `https://portfolio-akhdan.com`)
- `NEXT_PUBLIC_APP_NAME` – Nama aplikasi yang tampil di UI
- `NODE_ENV` – environment Node (`development`, `production`, dll.)

Variabel untuk CI/CD diset sebagai GitHub Secrets (lihat bagian di atas).

## Cara Deploy

High-level flow:

1. Pastikan Docker dan docker-compose sudah terinstall di server.
2. Login ke Docker Hub dari server (minimal sekali):

   ```bash
   docker login
   ```

3. Siapkan GitHub repository dengan secrets yang sudah disebutkan.
4. Siapkan branch:
   - Push ke `develop` → otomatis build & deploy ke staging.
   - Push/merge ke `main` → otomatis build & deploy ke production.

Di server, container akan dijalankan dengan `docker run` sesuai script pada workflow GitHub Actions.
