# PRD — Pandawa Dev Website

| Item | Detail |
|---|---|
| Produk | Website Pandawa Dev |
| Versi | 0.3 |
| Status | 🟡 Draft |
| Domain | pandawadev.web.id |
| Target area | Banyuwangi, Jawa Timur |
| Bahasa | Bahasa Indonesia |
| Platform | Web (static) |
| Frontend | HTML5, CSS3, Bootstrap, Vanilla JavaScript bila perlu |
| Deployment | Cloudflare Pages atau Vercel (TBD) |
| Tujuan utama | Lead generation, brand awareness, visibilitas organik |

---

## 1. Ringkasan Produk

Pandawa Dev adalah website resmi bisnis jasa pembuatan website untuk bisnis, UMKM, profesional, dan organisasi, dengan fokus awal Banyuwangi dan sekitarnya. Website berfungsi sebagai:

1. Media pemasaran
2. Mesin akuisisi calon pelanggan
3. Portofolio pekerjaan
4. Sumber informasi layanan
5. Pusat konten SEO
6. Media membangun kredibilitas
7. Kanal komunikasi dengan calon pelanggan
8. Representasi digital brand Pandawa Dev

**Visi:** Menjadi partner pembuatan website yang profesional dan terpercaya bagi bisnis di Banyuwangi: cepat, responsif, mudah dipahami, dan berfondasi SEO kuat.

**Misi:** Membantu bisnis memiliki website profesional, membangun kredibilitas online, dijangkau lewat mesin pencari, menampilkan produk/layanan dengan baik, dan memiliki aset digital sendiri.

## 2. Tujuan Bisnis

**Alur konversi:** Search/Social/Referral → Website → Layanan → Portofolio → Trust → Konsultasi → Lead → Client

| ID | Tujuan | Keterangan |
|---|---|---|
| BG-01 | Brand awareness | Mengenalkan Pandawa Dev, terutama di Banyuwangi |
| BG-02 | Lead generation | Calon klien company profile, landing page, website bisnis, toko online, website custom |
| BG-03 | Organic traffic | Google Search, local search, long-tail, informational |
| BG-04 | Authority | Dikenal paham website, bisnis, SEO, punya hasil kerja, dan terpercaya |

**KPI utama:** Qualified leads.

## 3. Target Audiens dan Persona

| Segmen | Contoh | Kebutuhan inti |
|---|---|---|
| Primary: UMKM | Kuliner, toko, jasa, fashion, properti, kerajinan | Terlihat profesional dan mudah ditemukan online |
| Secondary: Perusahaan | Corporate, organisasi | Company profile, portofolio, SEO |
| Tourism & Hospitality | Hotel, villa, homestay, travel, tour operator | Inquiry/booking, galeri, lokasi, CTA WhatsApp, SEO lokal |
| Profesional | Freelancer, konsultan, fotografer, agen properti | Personal brand |

**Persona:**
- **Pemilik UMKM:** kurang paham teknologi, budget terbatas; butuh penjelasan sederhana, harga transparan, proses jelas, komunikasi via WhatsApp.
- **Pemilik perusahaan:** ingin kredibilitas; butuh company profile, portofolio, info layanan, SEO.
- **Pemilik bisnis pariwisata:** ingin inquiry/booking; butuh website mobile-friendly, galeri, lokasi, fasilitas, CTA WhatsApp, SEO lokal.

**Masalah pengguna yang harus dijawab lewat konten dan UX:** tidak tahu cara/biaya membuat website, bingung domain dan hosting, takut hasil buruk, tidak tahu cara memilih developer, tidak paham SEO, ragu manfaat website, khawatir tidak ada support setelah selesai.

## 4. Positioning dan Value Proposition

- **Positioning (draft):** Jasa pembuatan website yang membantu bisnis membangun kehadiran digital profesional dengan website modern, responsif, cepat, dan berfondasi SEO. Lokal: *Jasa pembuatan website untuk bisnis di Banyuwangi.*
- **Value proposition (draft):** Website profesional sesuai kebutuhan, dengan desain responsif, performa baik, dan fondasi SEO sejak awal.
- **Pendukung:** custom, responsive, performance-focused, SEO-friendly, struktur jelas, support, konsultasi.
- **Aturan:** semua klaim harus sesuai layanan nyata. Positioning final ditentukan setelah riset kompetitor.

## 5. Information Architecture

```
pandawadev.web.id
├── /            → Beranda
├── /tentang/    → Tentang
├── /layanan/    → Layanan
├── /portofolio/ → Portofolio
├── /galeri/     → Galeri
├── /blog/       → Blog
└── /kontak/     → Kontak
```

**Navbar:** Beranda, Tentang, Layanan, Portofolio, Galeri, Blog, Kontak. **CTA:** Konsultasi Gratis (ke WhatsApp atau halaman kontak).

## 6. Kebutuhan Per Halaman

### 6.1 Beranda (`/`) — P0
Tujuan: kesan pertama, pengenalan brand, SEO, lead generation. Intent: commercial. Keyword utama (draft): *jasa pembuatan website Banyuwangi*.

**Struktur:** Hero → Trust/Value Proposition → Tentang singkat → Layanan → Keunggulan → Portofolio unggulan → Preview galeri → Proses kerja → Testimonial → Blog terbaru → FAQ → CTA → Footer.

- **H1 (draft):** Jasa Pembuatan Website Profesional di Banyuwangi
- **Subheadline:** Pandawa Dev membantu bisnis, UMKM, dan profesional membangun website yang modern, responsif, cepat, dan sesuai kebutuhan.
- **CTA:** Konsultasi Gratis (primer), Lihat Portofolio (sekunder)
- **Trust:** hanya angka/klaim yang benar (jumlah proyek, teknologi, keunggulan, testimonial jika ada)
- **Preview layanan:** Company Profile, Landing Page, Website Bisnis, Toko Online, Website Custom, Maintenance
- **Preview portofolio:** beberapa proyek terbaik, CTA *Lihat Semua Portofolio*
- **Preview blog:** artikel terbaru, featured article, kategori
- **FAQ:** berapa biaya, berapa lama proses, apakah domain termasuk, apakah hosting termasuk, apakah SEO-friendly, apakah ada maintenance

### 6.2 Tentang (`/tentang/`) — P1
Membangun trust. Struktur: Hero → Tentang → Cerita → Visi → Misi → Nilai → Keunggulan → Teknologi → Cara kerja → CTA. Harus menjawab: siapa, apa yang dilakukan, target pelanggan, mengapa Pandawa Dev, proses kerja, prinsip kerja. Founder/team ditambahkan bila ada.

### 6.3 Layanan (`/layanan/`) — P0
Halaman commercial intent utama. Struktur: Hero → Overview → Service cards → Detail → Fitur → Proses → Pricing/Paket → FAQ → CTA.

| # | Layanan | Target | Fitur potensial |
|---|---|---|---|
| 1 | Website Company Profile | Perusahaan, UMKM, organisasi, profesional | Home, About, Services, Portfolio, Contact, WhatsApp, responsive |
| 2 | Landing Page | Produk, jasa, campaign, advertising | Satu halaman fokus konversi |
| 3 | Website Bisnis | Bisnis yang butuh website sebagai pusat informasi | Sesuai kebutuhan |
| 4 | Website Toko Online | Penjual produk | Katalog, cart, checkout, payment (jika tersedia), WhatsApp order |
| 5 | Website Custom | Kebutuhan khusus | Sesuai kebutuhan |
| 6 | Maintenance | Pemilik website | Update konten, bug fixing, backup, security, perbaikan minor (sesuai paket) |

Layanan final menyesuaikan model bisnis.

### 6.4 Portofolio (`/portofolio/`) — P0
Aset penjualan utama. Struktur: Hero → Featured → Semua proyek → Filter → Card → CTA.
- **Filter:** Semua, Company Profile, UMKM, Landing Page, E-commerce, Custom
- **Card minimal:** gambar, nama, kategori, deskripsi singkat, tombol Lihat Detail
- **Detail (`/portofolio/nama-project/`):** Overview, Client/Industri, Challenge, Solution, Features, Design, Technology, Result, Screenshot, Testimonial, CTA
- **Aturan penting:** proyek wajib dilabeli **Real Project**, **Demo Project**, atau **Personal Project**. Demo tidak boleh tampil seperti proyek klien.

### 6.5 Galeri (`/galeri/`) — P1
Showcase visual (berbeda dari portofolio yang berisi case study dan bukti nilai bisnis). Struktur: Hero → Filter kategori → Grid gambar → Lightbox → CTA. Kategori: Website, UI Design, Mobile, Desktop, Branding, Other.

### 6.6 Blog (`/blog/`) — P0 (strategi SEO jangka panjang)
Tujuan: trafik informasional, menjawab pertanyaan, topical authority, mendukung halaman layanan, menjangkau long-tail, mudah dipahami search engine dan AI.

- **Kategori (draft):** Website, SEO, Bisnis, Digital Marketing, Banyuwangi (final mengikuti keyword research)
- **Setiap artikel wajib punya:** title, slug, meta description, featured image, author, tanggal publish/update, kategori, daftar isi (jika panjang), H1, H2/H3, internal link, artikel terkait, CTA, schema Article
- **Contoh topik per kategori:** *Apa Itu Website?* (Website), *Cara Membuat Website Muncul di Google* (SEO), *Mengapa UMKM Membutuhkan Website?* (Bisnis), *Website vs Marketplace* (Digital Marketing), *Strategi Digital untuk Bisnis Banyuwangi* (Banyuwangi)
- **Tipe artikel:** *Informational* (menjawab pertanyaan), *Commercial Investigation* (membantu membandingkan solusi), *Transactional* (mengarahkan ke layanan)
- **Funnel konten:** Apa itu website? → Apakah bisnis butuh website? → Berapa biaya? → Cara memilih jasa → Jasa pembuatan website Banyuwangi → Pandawa Dev
- **Content cluster:** Jasa Website sebagai pusat; cluster SEO, Website, Bisnis; setiap cluster diarahkan ke halaman layanan relevan. Blog bukan kumpulan artikel acak.

### 6.7 Kontak (`/kontak/`) — P0
Mengubah visitor menjadi lead. Struktur: Hero → Info kontak → CTA WhatsApp → Form → Email → Lokasi/area layanan → FAQ → CTA.
- **Field form:** Nama, WhatsApp/email, Nama bisnis, Jenis website, Budget (opsional), Kebutuhan, Pesan
- **CTA form:** Kirim Konsultasi

### 6.8 Footer
Nama dan deskripsi singkat, navigasi, kontak (WhatsApp, email), sosial media (Instagram, Facebook, LinkedIn, GitHub jika relevan), copyright. Informasi yang belum ada tidak boleh dibuat-buat.

## 7. Strategi Konversi

- **CTA primer:** Konsultasi Gratis. **Sekunder:** Lihat Portofolio.
- **Lokasi CTA:** navbar, hero, layanan, portofolio, blog, footer.
- **Internal linking:** Beranda → Layanan → Portofolio → Kontak; Artikel → Layanan → Portofolio → Kontak; Portofolio → Layanan terkait → Kontak.

## 8. Strategi SEO

Komponen: Technical, On-Page, Local, Content, Entity SEO, Structured Data, Off-Page.

**Keyword research** (wajib sebelum finalisasi konten):
- Primary: jasa pembuatan website Banyuwangi, jasa website Banyuwangi, web developer Banyuwangi
- Service: jasa website company profile, jasa landing page, jasa website toko online
- Informational: biaya pembuatan website, cara membuat website, website vs marketplace
- Local: website untuk bisnis Banyuwangi, website UMKM Banyuwangi

**Keyword mapping awal:**

| Halaman | Intent keyword |
|---|---|
| Beranda | Jasa pembuatan website Banyuwangi |
| Tentang | Pandawa Dev |
| Layanan | Jasa pembuatan website |
| Portofolio | Portfolio website |
| Galeri | Galeri desain website |
| Blog | Informational keywords |
| Kontak | Kontak Pandawa Dev |

Satu keyword utama hanya punya satu target halaman yang jelas.

**On-page (wajib tiap halaman):** title unik, meta description, canonical, H1, heading logis, internal link, alt gambar, semantic HTML, URL bersih.

**Technical:** `sitemap.xml`, `robots.txt` (tidak boleh memblokir halaman penting), canonical, HTTPS, responsive, URL bersih, halaman 404, redirect handling.

**Structured data (JSON-LD):** Organization, WebSite, WebPage, Service, BreadcrumbList, Article, LocalBusiness. Hanya data nyata; dilarang review, rating, lokasi, harga, atau jumlah pelanggan palsu. Schema adalah lapisan pendukung, bukan trik ranking.

**Open Graph:** og:type, title, description, url, image (1200 × 630 px), image:alt, site_name, locale.

**AEO:** jawab langsung, jelas, terstruktur, faktual. Format: Pertanyaan → Jawaban langsung → Penjelasan → Contoh → CTA.

**GEO / AI search:** kejelasan entitas, konten faktual dan orisinal, informasi terstruktur, internal linking, info author dan identitas bisnis, bukti dunia nyata. Tidak ada jaminan muncul di AI Overview atau dikutip AI.

**Local SEO (Banyuwangi):** sebut area layanan secara natural, Google Business Profile (jika memenuhi syarat), review pelanggan asli, sitasi lokal yang legitimate, konten lokal yang relevan.

**SEO Portofolio:** tiap proyek punya konten unik (industri, jenis website, problem, solution, fitur, teknologi, hasil). **SEO Galeri:** prioritas UX, showcase, brand, aksesibilitas, lalu image SEO dengan alt text sesuai.

## 9. Persyaratan Non-Fungsional

| Area | Persyaratan |
|---|---|
| Performa | LCP ≤ 2.5s, INP < 200ms, CLS < 0.1. Optimasi gambar, lazy loading, JS minimal, kompresi aset, responsive images, CSS efisien |
| Aksesibilitas | Semantic, keyboard accessible, alt text, label form, kontras baik, focus terlihat, struktur heading benar |
| Responsif | Mobile-first (mobile, tablet, laptop, desktop) |
| Keamanan | HTTPS, tanpa secret/API key di frontend, dependency terbaru, form aman, validasi input bila form memakai backend/layanan pihak ketiga |

## 10. Brand, Desain, dan Tone

**Design system (TBD):** warna (primary, secondary, accent, background, text), tipografi (heading, body), komponen (navbar, button, card, badge, form, modal, accordion, footer).

**Tone:** Professional + Friendly + Clear + Local. Hindari terlalu formal, terlalu teknis, klaim berlebihan, keyword stuffing, dan bahasa marketing yang tidak konkret.
- ❌ "Kami adalah perusahaan terbaik nomor satu dengan teknologi tercanggih."
- ✅ "Kami membantu bisnis membangun website yang sesuai kebutuhan, mulai dari company profile hingga landing page."

## 11. Analytics dan Tracking

- **Search Console:** query, impressions, clicks, CTR, position, indexing
- **Analytics:** page views, sumber trafik, klik CTA, klik WhatsApp, submit form, interaksi portofolio
- **Event:** `whatsapp_click`, `contact_form_submit`, `phone_click`, `email_click`, `portfolio_view`, `service_view`, `cta_click`

## 12. Tech Stack dan Deployment

- Frontend: HTML5, CSS3, Bootstrap, JavaScript
- Version control: Git + GitHub
- Deployment: GitHub → Cloudflare Pages **atau** Vercel → pandawadev.web.id (platform final TBD)

**Sitemap:** `/`, `/tentang/`, `/layanan/`, `/portofolio/`, `/galeri/`, `/blog/`, `/kontak/`, `/blog/judul-artikel/`, `/portofolio/nama-project/`

## 13. Scope

**MVP (P0):** 7 halaman utama, responsive, fondasi SEO, Open Graph, JSON-LD, sitemap, robots, CTA WhatsApp, HTTPS, analytics, Search Console.

**Post-MVP:**
- **Fase 2:** blog rutin, case study, detail portofolio, local SEO, review pelanggan, content cluster
- **Fase 3:** lead tracking, quote calculator, konsultasi online, advanced analytics
- **Fase 4:** CMS, client portal, automasi lanjutan

## 14. Roadmap

| Fase | Nama | Output |
|---|---|---|
| 01 | Research | Keyword, kompetitor, search intent, target audiens |
| 02 | Information Architecture | Sitemap, struktur halaman, keyword mapping |
| 03 | Content | Copy semua halaman, portofolio, galeri, blog |
| 04 | Design | Design system, wireframe, UI, desain responsif |
| 05 | Development | HTML, CSS, Bootstrap, JS, SEO, schema, OG |
| 06 | QA | Mobile, desktop, browser, SEO, performa, aksesibilitas, form, link |
| 07 | Deployment | GitHub → Cloudflare/Vercel → domain → HTTPS |
| 08 | SEO Launch | Search Console → sitemap → indexing → monitoring → optimasi |

## 15. Definition of Done (MVP Ready)

- **Konten:** semua halaman tersedia, tanpa lorem ipsum, informasi akurat, CTA jelas, portofolio dan kontak valid
- **SEO:** title, meta, canonical, hierarki heading, internal link, sitemap, robots di semua halaman
- **Teknis:** responsif, HTTPS, tanpa broken link, form dan WhatsApp berfungsi
- **Performa:** Core Web Vitals diperiksa, gambar teroptimasi, JS minimal, tanpa resource tak perlu
- **Structured data:** JSON-LD valid, tanpa klaim palsu
- **Deployment:** alur GitHub → Cloudflare/Vercel → pandawadev.web.id berfungsi

## 16. Checklist

**SEO Launch**
- [ ] HTTPS, mobile responsive, sitemap, robots, canonical, 404, URL bersih
- [ ] Title, meta, H1, H2/H3, alt, internal link
- [ ] Schema: Organization, WebSite, WebPage, Service, Breadcrumb, Article, LocalBusiness (jika sesuai)
- [ ] Open Graph, social image, Twitter/X metadata (jika perlu)
- [ ] Optimasi gambar, CSS, JS; cek Core Web Vitals
- [ ] Search Console, sitemap disubmit, indexing dicek

**Konversi**
- [ ] CTA jelas, WhatsApp mudah ditemukan, form berfungsi
- [ ] Info kontak jelas, portofolio mudah dilihat, info layanan jelas
- [ ] Harga/paket (jika tersedia), trust signals, testimoni asli (jika tersedia)

## 17. Success Metrics

- **SEO:** impressions, clicks, CTR, posisi rata-rata, halaman terindeks, keyword yang ranking
- **Lokal:** visibilitas local search, interaksi Google Business Profile, kunjungan dari local search
- **Bisnis:** primer *Qualified Leads*; sekunder percakapan WhatsApp, submit form, permintaan konsultasi, permintaan proposal, klien baru

## 18. Risiko

| Risiko | Mitigasi |
|---|---|
| Tidak ada trafik | Keyword research, strategi konten, technical SEO, optimasi berkelanjutan |
| Trafik banyak, pelanggan sedikit | Fokus commercial intent dan CRO |
| Kompetitor lebih kuat | Relevansi lokal, kualitas, portofolio, otoritas, pengalaman pelanggan |
| Konten terlalu padat keyword | Fokus search intent dan bahasa natural |
| Konten AI berkualitas rendah | Review manusia, informasi orisinal, pengalaman nyata |
| Schema tidak menaikkan ranking | Perlakukan sebagai lapisan pendukung |

## 19. Prinsip SEO

> **Build for users first, optimize for search engines second.**

Alur yang dipakai: User Problem → Useful Content → Good UX → Strong Website → Technical SEO → Structured Information → Pemahaman Search Engine → Visibilitas Organik → Lead.

## 20. Tambahan Hasil Review (Tidak Ada di PRD Asli)

> Bagian ini ditambahkan saat review sebagai celah yang sebaiknya diputuskan sebelum desain dan coding. Angka dan opsi bersifat **usulan**, bukan keputusan final.

### 20.1 Non-Goals (di luar scope MVP)
- CMS, client portal, otomasi lanjutan (Fase 4)
- Kalkulator harga dan konsultasi online (Fase 3)
- Fitur e-commerce atau pembayaran di website Pandawa Dev sendiri
- Backend custom dan multi-bahasa (hanya Bahasa Indonesia)

### 20.2 Halaman Pendukung yang Belum Ada di IA
| Halaman | URL usulan | Catatan |
|---|---|---|
| Kebijakan Privasi | `/kebijakan-privasi/` | Wajib bila ada form dan analytics |
| Terima kasih | `/terima-kasih/` | `noindex`; dipakai untuk tracking konversi form |
| 404 | `/404.html` | Sudah disebut di PRD; tambahkan link ke Beranda, Layanan, Kontak |

Tambahkan juga ke footer dan sitemap (kecuali halaman `noindex`).

### 20.3 Penanganan Form pada Website Static
Website static tidak punya backend, sehingga PRD perlu memutuskan salah satu:
- Layanan form pihak ketiga (misalnya Formspree atau Web3Forms)
- Serverless function (Cloudflare Pages Functions atau Vercel Functions)
- Form yang mengarahkan ke WhatsApp dengan pesan terisi otomatis (`wa.me`)

Kebutuhan minimum: validasi input, proteksi spam (honeypot atau Cloudflare Turnstile), notifikasi ke email/WhatsApp, redirect ke halaman terima kasih. **Keputusan: TBD.**

### 20.4 Privasi dan Kepatuhan
- Kebijakan privasi yang menjelaskan data apa yang dikumpulkan lewat form dan analytics (mengacu pada UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi)
- Banner persetujuan cookie bila analytics memakai cookie
- Pilihan analytics: **Google Analytics 4** atau alternatif tanpa cookie (misalnya Cloudflare Web Analytics, Plausible). Keputusan: TBD
- Catatan: PRD asli hanya menyebut "Analytics" tanpa memilih tool

### 20.5 Functional Requirements dan Acceptance Criteria (usulan)
| ID | Fitur | Acceptance criteria |
|---|---|---|
| FR-01 | Navbar responsif | Tampil benar di mobile (menu collapse), CTA terlihat, link aktif ditandai |
| FR-02 | CTA WhatsApp | Membuka `wa.me` dengan nomor benar dan pesan awal terisi; memicu event `whatsapp_click` |
| FR-03 | Form kontak | Semua field wajib tervalidasi, pesan error jelas, sukses mengarah ke halaman terima kasih, memicu `contact_form_submit` |
| FR-04 | Filter portofolio | Filter kategori bekerja tanpa reload dan bisa dipakai keyboard |
| FR-05 | Galeri lightbox | Bisa dibuka/ditutup dengan keyboard (Esc), ada alt text, gambar lazy load |
| FR-06 | FAQ accordion | Bisa dioperasikan keyboard; konten tetap terbaca mesin pencari |
| FR-07 | Template artikel blog | Memuat semua elemen di bagian 6.6, termasuk schema Article dan artikel terkait |
| FR-08 | Halaman 404 | Muncul untuk URL tidak valid dan menyediakan navigasi balik |

### 20.6 Aset dan Konten yang Harus Disiapkan
Logo (versi terang/gelap), favicon, gambar OG default (1200 × 630 px), screenshot proyek, foto founder/tim (jika dipakai), copy tiap halaman, testimoni asli beserta izin tampil, nomor WhatsApp bisnis, email bisnis, alamat/area layanan, tautan sosial media.

### 20.7 Rencana Konten Blog (usulan)
- Jumlah artikel awal saat launch dan frekuensi publikasi: **TBD** (tentukan setelah keyword research; konsistensi lebih penting daripada jumlah)
- Setiap artikel melewati review manusia sebelum terbit (sesuai mitigasi risiko konten AI)
- Tentukan penulis dan penanggung jawab review

### 20.8 Dukungan Browser dan Perangkat (usulan)
Dua versi terbaru Chrome, Safari, Firefox, dan Edge; Android dan iOS; lebar layar dari ±360 px hingga desktop.

### 20.9 Konvensi Teknis (usulan)
- `<html lang="id">`
- Trailing slash konsisten pada semua URL
- Redirect `http` → `https` dan satu versi domain kanonis (`www` atau non-`www`)
- Format gambar modern (WebP/AVIF) dengan fallback bila perlu
- Struktur folder, penamaan file, dan aturan cache didokumentasikan di repo

### 20.10 Asumsi dan Dependensi
- Domain `pandawadev.web.id` sudah aktif dan DNS dapat diarahkan ke Cloudflare/Vercel
- Ada portofolio nyata atau demo yang bisa ditampilkan (diberi label jujur)
- Data keyword tersedia dari tool riset (misalnya Google Keyword Planner, Search Console, atau tool berbayar)
- Konten dan aset disediakan sebelum fase development

### 20.11 Stakeholder dan Timeline
- Product owner, penulis konten, desainer, developer, dan penanggung jawab SEO: **TBD**
- Target tanggal launch dan estimasi tiap fase roadmap: **TBD**

### 20.12 Pemeliharaan Pasca-Launch
Monitoring Search Console tiap minggu, review performa dan konten tiap kuartal, pembaruan konten lama, cek broken link berkala, dependency tetap terbarui.

### 20.13 Glosarium
| Istilah | Arti |
|---|---|
| AEO | Answer Engine Optimization, optimasi agar konten menjawab pertanyaan secara langsung |
| GEO | Generative Engine Optimization, optimasi untuk pencarian berbasis AI |
| CRO | Conversion Rate Optimization |
| LCP / INP / CLS | Metrik Core Web Vitals: kecepatan muat, responsivitas interaksi, stabilitas tata letak |
| Lead (qualified) | Calon pelanggan yang benar-benar membutuhkan layanan dan berpotensi jadi klien |
| JSON-LD | Format data terstruktur untuk membantu mesin pencari memahami halaman |

### 20.14 Riwayat Revisi
| Versi | Perubahan |
|---|---|
| 0.3 | PRD asli |
| 0.3.1 | Ringkasan dalam Markdown, ditambah bagian 20 hasil review |

## 21. Status dan Langkah Berikutnya

**Sudah disepakati:** domain pandawadev.web.id, target Banyuwangi, website static (HTML + CSS + Bootstrap), Cloudflare Pages/Vercel, SEO sebagai prioritas (Local SEO, AEO, GEO), Open Graph, JSON-LD, sitemap, robots.txt, portofolio, galeri, blog, WhatsApp sebagai CTA utama.

**Masih TBD:**
- [ ] Target customer utama
- [ ] Layanan final, harga, paket
- [ ] USP final
- [ ] Brand identity: logo, warna, font
- [ ] Nomor WhatsApp bisnis dan email
- [ ] Lokasi/area layanan sebenarnya
- [ ] Keyword final dan kompetitor utama
- [ ] Cloudflare Pages atau Vercel
- [ ] Metode penanganan form (bagian 20.3)
- [ ] Tool analytics dan kebijakan cookie (bagian 20.4)
- [ ] Stakeholder dan target tanggal launch (bagian 20.11)

**Langkah berikutnya: Phase 01 — Keyword & Competitor Research** (belum masuk desain atau coding). Output yang diharapkan berupa tabel:

| Keyword | Volume | Intent | Competition | Target Page | Priority |
|---|---|---|---|---|---|
| jasa pembuatan website Banyuwangi | ? | Commercial | ? | Beranda | P0 |
| jasa website Banyuwangi | ? | Commercial | ? | Beranda | P0 |

Dari tabel ini ditentukan isi tiap halaman, H1, H2, title, meta description, FAQ, internal linking, JSON-LD, dan content cluster, sehingga website dibangun dari data → intent → struktur → konten → implementasi SEO, bukan tebakan keyword.