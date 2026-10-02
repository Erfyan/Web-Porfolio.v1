import {
  Project,
  SkillCategory,
  TimelineItem,
  SocialLink,
} from "../types/portfolio"

import project01 from "../assets/projects/01.jpg"
import project02 from "../assets/projects/02.jpg"
import project03 from "../assets/projects/03.jpg"
import project04 from "../assets/projects/04.jpg"
import project05 from "../assets/projects/05.jpg"
import project06 from "../assets/projects/06.jpg"
import project07 from "../assets/projects/07.jpg"
import project08 from "../assets/projects/08.jpg"
import project09 from "../assets/projects/09.jpg"

export const personalInfo = {
  name: "Erfyan",
  title: "Full-Stack Developer | Software Engineer | UI/UX Designer | Graphic Designer",
  location: "Makassar, Sulawesi Selatan, Indonesia",
  email: "erfyan.dev@gmail.com",
  status: "SIAP MENERIMA ORDERAN PROYEK, EVENT & KOLABORASI",
  statusAvailable: true,
  shortBio:
    "Saya merancang dan membangun sistem perangkat lunak yang menggabungkan performa backend yang solid, arsitektur database handal, serta antarmuka UI/UX dan desain grafis yang intuitif.",
  fullBio: [
    "Perjalanan saya berawal dari kecintaan pada logika pemrograman dan estetika desain. Dengan latar belakang di bidang Software Engineering dan UI/UX Design, saya berfokus mengembangkan aplikasi web end-to-end yang aman, cepat, dan memberikan nilai nyata bagi pengguna.",
    "Saya percaya bahwa perangkat lunak modern tidak hanya harus tangguh secara arsitektur sistem, tetapi juga harus menyajikan pengalaman pengguna yang indah, mulus, dan nyaman diakses di berbagai perangkat.",
  ],
  codeSnippet: `{
  "name": "Erfyan",
  "role": "Full-Stack Developer | Software Engineer | UI/UX Designer | Graphic Designer",
  "status": "Building & Growing",
  "focus": [
    "PHP, Python & JavaScript",
    "Laravel, Codeigniter, Express.js, Django & Nest.js",
    "MySQL & PostgreSQL",
    "React, Next.js, Vue, Tailwind CSS & Bootstrap"
  ],
  "location": "Makassar, Sulawesi Selatan, Indonesia"
}`,
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "Stunt-Guard",
    category: "Fullstack",
    desc: "Sistem aplikasi pemantauan gizi dan pencegahan stunting anak berbasis web interaktif.",
    longDesc:
      "Stunt-Guard adalah platform sistem informasi pencegahan stunting dan pemantauan tumbuh kembang anak. Dilengkapi kalkulasi status gizi otomatis, grafik pertumbuhan, pencatatan data kesehatan, serta dashboard analitik real-time.",
    role: "Full-Stack Developer & UI/UX Designer",
    year: "2026",
    tech: ["PHP", "Laravel", "Blade", "Tailwind CSS", "MySQL"],
    image: project01,
    githubUrl: "https://github.com/Erfyan/Stunt-Guard",
    liveUrl: "https://github.com/Erfyan/Stunt-Guard",
    stats: [
      { label: "Status Proyek", value: "Terbaru (2026)" },
      { label: "Fokus Sistem", value: "Kesehatan & Gizi" },
    ],
  },
  {
    id: "02",
    title: "SIPROS",
    category: "Fullstack",
    desc: "Sistem Progres Skripsi berbasis Decision Support System dengan menggunakan metode SAW (Simple Additive Weighting).",
    longDesc:
      "SIPROS (Sistem Progres Skripsi) adalah platform web berbasis Decision Support System (DSS) yang memanfaatkan metode Simple Additive Weighting (SAW) untuk memantau, menganalisis, dan memberikan rekomendasi keputusan dalam pemantauan progres skripsi mahasiswa secara terstruktur dan transparan.",
    role: "Full-Stack Developer & UI/UX Designer",
    year: "2026",
    tech: ["PHP", "CodeIgniter3", "MySQL", "Bootstrap", "JavaScript"],
    image: project02,
    githubUrl: "https://github.com/Erfyan/SIPROS",
    liveUrl: "https://github.com/Erfyan/SIPROS",
    stats: [
      { label: "Status Proyek", value: "Terbaru (2026)" },
      { label: "Metode System", value: "SAW (Decision Support System)" },
    ],
  },
  {
    id: "03",
    title: "Surat-APP",
    category: "Mobile",
    desc: "Aplikasi Android pengarsipan dokumen dan manajemen persuratan digital terintegrasi.",
    longDesc:
      "Surat-APP adalah aplikasi mobile Android untuk digitalisasi persuratan, pengarsipan dokumen, alur disposisi surat, serta pemantauan status persuratan secara praktis dan aman langsung dari smartphone.",
    role: "Android Developer & UI/UX Designer",
    year: "2026",
    tech: ["Android", "Java", "REST API", "React Native", "Nodejs", "PostgreSQL"],
    image: project03,
    githubUrl: "https://github.com/Erfyan/Surat-APP",
    liveUrl: "https://github.com/Erfyan/Surat-APP",
    stats: [
      { label: "Platform", value: "Android Mobile" },
      { label: "Status Proyek", value: "Terbaru (2026)" },
    ],
  },
  {
    id: "04",
    title: "BUMDes Coppo Awi",
    category: "Fullstack",
    desc: "Website resmi pengelolaan Badan Usaha Milik Desa (BUMDes) Coppo Awi secara digital dan transparan.",
    longDesc:
      "BUMDes Coppo Awi adalah platform web untuk manajemen dan transparansi operasional Badan Usaha Milik Desa. Dilengkapi fitur pengelolaan data usaha, laporan keuangan, profil desa, serta informasi publik yang dapat diakses masyarakat secara online.",
    role: "Full-Stack Developer & UI/UX Designer",
    year: "2026",
    tech: ["Nodejs", "Expressjs", "React", "PostgreSQL", "Tailwind CSS", "TypeScript", "JavaScript"],
    image: project04,
    githubUrl: "https://github.com/Erfyan/BUMDes",
    liveUrl: "https://bumdescoppoawi.site",
    stats: [
      { label: "Status Proyek", value: "Terbaru (2026)" },
      { label: "Fokus Sistem", value: "Manajemen Desa" },
    ],
  },
  {
    id: "05",
    title: "Undangan Pernikahan Digital",
    category: "Frontend",
    desc: "Website undangan pernikahan digital interaktif dengan desain elegan, musik latar, dan RSVP online.",
    longDesc:
      "Website Undangan Pernikahan Digital dirancang dengan tampilan estetik, modern, dan responsif. Menggabungkan galeri foto interaktif, hitung mundur (countdown event), lokasi Google Maps, ucapan & konfirmasi kehadiran RSVP online, serta musik latar interaktif.",
    role: "Frontend Developer & UI/UX Designer",
    year: "2026",
    tech: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    image: project05,
    githubUrl: "https://github.com/Erfyan/website-undangan-pernikahan",
    liveUrl: "https://github.com/Erfyan/website-undangan-pernikahan",
    stats: [
      { label: "Status Proyek", value: "Terbaru (2026)" },
      { label: "Tipe Proyek", value: "Undangan Digital" },
    ],
  },
  {
    id: "06",
    title: "Unipolfest Landing Page",
    category: "Frontend",
    desc: "Landing page event festival universitas dengan desain modern, responsif, dan informatif.",
    longDesc:
      "Unipolfest Landing Page adalah website landing page untuk acara festival kampus. Dibangun dengan tampilan yang menarik, animasi interaktif, serta informasi jadwal, lokasi, dan pendaftaran peserta yang mudah diakses.",
    role: "Frontend Developer & UI/UX Designer",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: project06,
    githubUrl: "https://github.com/Erfyan/Unipolfest-LandingPage",
    liveUrl: "https://unipolfest.free.nf",
    stats: [
      { label: "Tipe Proyek", value: "Landing Page" },
      { label: "Status Proyek", value: "2025" },
    ],
  },
  {
    id: "07",
    title: "SIG Kualitas Air",
    category: "Fullstack",
    desc: "Sistem Informasi Geografis (SIG) pemantauan dan pemetaan kualitas air berbasis web interaktif.",
    longDesc:
      "SIG Kualitas Air adalah platform berbasis Geographic Information System (GIS) untuk memetakan dan memantau kondisi kualitas air di berbagai titik lokasi. Dilengkapi visualisasi peta interaktif, data parameter kualitas air, serta dashboard analitik spasial.",
    role: "Full-Stack Developer & GIS Engineer",
    year: "2024 — 2025",
    tech: ["Nodejs", "MySQL", "Leaflet.js", "Tailwind CSS", "Expressjs"],
    image: project07,
    githubUrl: "https://github.com/Erfyan/sig-kualair",
    liveUrl: "https://github.com/Erfyan/sig-kualair",
    stats: [
      { label: "Tipe Proyek", value: "GIS / Pemetaan" },
      { label: "Periode", value: "2024 — 2025" },
    ],
  },
  {
    id: "08",
    title: "SmartStock",
    category: "Fullstack",
    desc: "Sistem manajemen inventaris dan stok barang cerdas berbasis web untuk efisiensi operasional gudang.",
    longDesc:
      "SmartStock adalah aplikasi web untuk pengelolaan stok dan inventaris barang secara digital. Dilengkapi fitur pencatatan barang masuk/keluar, pelacakan stok real-time, laporan inventaris, serta notifikasi stok minimum untuk memastikan ketersediaan barang.",
    role: "Full-Stack Developer",
    year: "2024",
    tech: ["PHP", "CSS", "MySQL", "Bootstrap", "JavaScript"],
    image: project08,
    githubUrl: "https://github.com/Erfyan/Smartstock",
    liveUrl: "https://github.com/Erfyan/Smartstock",
    stats: [
      { label: "Tipe Proyek", value: "Manajemen Inventaris" },
      { label: "Status Proyek", value: "2024" },
    ],
  },
  {
    id: "09",
    title: "MathMagic",
    category: "Frontend",
    desc: "Aplikasi web interaktif untuk pembelajaran matematika dengan visualisasi dan kuis yang menyenangkan.",
    longDesc:
      "MathMagic adalah platform edukasi berbasis web yang dirancang untuk membuat pembelajaran matematika lebih menarik dan interaktif. Dilengkapi dengan visualisasi konsep, latihan soal interaktif, serta antarmuka yang ramah pengguna untuk berbagai tingkat kesulitan.",
    role: "Frontend Developer",
    year: "2024",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    image: project09,
    githubUrl: "https://github.com/Erfyan/mathmagic",
    liveUrl: "https://github.com/Erfyan/mathmagic",
    stats: [
      { label: "Tipe Proyek", value: "Edukasi Interaktif" },
      { label: "Status Proyek", value: "2024" },
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend & Database",
    skills: [
      "PHP (Laravel, CodeIgniter)",
      "Python",
      "JavaScript / Node.js (Express.js, Nest.js)",
      "MySQL & PostgreSQL",
    ],
  },
  {
    name: "Frontend & Frameworks",
    skills: [
      "React & Next.js",
      "Vue.js",
      "Tailwind CSS & Bootstrap",
      "TypeScript & JavaScript (ES6+)",
    ],
  },
  {
    name: "Design & Creative",
    skills: [
      "UI/UX Design",
      "Graphic Design",
      "Figma & Prototyping",
      "Design Systems & Visual Branding",
      "Desain Logo & Banner",
      "CV Creative"
    ],
  },
]

export const timelineData: TimelineItem[] = [
  {
    year: "2024 — 2026 (Sekarang)",
    title: "Full-Stack Developer & UI/UX Designer",
    role: "Pengembangan Sistem Web & Desain Antarmuka",
    desc: "Merancang arsitektur backend, RESTful API, serta antarmuka web modern untuk berbagai kebutuhan aplikasi enterprise dan klien.",
    tags: ["PHP", "Laravel", "CodeIgniter", "Express.js", "React", "Next.js", "Vue.js", "MySQL", "PostgreSQL", "JavaScript", "Tailwind CSS", "Bootstrap", "Figma", "Canva", "Affinity Designer"],
  },
  {
    year: "2023 — 2024",
    title: "Programmer & Graphic Designer",
    role: "Programmer & Desain Grafis",
    desc: "Membangun Web Statis Sederhana & Desain Grafis Serta Logo Untuk Berbagai Kebutuhan Klien.",
    tags: ["HTML", "CSS", "JavaScript", "Figma", "Canva", "CorelDraw"],
  },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Erfyan", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/er-fyan", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/errv_9", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/6287842166300", icon: "whatsapp" },
  { label: "YouTube", href: "https://youtube.com/@erfyan_09", icon: "youtube" },
  { label: "Email", href: "mailto:erfyan.dev@gmail.com", icon: "mail" },
]
