# Content Strategy & Copy Draft — Portfolio Gabriel G.O. Baskara

## 1. Keputusan Bahasa

**Rekomendasi: Inggris sebagai bahasa utama.** Alasan: audiens klien freelance dan recruiter bisa datang dari luar jaringan lokal (LinkedIn global, platform freelance), dan Inggris tetap dibaca lancar oleh audiens Indonesia yang melek teknis. Nama proyek & istilah teknis tetap universal.

Kalau kamu tetap ingin Bahasa Indonesia sebagai utama (misal target awal murni klien lokal seperti EagleJeans), semua draf di bawah bisa diterjemahkan 1:1 — strukturnya tidak berubah. Tinggal bilang preferensinya.

Draf di bawah saya tulis dalam Inggris sesuai rekomendasi.

---

## 2. Hero Section

Layout berubah jadi **Name-Behind-Photo** (lihat DESIGN-SYSTEM.md §4.7) — nama besar `GABRIEL GAETANO` jadi elemen dominan, foto duotone menimpa sebagian huruf. Urutan konten: eyebrow → nama+foto → subteks → CTA.

**Eyebrow tag (diganti — netral untuk full-time & freelance, bukan cuma freelance):**
`Open to full-time roles & freelance projects — Yogyakarta / Jakarta`

Alternatif lebih ringkas kalau ruang sempit: `Open to opportunities — Yogyakarta / Jakarta`

*Kenapa diganti:* "Available for freelance work" secara implisit menyatakan sudah bekerja sendiri/tidak mencari kerja tetap — tidak akurat untuk status kamu sekarang, dan bisa bikin recruiter skip karena mengira kamu cuma terima proyek lepas. Frasa baru ini netral untuk kedua audiens (§2 di PRD) tanpa terdengar ragu-ragu.

**Nama (elemen tipografi utama, bukan headline kalimat):**
`GABRIEL` / `GAETANO` — dua baris, huruf besar, foto overlap di baris kedua.

**Headline pendukung (baris lebih kecil di bawah/samping nama, opsional — pilih salah satu):**

- *Opsi A (fokus delivery nyata):* "I build software that ships — and stays in production."
- *Opsi B (fokus dual-identity):* "Full-stack engineering, from thesis rigor to client deadlines."
- *Opsi C (paling langsung, direkomendasikan):* "Full-stack developer building production systems for real businesses."

**Subteks (Express.js ditambahkan ke stack yang disebut):**
"Informatics undergraduate at Atma Jaya Yogyakarta, currently building production software for garment manufacturing while finishing a thesis on financial systems. I work across web, mobile, and database — from Laravel and Express.js to React and Flutter, end to end."

**CTA:** `View Work` (primary) · `Get in Touch` (outline)

**Floating status card content (posisi & peran diperkecil, lihat DESIGN-SYSTEM.md §4.5):**
- Badge: `● Open to full-time roles & freelance projects`
- Tags: `Laravel` `Express.js` `React` `Flutter` `MySQL`
- Line: `Currently building: EagleJeans — production tracking PWA`

---

## 3. Trust / Stack Bar

Alih-alih logo klien (belum banyak), tampilkan sebagai **"Tools I ship with"** — baris tipis logo/ikon: Laravel, Express.js, React, Flutter, MySQL, Git, REST API. Lebih jujur untuk tahap karier ini daripada memaksakan trust bar logo klien yang kosong.

---

## 4. How I Work (4 card, Stacklane-style grid)

1. **Discover & Scope** — "We talk through your goals, timeline, and technical needs to see if it's a good fit."
2. **Design & Architect** — "I map the data model and system flow before writing a line of code — the same rigor I use in academic work."
3. **Build & Ship** — "Features shipped incrementally, tested, and committed one piece at a time — you always know what's done."
4. **Support & Iterate** — "Post-launch isn't the end. I stay involved for fixes, changes, and scaling as your needs grow."

---

## 5. Featured Work — Case Study Format

Format konsisten tiap case study:
`Problem → Role & Stack → Key Features → What it demonstrates`

### 5.1 EagleJeans
- **Problem:** A garment manufacturing client needed to track orders through 13 production stages with no visibility into bottlenecks.
- **Role & Stack:** Solo developer. Laravel PWA, QR-based tracking, role-based access (Owner, Front Office, Production Staff).
- **Key features:** QR scanning per production stage, dual-mode auth (email for owner, username for staff), live queue display (TV antrian), automated data retention.
- **What it demonstrates:** Ability to design and ship a real multi-role production system for a live business, end to end.

### 5.2 ArthaBooks
- **Problem:** Small businesses (UMKM) need proper double-entry bookkeeping without hiring an accountant.
- **Role & Stack:** Solo developer (undergraduate thesis). Laravel 13, PHP 8.4, MySQL, Bootstrap 5.
- **Key features:** Automated journal entries (`resolveAkunPair()`), role-based access (Admin/Staff/Owner, 13 permissions), 5 financial reports including CALK, payroll approval workflow, audit trail.
- **What it demonstrates:** Deep understanding of both software architecture and domain rules (accounting standards, SAK EMKM) — validated through formal thesis defense.

### 5.3 ReuseMart
- **Problem:** A second-hand marketplace needed to coordinate 9 distinct user roles across web and mobile.
- **Role & Stack:** Laravel + MySQL (web), Flutter + Dart (mobile).
- **Key features:** Role-based permissions for Owner, Buyer, Seller, Hunter, Customer Service, Admin, Warehouse, Organization, Courier; listing, ordering, logistics, and sales reporting.
- **What it demonstrates:** Comfort building complex multi-role systems across both platforms simultaneously.

### 5.4 BookHive
- **Problem:** A library needed a simple online system for borrowing, donations, and room reservations.
- **Role & Stack:** Laravel & MySQL.
- **Key features:** Admin/User/Guest roles, borrowing & donation approval flow, room reservation, book recommendations.
- **What it demonstrates:** Clean, focused execution on a smaller-scope system — good contrast to the bigger case studies.

### 5.5 T2KAV Gym
- **Problem:** A gym needed a mobile app for class and trainer bookings.
- **Role & Stack:** Flutter & Dart.
- **Key features:** Class/equipment/trainer browsing, booking & cancellation, profile management.
- **What it demonstrates:** Mobile-only capability, independent of the Laravel-heavy stack.

### 5.6 Padukuhan Tritis
- **Problem:** A village needed a public-facing profile site to showcase its culture and tourism potential.
- **Role & Stack:** React.
- **Key features:** Responsive design, gallery, dedicated sections for identity and local resources.
- **What it demonstrates:** Frontend craft and content presentation for a non-technical, public audience — good visual portfolio piece.

**Urutan tampil:** EagleJeans → ArthaBooks → ReuseMart di grid besar (featured), lalu BookHive, T2KAV Gym, Padukuhan Tritis di grid lebih kecil ("More Work") di bawahnya.

---

## 6. About / Beyond Code

Gabungkan narasi teknis + kepemimpinan (dari pengalaman organisasi) — ini yang membedakan dari kandidat lain, khususnya untuk klien yang menilai kemampuan komunikasi & manajemen proyek:

> "Outside of code, I've led fundraising and sponsorship efforts for two major campus events (Sparkfest, Kopma Fest) — negotiating with sponsors, managing budgets, and coordinating teams. It's the same skill set that makes client work smooth: clear communication, realistic scoping, and following through."

Sertakan juga baris singkat pendidikan tanpa membuatnya jadi fokus utama: "Informatics undergraduate at Universitas Atma Jaya Yogyakarta (GPA 3.54), expected graduation [isi target]." — GPA dicantumkan kecil sebagai kredibilitas tambahan, bukan headline.

---

## 7. Skills (dikelompokkan, bukan daftar datar)

| Kategori | Item |
|---|---|
| Frontend | HTML, CSS, JavaScript, React |
| Backend | PHP, Laravel, Express.js, REST API |
| Mobile | Dart, Flutter |
| Database | MySQL, SQL |
| Foundations | C, Java |
| Tools & Practice | Git & GitHub, technical documentation & reporting |

Sertifikasi (Simplilearn, Dicoding, MySkill, Udemy) tampilkan sebagai baris kecil di bawah skill grid — jangan diberi section besar sendiri, karena levelnya beginner/e-learning dan tidak sepadan dengan bobot visual case study.

---

## 8. Contact / CTA (penutup)

**Headline:** "Have a project in mind?"
**Subteks:** "Whether it's a production system, a mobile app, or something in between — let's talk about what you need."
**CTA besar:** email langsung sebagai link (`tanobaskara21@gmail.com`) dijadikan elemen tipografi besar, bukan tombol kecil — lebih personal dan sesuai gaya "hero-as-thesis" yang sudah dipakai di atas.
Sertakan juga link LinkedIn sebagai secondary link kecil.

---

## 9. Nada & Prinsip Penulisan (dipakai konsisten di seluruh copy)

- Kalimat aktif, langsung ke poin — hindari kalimat seperti "passionate about technology" (klise, tidak spesifik).
- Setiap klaim kemampuan didukung bukti proyek konkret, bukan sekadar disebutkan.
- Hindari jargon berlebihan di headline — istilah teknis boleh muncul di detail case study, bukan di kalimat pertama yang dibaca orang awam (klien non-teknis).