# Design System — Portfolio Gabriel G.O. Baskara

Tema: **Engineered Metal Flow** — presisi ala instrumen/metalurgi, dipadukan dengan gradient metalik yang bergerak (jawaban literal atas "warna mengalir"). Referensi: layout Stacklane, hero composition Armory, navbar-behavior Augen.

---

## 1. Color Tokens

| Token | Hex | Peran |
|---|---|---|
| `--color-onyx` | `#0A0A0A` | Background dasar, teks utama di atas terang |
| `--color-platinum` | `#E5E4E2` | Background terang (section alternatif), teks utama di atas gelap |
| `--color-steel` | `#536878` | Aksen utama — link, border aktif, ikon |
| `--color-steel-deep` | `#2B3640` | Transisi Steel→Onyx, dipakai di gradient mesh & card gelap |
| `--color-steel-light` | `#7C93A3` | Hover state, ikon sekunder, teks caption di atas gelap |
| `--color-platinum-muted` | `#C9C7C3` | Divider, teks sekunder di atas terang |
| `--color-success` | `#4A7A5E` | Status "available for work" (dipakai sangat jarang) |

**Gradient signature — "Metal Flow":**
```css
--gradient-flow: linear-gradient(135deg, var(--color-steel) 0%, var(--color-steel-deep) 45%, var(--color-onyx) 100%);
```
Dipakai di: hero background mesh (animasi lambat, posisi bergeser ±15% berdasar scroll/mouse), border gradient di card unggulan, hover state tombol primer.

**Aturan pemakaian:**
- Onyx & Platinum = 90% dari luas halaman (base). Steel & turunannya = aksen, maksimal ~10%.
- Jangan pakai gradient flow di lebih dari 1 elemen besar per viewport — supaya tetap terasa signature, bukan dekorasi berulang.

---

## 2. Typography

| Role | Font | Fallback |
|---|---|---|
| Display (H1, H2, angka besar) | Clash Display (Fontshare) | system-ui, sans-serif |
| Body | Switzer (Fontshare) | -apple-system, sans-serif |
| Utility / mono (label, tag stack, nav index, code snippet) | JetBrains Mono | ui-monospace, monospace |

### Type Scale (base 16px, ratio 1.25 — Major Third-ish, dibulatkan)

| Token | Size | Line-height | Pemakaian |
|---|---|---|---|
| `--text-display-xl` | 72px / 44px (mobile) | 1.05 | Hero headline |
| `--text-display-lg` | 48px / 32px | 1.1 | Section title (H2) |
| `--text-display-md` | 32px / 24px | 1.2 | Card title, sub-headline |
| `--text-body-lg` | 20px / 18px | 1.5 | Hero subteks, intro paragraf |
| `--text-body-md` | 16px | 1.6 | Body copy default |
| `--text-body-sm` | 14px | 1.5 | Caption, meta info |
| `--text-mono-xs` | 12px | 1.4 | Nav index (`01`), tag chip, label teknis |

Tracking: display face pakai `letter-spacing: -0.02em` (rapat, tegas); mono pakai `+0.04em` (lega, seperti label teknis).

---

## 3. Spacing Scale

Basis 4px, skala geometris ringan supaya konsisten di semua breakpoint:

```
--space-1: 4px    --space-5: 24px    --space-9: 96px
--space-2: 8px    --space-6: 32px    --space-10: 128px
--space-3: 12px   --space-7: 48px    --space-11: 160px
--space-4: 16px   --space-8: 64px
```

**Konvensi:**
- Padding internal komponen (button, chip, card): `space-2` – `space-5`
- Gap antar elemen dalam satu grup (nav items, card grid): `space-4` – `space-6`
- Jarak antar section: `space-9` – `space-11` (desktop), turun ke `space-7`–`space-8` di mobile
- Container max-width: `1280px`, padding horizontal `space-6` (desktop) / `space-4` (mobile)

---

## 4. Komponen

### 4.1 Navbar (referensi: Augen struktur, Stacklane kerapian, Armory transparansi)
- State awal: transparan, teks Platinum, di atas hero gradient mesh.
- Setelah scroll > 80px: background solid `--color-onyx` + `backdrop-filter: blur(12px)`, shadow tipis.
- Layout: logo/wordmark kiri — nav items tengah/kanan dengan **index mono kecil** di depan tiap label (`01 Work`, `02 About`, `03 Contact`) — CTA pill kanan ("Let's Talk" / "Book a Call").
- Mobile: index + label collapse jadi hamburger, full-screen overlay menu (bukan dropdown kecil) supaya tetap terasa premium di layar sempit.

### 4.2 Buttons
- **Primary:** solid Onyx bg + Platinum text (di atas terang) atau solid Platinum bg + Onyx text (di atas gelap), radius `12px`, hover: border gradient-flow muncul (bukan ganti warna solid — lebih halus).
- **Secondary/outline:** border 1px `--color-platinum-muted`, transparan, hover: border jadi `--color-steel`.
- Padding: `space-3` vertikal, `space-5` horizontal. Ukuran teks `--text-body-md`, weight 600.

### 4.3 Card (Featured Work / How I Work)
- Radius `16px`. Dua varian berselang-seling seperti Stacklane: **solid** (bg Onyx/Steel-deep, teks Platinum) dan **outline** (bg Platinum, border tipis, teks Onyx).
- Watermark angka besar (opacity 8-12%) di pojok — dipakai HANYA di card "How I Work" (karena memang proses berurutan), TIDAK di Featured Work card (supaya nomor tidak jadi dekorasi kosong berulang dari navbar).

### 4.4 Tag / Chip (stack teknologi)
- Font mono, `--text-mono-xs`, padding `space-1 space-3`, radius pill `999px`, border 1px `--color-steel-light`, bg transparan. Dipakai di project card & floating status card.

### 4.5 Floating Status Card (elemen pelengkap hero, posisi terkini lihat §4.7)
- Peran: sekunder, pelengkap — bukan penarik perhatian utama. Posisi persisnya (yang bisa berubah seiring iterasi layout hero) didefinisikan di §4.7 agar hanya ada satu sumber kebenaran.
- Isi: badge status ("Open to full-time roles & freelance projects"), 3-4 tag stack aktif saat ini, satu baris "currently building: EagleJeans" — dinamis, terasa hidup, bukan statis.
- Background: glass-morphism ringan (`background: rgba(10,10,10,0.6); backdrop-filter: blur(20px)`), border gradient-flow tipis 1px.
- Mobile: card ini boleh disembunyikan sepenuhnya di breakpoint `sm` kalau ruang tidak cukup setelah foto+nama — bukan elemen wajib tampil di semua ukuran layar.

### 4.6 Footer
- Full-width, bg Onyx pekat. Grid: kolom kontak besar (headline ajakan + email besar sebagai link), kolom link cepat, kolom sosial. Angka tahun & lokasi (Yogyakarta/Jakarta) kecil di baris paling bawah.

### 4.7 Hero — Name-Behind-Photo (menggantikan hero teks-saja)
Signature moment baru pengganti hero polos: nama besar sebagai tipografi dominan, foto diri (duotone) menimpa sebagian huruf dan membentuk kolom visual besar di sisi kanan.

- **Grid:** hero content jadi 2 kolom asimetris — `grid-template-columns: 1.3fr 1fr` (desktop). Kolom kiri: eyebrow, nama, headline pendukung, subteks, CTA. Kolom kanan: foto. Jangan kunci lebar kolom foto ke posisi pixel nav item tertentu (mis. "About") — biarkan proporsional lewat grid supaya tidak rapuh terhadap perubahan nav, tapi karena container sama dengan navbar, hasilnya akan tetap terlihat sejajar secara visual.
- **Tinggi foto:** `height: 100%` mengikuti tinggi baris grid yang sama dengan kolom teks (dari atas nama sampai sejajar baris CTA) — otomatis menyesuaikan kalau panjang teks berubah, bukan angka tetap. `object-fit: cover`, `object-position: top`.
- **Nama:** `GABRIEL GAETANO` di `--text-display-xl` diperbesar lagi khusus untuk elemen ini (`clamp(56px, 12vw, 160px)`), huruf kapital penuh, `letter-spacing: -0.03em`, warna Platinum, posisi 2 baris (`GABRIEL` / `GAETANO`) rata kiri kolom teks. Foto overlap ke ujung kanan baris kedua nama (`GAETANO`) karena kolom foto mulai di titik itu — efek "menimpa huruf" didapat dari overlap grid, bukan positioning manual.
- **Treatment foto — duotone, bukan B&W generik:** `filter: grayscale(1) contrast(1.15)`, ditambah layer overlay warna dengan `mix-blend-mode: color` memakai gradient dari `--color-steel-deep` ke `--color-onyx`, supaya foto tetap terasa satu palet dengan sisa halaman. Tepi bawah foto diberi `mask-image: linear-gradient(to bottom, black 85%, transparent 100%)` supaya melebur ke section berikutnya.
- **Urutan visual kolom kiri:** eyebrow tag → nama besar (elemen fokus) → *(opsional)* baris positioning pendek (lihat CONTENT-STRATEGY §2, Opsi C) → subteks 1-2 kalimat → dua CTA.
- **Floating status card — posisi baru:** menempel di sudut **kiri-bawah foto**, sedikit overlap ke tepi foto (bukan lagi di sisi teks) — pola serupa Armory: card mengambang di atas gambar, bukan bersanding dengan teks. Detail isi tetap ikuti §4.5.
- **Mobile (`sm`):** grid 2 kolom dilepas jadi 1 kolom. Foto pindah ke atas nama sebagai elemen terpisah dengan tinggi tetap (bukan stretch ke tinggi teks) — urutan: eyebrow → foto → nama besar → subteks → CTA. Floating card pindah in-flow di bawah foto atau disembunyikan kalau ruang tidak cukup.
- **Sumber foto:** minimal 900px lebar untuk hasil tajam di layar retina — foto 433×577 (dipakai saat ini) terlalu kecil untuk ukuran tampil sekarang yang jauh lebih besar dari sebelumnya, akan terlihat lembek/pecah kalau di-stretch.

---

## 5. Layering (z-index)

| Layer | z-index | Elemen |
|---|---|---|
| Base content | `0` | Section, card, teks |
| Gradient mesh background | `-1` | Hero animated background (posisi absolute di belakang konten) |
| Floating status card | `10` | Overlap antar section |
| Sticky navbar | `50` | Selalu di atas konten saat scroll |
| Mobile full-screen menu overlay | `100` | Menutup seluruh viewport saat dibuka |
| Toast/notif (kalau ada form contact) | `200` | Konfirmasi terkirim, dsb |

Aturan: jangan pernah beri elemen dekoratif z-index di atas `10` — hanya elemen fungsional (nav, overlay, notif) yang boleh masuk layer atas.

---

## 6. Responsive Behavior

| Breakpoint | Lebar | Perubahan utama |
|---|---|---|
| `sm` | < 480px | Nav → hamburger full-screen. Hero headline turun ke `--text-display-xl` mobile (44px). Floating status card jadi full-width, tidak overlap (stack normal di flow, bukan absolute). Grid 2×2 "How I Work" → 1 kolom. |
| `md` | 480–768px | Card grid mulai 2 kolom. Gradient mesh disederhanakan (kurangi jumlah stop warna, matikan parallax mouse — sentuh saja scroll-based). |
| `lg` | 768–1280px | Layout 2 kolom hero mulai aktif kalau dipakai di section lain (bukan hero utama yang tetap center). Nav penuh (index + label) muncul. |
| `xl` | > 1280px | Container max-width 1280px terpusat, sisa ruang jadi padding halaman, bukan konten melebar. |

**Reduced motion:** semua animasi Motion pakai `useReducedMotion()` — kalau aktif, gradient mesh jadi gradient statis (masih pakai warna yang sama, tetap "flowing" secara visual walau tidak bergerak), dan scroll-reveal jadi fade sederhana tanpa translate besar.

---

## 7. Self-Critique Checklist (sebelum build final)

- [ ] Apakah gradient mesh dipakai lebih dari 1 tempat besar per layar? → kalau ya, kurangi salah satu.
- [ ] Apakah watermark angka dipakai di lebih dari 1 jenis komponen (nav + card proses)? → sudah dipisah lewat skala/berat, cek konsisten saat implementasi.
- [ ] Apakah kontras teks Platinum-muted di atas Onyx tetap ≥ 4.5:1 (WCAG AA)? → cek dengan tool kontras sebelum final.
- [ ] Apakah floating card masih terbaca di mobile (tidak overlap konten penting)? → di breakpoint `sm`, ubah jadi in-flow, bukan absolute.