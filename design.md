# Design Direction — Pandawa Dev

| Item | Detail |
|---|---|
| Versi | 0.1 |
| Status | 🟡 Draft |
| Website | pandawadev.web.id |
| Gaya | Elegant · Minimal · Premium · Human |
| Referensi utama | Bumi Journey (rasa, bukan desain) |
| Warna utama | Light Sea Green |
| Font | Poppins |
| Framework | Bootstrap + HTML + CSS + Vanilla JS |

---

## 1. Filosofi Desain

**Konsep: "Quiet Premium Digital Studio."**

Pandawa Dev tidak perlu tampil seperti agency teknologi yang ramai. Kesan yang dituju: profesional, modern, tenang, terpercaya, premium, detail-oriented, approachable, tidak berlebihan.

Reaksi yang diharapkan pengunjung:
- ✅ "Ini bukan jasa bikin website biasa. Mereka memperhatikan detail."
- ❌ "Ini kelihatannya template Bootstrap."

**Aturan paling penting:** *"Less components, better composition."*
Sedikit elemen dengan komposisi kuat lebih baik daripada banyak komponen agar terlihat lengkap. Homepage tidak perlu 6 service card, 6 benefit card, 8 portfolio card, 10 testimoni, atau 6 FAQ card. Yang dikejar adalah hierarchy dan storytelling.

## 2. Referensi Bumi Journey

**Prinsip: Reference the feeling, not the design.**

Yang diambil sebagai inspirasi: whitespace, typography besar, visual hierarchy, gambar kuat, layout tidak padat, section dengan ruang bernapas, card yang sedikit, rounded corner elegan, storytelling antar-section, transisi visual natural, kesan premium yang tidak berlebihan.

Yang **tidak** boleh ditiru: layout persis, komposisi section persis, copywriting, asset, icon, animasi, struktur visual yang menjadi identitas Bumi Journey.

## 3. Karakter Visual

| Karakter | Dicapai melalui | Bukan melalui |
|---|---|---|
| **Elegant** | Whitespace, typography, alignment, spacing, warna terkendali, konsistensi | Gradient berlebihan, glow, glassmorphism, shadow berat, animasi berlebihan |
| **Simple** | Setiap elemen punya alasan berada di halaman | Halaman kosong. Hindari terlalu banyak card, badge, icon, CTA, dekorasi tanpa fungsi |
| **Premium** | Spacing konsisten, hierarchy kuat, image treatment bagus, border subtle, hover halus, micro interaction, asimetri terkontrol, copy singkat dan percaya diri | Efek visual |
| **Human** | Foto/screenshot proyek nyata, case study nyata, bahasa natural dan conversational, cerita proses, wajah/tim jika ada, testimoni nyata | Tampilan "AI-generated agency website" |

## 4. Anti AI-Slop (Aturan Wajib)

**Hindari pola generik ini:**
Huge gradient hero → 3 glassmorphism card → 6 feature card → 3 pricing card → infinite logo marquee → testimonial carousel → CTA gradient.

**Tidak dipakai secara default:** gradient ungu/biru, neon glow, glassmorphism, floating blob, bentuk 3D abstrak, blur berlebihan, shadow berlebihan, background beranimasi, cursor effect, particle effect, dekorasi geometris acak.

> Jika elemen dekoratif tidak meningkatkan komunikasi, hapus.

## 5. Aturan Desain yang Manusiawi

1. **Imperfection is allowed.** Tidak semua section harus simetris. Jangan ulangi pola `[IMAGE] → TITLE → DESCRIPTION → BUTTON` di mana-mana.
2. **Jangan semua elemen jadi card.** Card hanya bila memang perlu. Contoh layanan sebagai list editorial:
   ```
   01
   Website Company Profile
   Website profesional untuk membangun kepercayaan bisnis.
   → Pelajari layanan
   ```
3. **Whitespace adalah elemen desain** dan bagian dari brand. Target rasa: *calm + confident*, bukan *busy + feature-heavy*.

## 6. Sistem Warna

Light Sea Green (`#20B2AA`) dipakai sebagai **aksen**, bukan warna seluruh website.

```css
:root {
  --color-primary: #20B2AA;
  --color-primary-dark: #168F89;
  --color-primary-soft: #EAF8F7;

  --color-black: #111111;
  --color-dark: #1A1A1A;

  --color-text: #333333;
  --color-muted: #777777;

  --color-white: #FFFFFF;
  --color-off-white: #F8F8F6;

  --color-border: #E8E8E8;
}
```

**Rasio penggunaan:**

| Porsi | Warna |
|---|---|
| ±70% | Putih / off-white |
| ±20% | Hitam / dark (typography) |
| ±10% | Light Sea Green |

## 7. Typography

**Font:** Poppins (Google Fonts). Weight: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold. Jangan memakai terlalu banyak weight.

| Level | Desktop | Tablet | Mobile | Catatan |
|---|---|---|---|---|
| Display / Hero | 64–76px | 42–48px | 36–40px | Weight 600, line-height 1.05–1.15 |
| H2 | 42–52px | | | |
| H3 | 24–30px | | | |
| Body | 16–18px | | | Line-height 1.7 |
| Small | 13–14px | | | |

**Kepribadian typography:** jangan seperti SaaS generik.
- ❌ "WE BUILD DIGITAL SOLUTIONS FOR YOUR BUSINESS" (terlalu corporate)
- ✅ "Website yang membuat bisnis Anda terlihat lebih serius."
- ✅ "Bangun kehadiran digital yang layak dipercaya."
- Penjelasan menyusul: *Pandawa Dev membantu bisnis, UMKM, dan profesional di Banyuwangi membangun website yang modern, cepat, dan sesuai kebutuhan.*

## 8. Layout dan Komponen Dasar

**Grid dan container**
- Container desktop: max-width 1200–1280px (token: 1240px); sebagian section boleh full-width
- Grid 12 kolom
- Variasikan proporsi: 40/60, 30/70, 60/40 agar terasa editorial, tidak selalu 50/50

**Border radius** (jangan terlalu bulat)

| Elemen | Radius |
|---|---|
| Button | 8–10px |
| Card | 14–20px |
| Gambar | 16–24px |
| Visual besar | 24–32px |

Hindari `border-radius: 9999px` untuk hampir semua elemen. Pill hanya untuk kategori, tag, status kecil, dan elemen navigasi tertentu.

**Shadow:** sangat subtle, misalnya `0 10px 30px rgba(0,0,0,0.06)`. Banyak section tidak perlu shadow sama sekali. *Premium ≠ banyak shadow.*

**Navbar**
- Minimal: logo "PANDAWA DEV", 7 menu (Beranda, Tentang, Layanan, Portofolio, Galeri, Blog, Kontak), CTA "Konsultasi Gratis"
- Putih/transparan menyesuaikan hero; sticky atau fixed dengan pertimbangan UX
- Tinggi sekitar 72–84px, logo sederhana, typography medium
- Hover: warna berubah ke Light Sea Green; tanpa underline animation berlebihan

## 9. Desain Per Section

### Hero
Salah satu bagian terkuat. Dua opsi, **opsi kedua dipilih karena lebih premium**:
1. Klasik: eyebrow kecil, headline, deskripsi, 2 CTA, visual proyek di kanan
2. **Editorial:** headline + deskripsi + CTA, garis pemisah, lalu label *Selected work* dengan screenshot website besar

**Visual hero**
- ❌ Mockup laptop stock, foto orang bekerja di laptop, objek 3D abstrak, kantor hasil AI, ilustrasi developer generik
- ✅ Screenshot proyek, interface website, foto proyek nyata, visual typography, komposisi editorial

### Transisi Antar-Section
Jangan monoton putih-abu-putih-abu. Alur yang disarankan, dengan warna tetap terkendali:

| Section | Latar |
|---|---|
| Hero | Putih |
| Value Proposition | Off-white |
| Services | Putih |
| Featured Work | Dark / aksen primary |
| Process | Putih |
| Blog | Off-white |
| CTA | Primary |

### Services
Bukan 6 card identik. Gunakan layout list/editorial bernomor:
01 Company Profile · 02 Landing Page · 03 Website Bisnis · 04 Custom Website, masing-masing dengan satu kalimat deskripsi.

### Portofolio (visual centerpiece)
- Gambar proyek besar dengan label *Selected Work*, nama, kategori, dan tag (mis. *Web Design · Development*)
- Alignment tiap proyek dibuat berbeda agar terasa seperti creative studio, bukan katalog template

### Galeri
- Portofolio menjawab *"Apa yang kami kerjakan?"*; galeri menjawab *"Seperti apa hasil visualnya?"*
- Masonry/grid dengan ukuran gambar bervariasi; lightbox boleh dipakai

### Tentang
- Tidak corporate. Hindari "Pandawa Dev adalah perusahaan teknologi yang bergerak dalam bidang..."
- Mulai dari sudut pandang manusia, misalnya *"Kami percaya website bukan sekadar halaman di internet."*
- Ceritakan: mengapa Pandawa Dev dibuat, cara kerja, prinsip, cara menangani proyek, siapa yang dilayani
- Gunakan foto founder/tim hanya jika nyata

### Process
Cukup **4 langkah**: 01 Diskusi, 02 Perencanaan, 03 Development, 04 Launch. Jangan 8–10 langkah agar terlihat kompleks.

### Testimonial
- Jika belum ada testimoni nyata: **jangan membuat testimoni palsu**
- Sembunyikan section, atau ganti dengan *"Why clients work with us"* berdasarkan nilai yang bisa dibuktikan

### Blog
- Tidak seperti portal berita; label seperti *From the Journal*
- Featured article besar, artikel lain lebih kecil
- Info per artikel: judul, tanggal, kategori

### CTA
Tenang, bukan agresif.
> **Punya rencana membuat website?**
> Ceritakan kebutuhan Anda. Kami bantu melihat solusi yang paling masuk akal untuk bisnis Anda.
> `[ Konsultasi Gratis → ]`

Tidak perlu "🔥 JANGAN LEWATKAN! 🚀" atau "LIMITED OFFER!!!". Pandawa Dev harus terdengar percaya diri.

## 10. Motion

Animasi subtle dan fungsional.

| Elemen | Efek |
|---|---|
| Button hover | Background sedikit berubah, `translateY(-1px)` |
| Gambar hover | `scale(1.02)` |
| Navigasi | Transisi 200–300ms |
| Section reveal (opsional) | `opacity 0→1`, `translateY 20px→0` |

Wajib menghormati `prefers-reduced-motion`. No excessive animation.

## 11. Gambar dan Ikon

**Prioritas gambar:**
1. Screenshot proyek nyata
2. Foto tim/founder nyata
3. Foto workspace/proyek nyata
4. Stok foto yang dipilih cermat
5. Ilustrasi bila benar-benar perlu

Gambar hasil AI **bukan** visual identity default. Gaya gambar harus konsisten.

**Ikon:** gunakan Lucide, SVG sederhana, atau ikon minimal custom dengan gaya konsisten. Hindari emoji (🤑 🚀 💡 ⚡ 🎯) sebagai visual utama karena membuat website terasa generik.

## 12. Responsive

Mobile bukan desktop yang diperkecil, melainkan dirancang ulang.

| Desktop | Mobile |
|---|---|
| Typography besar | Navbar ringkas |
| Layout asimetris | Typography mudah dibaca |
| Gambar besar | Alur vertikal |
| Navigasi horizontal | Touch target besar |
| | Dekorasi dikurangi |

## 13. Aturan Anti-Template (untuk Development)

Developer tidak boleh membuat setiap section dengan pola `section > container > row > col-md-4 > card` hanya karena Bootstrap menyediakannya.

> **Bootstrap = fondasi layout, bukan identitas visual.**

Gunakan custom CSS untuk spacing, typography, card, portofolio, button, layout section, dan perilaku responsif agar hasilnya tidak terlihat seperti "Bootstrap template".

## 14. Design Tokens

```css
:root {
  /* Colors */
  --primary: #20B2AA;
  --primary-dark: #168F89;
  --primary-light: #EAF8F7;

  --black: #111111;
  --dark: #1A1A1A;

  --text: #333333;
  --muted: #777777;

  --white: #FFFFFF;
  --off-white: #F8F8F6;

  --border: #E8E8E8;

  /* Typography */
  --font-primary: "Poppins", sans-serif;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;

  /* Container */
  --container-width: 1240px;

  /* Transition */
  --transition: 250ms ease;
}
```

## 15. Design Keywords (Tolok Ukur Keputusan)

| Keyword | Target |
|---|---|
| Elegant | ★★★★★ |
| Simple | ★★★★★ |
| Premium | ★★★★★ |
| Human | ★★★★★ |
| Modern | ★★★★☆ |
| Friendly | ★★★★☆ |
| Technical | ★★★☆☆ |
| Corporate | ★★☆☆☆ |
| Playful | ★★☆☆☆ |
| Futuristic | ★☆☆☆☆ |
| AI-looking | 0/5 |

## 16. Ringkasan Arah Visual

**Elegant & Minimal → Premium + Human → Light Sea Green + Poppins + whitespace luas + visual proyek nyata + layout editorial + motion subtle → No AI-slop.**

Pandawa Dev bukan didesain sebagai "website jasa web developer", melainkan sebagai **digital studio lokal yang terlihat premium**. Bumi Journey menjadi referensi rasa, whitespace, storytelling, dan komposisi visual, sedangkan identitas Pandawa Dev dibangun lewat Light Sea Green, Poppins, layout editorial, visual proyek nyata, dan interaksi yang terkendali. Setiap elemen harus punya fungsi.

---

## 17. Catatan Review (Tambahan, Bukan dari Dokumen Asli)

> Bagian ini hasil pengecekan silang dengan `prd.md`. Isinya usulan yang perlu diputuskan.

### 17.1 Kontras warna (aksesibilitas)
PRD mewajibkan kontras yang baik. Perkiraan saya, **teks putih di atas `#20B2AA` hanya sekitar 2,6:1**, di bawah batas WCAG AA (4,5:1 untuk teks normal). `#168F89` dengan teks putih sekitar 3,9:1, cukup untuk teks besar tetapi masih kurang untuk teks kecil. Usulan:
- Tombol primary: teks gelap (`#111111`) di atas `#20B2AA`, atau latar `--primary-dark` dengan teks besar/bold
- Teks link Light Sea Green di atas putih sebaiknya memakai varian yang lebih gelap
- Verifikasi semua pasangan warna dengan contrast checker sebelum desain final

### 17.2 Selisih dengan PRD yang perlu diselaraskan
| Topik | PRD | Design Direction | Usulan |
|---|---|---|---|
| H1 Beranda | "Jasa Pembuatan Website Profesional di Banyuwangi" | Headline emosional ("Website yang membuat bisnis Anda terlihat lebih serius") | Tetap pakai keyword di H1 untuk SEO; headline emosional sebagai subjudul atau eyebrow, atau uji keduanya |
| Jumlah layanan | 6 (termasuk Toko Online dan Maintenance) | Contoh 4 | Tentukan layanan final; halaman `/layanan/` tetap memuat semua, Beranda boleh menampilkan ringkasan |
| Testimoni | Ada di struktur Beranda | Sembunyikan bila belum ada | Tandai sebagai opsional sampai ada testimoni asli |
| Struktur Beranda | 13 section | Prinsip "less components" | Gabungkan atau ringkas section agar Beranda tidak terlalu panjang |
| Jumlah langkah proses | Tidak ditentukan | 4 langkah | Pakai 4 langkah di PRD |
| FAQ | Section di Beranda dan halaman lain | Hindari "FAQ card" | Tampilkan sebagai accordion sederhana, bukan card |

### 17.3 Hal yang belum ada di Design Direction
- Spesifikasi logo (versi terang/gelap, ukuran minimum) dan favicon
- Style form (input, error, fokus) dan komponen accordion, lightbox, serta filter portofolio
- Hirarki spasi (skala spacing untuk jarak antar-section)
- Panduan untuk gambar OG 1200 × 630 px selaras dengan brand
- Mode gelap: diputuskan ada atau tidak
- Performa font: batasi weight yang dimuat, gunakan `font-display: swap` agar tidak mengganggu LCP

### 17.4 Riwayat Revisi
| Versi | Perubahan |
|---|---|
| 0.1 | Dokumen Design Direction asli |
| 0.1.1 | Versi Markdown, ditambah bagian 17 hasil review |