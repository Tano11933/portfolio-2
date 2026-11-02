# Gabriel Gaetano — Personal Portfolio

Website portfolio pribadi **Gabriel Gaetano Onen Baskara** — Software Developer dengan pengalaman freelance dan internship. Satu halaman, dibangun dengan **React 19 + TypeScript + Vite** dan **Tailwind CSS v4**.

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

Alurnya dirancang untuk kredibilitas & konversi: perkenalan → tools → studi kasus proyek → cara kerja → profil → kontak.

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
- Navigasi memakai fragment (`#work`, `#about`), sehingga tidak memerlukan rewrite global. Cloudflare Pages melayani file statis secara langsung.

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
- LinkedIn: <https://www.linkedin.com/in/gabriel-gaetano-onen-baskara/>
- GitHub: <https://github.com/Tano11933>

---

© 2026 Gabriel Gaetano Onen Baskara

## Pembaruan galeri dan akses agen (Oktober 2026)

Featured Work menampilkan EagleJeans, ArthaBooks dan Melodia (in progress). ReuseMart, Tritis, BookHive dan T2KAV Gym ada di More Work. Melodia memiliki lima screenshot terpilih dari aplikasi dengan data demo.

Galeri berisi 4–5 screenshot terpilih, accordion yang mengembang saat hover/focus di desktop, satu gambar pada container kecil, serta pembesaran melalui dialog yang mendukung keyboard. Geometri placeholder sama dengan komponen setelah dimuat. Screenshot sumber tetap utuh; aset terpilih dan versi penuh disimpan di `src/assets/images/projects/curated/`. `sources.json` mencatat sumbernya.

`python scripts/prepare-project-images.py` dapat mengenkode ulang screenshot dari `D:\PROJECT\SCREENSHOTS` menggunakan Pillow. Proses build biasa memakai WebP yang sudah disimpan dan tidak memerlukan folder screenshot atau Python.

`npm run build` juga menjalankan `scripts/generate-summary.mjs` untuk menghasilkan `public/index.md`, `public/llms.txt` dan sitemap dari data profil, proyek, skill serta credential. `/llms.txt` menunjuk ke ringkasan tersebut. `public/_headers` mengatur tipe konten kedua file di Cloudflare Pages. Rewrite global di `_redirects` dihapus agar tidak menimpa endpoint file statis. Sesudah deploy, periksa bahwa `/llms.txt` mengembalikan file teks, bukan halaman HTML fallback.

Pengujian browser: `node scripts/check-gallery.cjs` memerlukan Playwright dan Chrome. Atur `PLAYWRIGHT_MODULE` bila paket tersedia di lokasi lain, dan `CHROME_PATH` untuk executable lain. Script menjalankan server uji sementara di localhost:5183 dan menutupnya setelah pengujian. Hasil dan screenshot disimpan di `anti-slop/verification/`.

## Sinkronisasi CV (2 November 2026)

`src/data/profile.ts` adalah sumber profil, kontak, pendidikan, bahasa, pengalaman dan aktivitas organisasi. `src/data/projects.ts` menyimpan konteks serta kontribusi proyek. `src/data/credentials.ts` membedakan sertifikasi dengan penyelesaian kursus; `src/data/skills.ts` mengikuti daftar skill CV, termasuk Docker Compose foundational.

Metadata HTML dan JSON-LD memakai profile.ts lewat transform Vite, baik pada development maupun build. Generated Markdown dan llms.txt memakai data yang sama. Saat memperbarui konten, sesuaikan PROFILE.updated sebelum build.

CV tersedia melalui /cv/gabriel-gaetano-software-developer.pdf. Empat PDF credential utama tersedia di /credentials/; dokumen hanya dimuat jika dibuka. File ini merupakan salinan dokumen yang diberikan pemilik portfolio. Sumber asli tetap tidak diubah. Kedua alamat LinkedIn lama dan baru merujuk ke tujuan yang sama menurut pemilik; penulisan di situs menggunakan URL dalam CV agar konsisten.
