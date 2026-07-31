# PRD — Gabriel Gaetano Onen Baskara Portfolio

## 1. Overview

**Product:** Portfolio website pribadi untuk Gabriel Gaetano Onen Baskara — mahasiswa Informatika (UAJY) sekaligus freelance full-stack developer.

**Tujuan utama (single job halaman ini):** meyakinkan dua audiens berbeda dalam satu halaman —
1. **Client/business owner** yang mencari developer freelance terpercaya (seperti klien EagleJeans).
2. **Recruiter/perusahaan** yang mengevaluasi kandidat SDE fresh graduate.

**Bukan tujuannya:** blog pribadi, CV digital statis, atau showcase eksperimen desain semata. Setiap elemen visual harus tetap melayani kredibilitas & konversi (contact/hire).

## 2. Positioning

Bukan "mahasiswa yang belajar coding" — tapi **"developer yang sudah mengirim software produksi nyata sambil menyelesaikan studi formal."** Bukti: EagleJeans (sistem produksi konveksi yang dipakai klien nyata, ko Arnold), ArthaBooks (sistem akuntansi skripsi, grade akademik penuh), Kerja Praktik di PT Aerotek Global Inovasi (Beehive Drones).

Diferensiasi: rigor akademik (dokumentasi, testing, arsitektur) + kecepatan delivery freelance (workflow Claude Code, git disiplin, commit per fitur).

## 3. Audience & Konteks Baca

- Klien kecil-menengah (UMKM, konveksi, bisnis lokal) — butuh percaya developer bisa handle end-to-end, bukan cuma coding.
- Recruiter teknis — scan cepat 5-10 detik, cari stack match & bukti project real (bukan tutorial).
- Kedua audiens sama-sama akan buka di mobile pertama kali (share link LinkedIn/WA).

## 4. Informasi Arsitektur (Sitemap — single page + anchor)

```
/ (single-page scroll)
├── Nav (sticky)
├── Hero
├── Trust/Stack bar
├── How I Work (proses)
├── Featured Work (case studies, urutan prioritas di bawah)
├── All Projects (grid ringkas, sisanya)
├── About / Beyond Code
├── Skills
├── Contact / CTA
└── Footer
```

Tidak perlu multi-page dulu (v1) — kompleksitas routing tidak sepadan untuk portfolio single-person. Bisa expand ke `/work/[slug]` detail case study di v2 kalau perlu (lihat §8).

## 5. Prioritas Urutan Proyek (Featured Work)

Ditentukan oleh: kompleksitas nyata + relevansi ke dua audiens, bukan kronologi.

1. **EagleJeans** — Laravel PWA, client production nyata, QR scanning, 13 tahap produksi, role-based access. → bukti kerja freelance real, ongoing.
2. **ArthaBooks** — sistem akuntansi double-entry, skripsi. → bukti rigor teknis & akademik (SAK EMKM, audit trail, 5 laporan keuangan).
3. **ReuseMart** — marketplace 9 role, Laravel + Flutter + MySQL. → bukti mampu handle sistem kompleks multi-role, web+mobile sekaligus.
4. **BookHive** — Laravel & MySQL, 3 role. → proyek solid tapi lebih ringkas, jadi kandidat "all projects", bukan featured utama.
5. **T2KAV Gym** — Flutter mobile. → bukti kemampuan mobile-only.
6. **Padukuhan Tritis** — React, website profil desa. → bukti frontend/React murni, publik-facing, storytelling visual.

Kerja Praktik (Beehive Drones) masuk sebagai poin pengalaman profesional, bukan project card — beda kategori (magang, bukan proyek pribadi/klien).

## 6. Tech Stack (build)

- **Framework:** React (Vite, bukan Next.js — situs single-page statis, tidak perlu SSR/routing kompleks)
- **Smooth scroll:** Lenis
- **Animasi:** Motion (Framer Motion)
- **Styling:** Tailwind CSS + CSS variables untuk design tokens
- **Deploy:** Vercel/Netlify (statis)
- **Font loading:** self-host via `@fontsource` atau Fontshare CDN

## 7. Non-functional Requirements

- Responsive penuh sampai 360px (banyak trafik share link akan dari mobile)
- Lighthouse performance ≥ 90 — animasi tidak boleh bikin jank, pakai `will-change` & `transform` bukan reflow properties
- Reduced-motion dihormati (`prefers-reduced-motion`) — matikan gradient mesh animasi & parallax berat
- Semua CTA (email, WhatsApp, LinkedIn) harus real link, bukan placeholder
- Gambar project di-compress (WebP/AVIF), lazy-load di luar viewport pertama

## 8. Out of Scope (v1)

- CMS/blog
- Multi-language toggle (ID/EN) — keputusan bahasa dibuat di awal, lihat CONTENT-STRATEGY.md §1
- Halaman detail case study terpisah (`/work/slug`) — bisa jadi v2 kalau portfolio makin ramai proyek
- Dark/light mode toggle — palet sudah gelap-dasar by design, tidak perlu mode ganda di v1

## 9. Sumber Konten

CV terlampir (`CV_Gabriel_Gaetano_Onen_Baskara`) + konteks proyek EagleJeans, ArthaBooks, dan Kerja Praktik yang sudah didiskusikan sebelumnya. Detail draft copy ada di `CONTENT-STRATEGY.md`. Token desain & komponen ada di `DESIGN-SYSTEM.md`.

## 10. Definition of Done (v1)

- [ ] Semua 6 section di §4 ter-render, responsive 360px–1920px
- [ ] Minimal 4 case study (EagleJeans, ArthaBooks, ReuseMart, 1 lainnya) dengan format konsisten
- [ ] Signature gradient-mesh hero berjalan smooth di desktop & tidak berat di mobile (fallback static gradient di bawah 768px kalau perlu)
- [ ] CTA contact berfungsi (mailto/WA link teruji)
- [ ] Lulus review desain sendiri terhadap checklist di DESIGN-SYSTEM.md §7
