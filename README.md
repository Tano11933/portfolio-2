# Gabriel Gaetano — Personal Portfolio

Website portfolio pribadi **Gabriel Gaetano Onen Baskara** — full-stack developer yang mengirim software produksi untuk bisnis nyata. Satu halaman, dibangun dengan **React 19 + TypeScript + Vite** dan **Tailwind CSS v4**.

🔗 **Live:** <https://gabrielgaetano-portfolio.pages.dev/>

![Preview](public/og-image.webp)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Tentang

Situs ini bukan CV digital statis. Satu halaman dengan satu pekerjaan: meyakinkan dua audiens sekaligus —

- **Klien / business owner** yang mencari developer freelance yang bisa dipercaya menangani proyek end-to-end.
- **Recruiter** yang melakukan scan cepat 5–10 detik untuk mencocokkan stack dan mencari bukti proyek nyata.

Alurnya dirancang untuk kredibilitas & konversi: perkenalan → bukti kepercayaan → cara kerja → studi kasus proyek → profil → kontak.

## 🧭 Struktur Halaman

Komposisi section ada di `src/App.tsx`:

| Section | Komponen | Peran |
| --- | --- | --- |
| Navbar | `components/layout/Navbar` | Navigasi sticky + CTA |
| Hero | `components/sections/Hero` | Perkenalan, positioning, CTA, status card |
| TrustBar | `components/sections/TrustBar` | Stack & sinyal kepercayaan |
| HowIWork | `components/sections/HowIWork` | Alur kerja bersama klien |
| FeaturedWork | `components/sections/FeaturedWork` | Studi kasus proyek (EagleJeans, ArthaBooks, ReuseMart, dll.) |
| About | `components/sections/About` | Profil singkat, di luar kode |
| Skills | `components/sections/Skills` | Kemampuan teknis & tools |
| Contact | `components/sections/Contact` | Ajakan kontak / hire |
| Footer | `components/layout/Footer` | Penutup & tautan sosial |

## 🛠️ Teknologi

| Kategori | Teknologi |
| --- | --- |
| Framework | React 19 |
| Bahasa | TypeScript 6 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (lewat `@tailwindcss/vite`, token terpusat di `src/index.css`) |
| Animasi | Motion 12 (Framer Motion) |
| Smooth scroll | Lenis — dibungkus `SmoothScrollProvider` di `src/lib/` |
| Font | Clash Display & Switzer (self-hosted di `public/fonts/`) + JetBrains Mono via `@fontsource` |
| Linting | ESLint 10 + typescript-eslint |

## 🚀 Menjalankan

### Prasyarat
- Node.js 20+ (disarankan versi LTS terbaru)
- npm

### Instalasi

```bash
git clone https://github.com/Tano11933/portfolio-2.git
cd portfolio-2
npm install
```

### Development server

```bash
npm run dev
```

Buka `http://localhost:5173` (HMR aktif).

### Build & pratinjau

```bash
npm run build     # type-check (tsc -b) + build produksi ke dist/
npm run preview   # sajikan hasil build secara lokal
npm run lint      # cek kode dengan ESLint
```

## ☁️ Deploy

Situs di-deploy sebagai **static site di Cloudflare Pages**:

- **Build command:** `npm run build`
- **Output directory:** `dist/`
- `public/_redirects` menangani fallback SPA (semua rute diarahkan ke `index.html`).

## 📁 Struktur Proyek

```
portfolio-2/
├─ public/
│  ├─ fonts/            # Clash Display & Switzer (self-hosted)
│  ├─ favicon.svg
│  ├─ og-image.webp     # gambar Open Graph 1200×630
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ _redirects        # SPA fallback untuk hosting statis
├─ src/
│  ├─ components/
│  │  ├─ layout/        # Navbar, Footer
│  │  └─ sections/      # Hero, TrustBar, HowIWork, FeaturedWork, About, Skills, Contact
│  ├─ lib/              # helper (termasuk SmoothScrollProvider / Lenis)
│  ├─ data/             # sumber konten situs
│  ├─ styles/
│  ├─ App.tsx           # komposisi section
│  ├─ main.tsx          # entry point React
│  └─ index.css         # design token (Tailwind v4)
├─ PRD.md               # tujuan produk, audiens, prioritas konten
├─ DESIGN-SYSTEM.md     # token desain & aturan komponen
├─ CONTENT-STRATEGY.md  # strategi bahasa & copy
├─ index.html           # SEO: canonical, OG, Twitter card, JSON-LD, font preload
├─ vite.config.ts
└─ package.json
```

## 🔍 Catatan Teknis

**SEO lengkap sejak rilis pertama.** `index.html` memuat canonical URL, Open Graph, Twitter card, JSON-LD (`Person` + `WebSite`), `robots.txt`, dan `sitemap.xml` — situs statis tetap bisa muncul rapi saat link-nya dibagikan ke LinkedIn/WhatsApp.

**Strategi preload font yang diukur.** Hanya font yang tampil di atas lipatan yang di-preload (Clash Display 600/500 dan Switzer 400/600 di 1440×900 & 360×740); pilihan pengecualiannya didokumentasikan langsung sebagai komentar di `index.html` — misalnya Switzer 500 sengaja tidak ikut preload karena penggunaannya baru muncul di bawah lipatan.

**Tailwind v4 tanpa config JS.** Token desain (warna, tipografi, animasi) dideklarasikan terpusat di CSS (`src/index.css`), satu sumber kebenaran untuk seluruh tampilan.

**Aksesibilitas dasar terjaga.** Struktur landmark `<main id="main">` disiapkan sebagai target skip-link, dan seluruh section dikomposisikan di satu tempat (`App.tsx`) supaya urutan baca tetap jelas.

## 📝 Dokumentasi

Keputusan produk & desain tidak berhenti di kode:

- `PRD.md` — tujuan, audiens, prioritas proyek, non-functional requirements.
- `DESIGN-SYSTEM.md` — token desain & aturan komponen.
- `CONTENT-STRATEGY.md` — strategi konten & bahasa.

## 📬 Kontak

- Website: <https://gabrielgaetano-portfolio.pages.dev/>
- LinkedIn: <https://www.linkedin.com/in/gabrielgaetanoonenbaskara>
- GitHub: <https://github.com/Tano11933>

---

© 2026 Gabriel Gaetano Onen Baskara
