# 🚀 Modern Serene Portfolio — React 19 + Tailwind v4

Sebuah template portfolio web modern, ultra-responsif, dan aesthetically refined yang dirancang untuk Full-Stack & Systems Engineers. Memadukan arsitektur UI premium dengan skema warna adem ("Hitam Adem" & "Putih Adem"), efek spotlight kursor interaktif, dan animasi mikro yang halus.

---

## ✨ Fitur Utama

- **🎨 Dual Serene Theme Engine**:
  - **Hitam Adem (Dark Mode)**: Kombinasi obsidian, emerald muted, dan aksen warm amber/orange.
  - **Putih Adem (Light Mode)**: Kombinasi soft mint, sage, emerald, dan aksen warm orange.
  - Transisi CSS murni tanpa *flash* saat memuat.

- **✨ Interactive Cursor Spotlight & Grid**:
  - `InteractiveGridBackground.tsx`: Background garis kotak presisi (28px grid) dengan efek sorot lampu (*radial spotlight*) yang mengikuti pergerakan kursor secara riil.
  - `CustomCursor.tsx`: Ring kursor kustom dengan animasi pegas melacak kursor secara mulus dan efek membesar saat mengarahkan ke elemen interaktif.

- **📱 Glassmorphism Floating Dock**:
  - `SocialDock.tsx`: Dock sosial media melayang bergaya macOS/iOS dengan ikon *squircle*, efek elevasi hover, dan tooltip font monospace.

- **💼 Dynamic Project Showcase**:
  - Grid proyek interaktif dengan filter kategori (All, Systems, Graphics, Frontend, Fullstack).
  - Modal overlay detail proyek dengan metrik performa (misal: *Throughput*, *P99 Latency*, *Lighthouse Score*).

- **⚡ Modern Tech Stack**:
  - **React 19** & **TypeScript 5.7**
  - **Vite 8** dengan HMR super cepat
  - **Tailwind CSS v4** dengan integrasi `@tailwindcss/vite`
  - **Lucide React Icons**

---

## 📁 Struktur Proyek (Project Architecture)

```
Web-Portfolio-Template01/
├── src/
│   ├── components/            # Komponen UI Modular
│   │   ├── About.tsx          # Bio, filosofi, & statistik personal
│   │   ├── BackToTop.tsx      # Tombol scroll-to-top melayang
│   │   ├── Contact.tsx        # Formulir kontak & info akses cepat
│   │   ├── CustomCursor.tsx   # Kursor kustom interaktif
│   │   ├── GitHubStarButton.tsx # Tombol aksi GitHub
│   │   ├── Hero.tsx           # Banner utama & snippet kode interaktif
│   │   ├── InteractiveGridBackground.tsx # Spotlight grid kursor
│   │   ├── MagneticButton.tsx # Wrapper tombol efek magnetik
│   │   ├── Navbar.tsx         # Navigation bar & theme switcher toggle
│   │   ├── Projects.tsx       # Grid proyek, filter, & modal detail
│   │   ├── Skills.tsx         # Kategori skill & indikator keahlian
│   │   ├── SocialDock.tsx     # Floating glass social dock
│   │   └── Timeline.tsx       # Timeline pengalaman kerja & karir
│   ├── context/
│   │   └── ThemeContext.tsx   # State management tema (dark/light)
│   ├── data/
│   │   └── portfolioData.ts   # Single Source of Truth untuk semua konten
│   ├── types/
│   │   └── portfolio.ts       # Type definitions (TypeScript Interfaces)
│   ├── App.tsx                # Main Application Layout
│   ├── index.css              # Theme CSS variables & Tailwind v4 `@theme`
│   └── main.tsx               # React Entrypoint
├── index.html                 # HTML Shell & Fonts Google
├── package.json               # Dependensi & script proyek
├── tsconfig.json              # Konfigurasi TypeScript
└── vite.config.ts             # Konfigurasi Vite & Tailwind v4 plugin
```

---

## 🛠️ Panduan Instalasi & Jalankan (Getting Started)

### Prasyarat
- Node.js >= 18
- pnpm / npm / yarn

### Langkah-langkah:

1. **Clone repository ini:**
   ```bash
   git clone <repository-url>
   cd Web-Portfolio-Template01
   ```

2. **Install dependensi:**
   ```bash
   pnpm install
   # atau
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   pnpm run dev
   # atau
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173` (atau port terkonfigurasi).

4. **Build untuk Produksi:**
   ```bash
   pnpm run build
   # atau
   npm run build
   ```

---

## 📝 Kustomisasi Konten

Seluruh data portofolio disentralisasi di satu file untuk kemudahan maintenance:
👉 **`src/data/portfolioData.ts`**

Anda dapat memperbarui:
- `personalInfo`: Nama, peran, status, bio, dan snippet kode JSON.
- `projectsData`: Judul proyek, deskripsi, teknologi, screenshot, dan metrik.
- `skillCategories`: Daftar keahlian teknis berdasarkan kategori.
- `timelineData`: Riwayat pekerjaan, peran, dan teknologi yang digunakan.
- `socialLinks`: Tautan akun media sosial & kontak.

---

## 🎨 Kustomisasi Tema & Warna

Variabel warna tema didefinisikan di `src/index.css`:
- **Mode Gelap (`.dark`)**: `--background: #080A09;` (Obsidian), `--ring: #10B981;` (Emerald).
- **Mode Terang (`.light`)**: `--background: #F7FAF8;` (Mint Mist), `--ring: #059669;` (Emerald).

---

## 📄 Lisensi

MIT License — Bebas digunakan dan disesuaikan untuk portofolio pribadi Anda.
