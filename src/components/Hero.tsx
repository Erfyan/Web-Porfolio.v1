import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react"
import { MagneticButton } from "./MagneticButton"
import { GitHubStarButton } from "./GitHubStarButton"
import { personalInfo } from "../data/portfolioData"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[95vh] flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Decorative architectural hairline lines */}
      <div className="absolute top-0 left-4 sm:left-8 md:left-16 lg:left-24 bottom-0 w-px bg-border/40 pointer-events-none hidden sm:block" />
      <div className="absolute top-0 right-4 sm:right-8 md:right-16 lg:right-24 bottom-0 w-px bg-border/40 pointer-events-none hidden sm:block" />

      <div className="relative z-10 space-y-6 sm:space-y-8 max-w-4xl">
        {/* Serene Craft Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3 py-1.5 bg-surface border border-border rounded-sm font-mono text-[10px] sm:text-[11px] text-muted-foreground shadow-sm max-w-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="tracking-wider uppercase text-primary font-medium">
            Personal Portfolio &bull; {personalInfo.name}
          </span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="text-[#10B981] font-medium w-full sm:w-auto">
            Siap Menerima Orderan &amp; Kolaborasi
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-primary leading-[1.1]"
        >
          Programmer Dengan{" "}
          <span className="font-serif italic font-normal gradient-orange-green-text">
            Dedikasi, Presisi{" "}
          </span>
          &amp; Keseimbangan
        </motion.h1>

        {/* Human, authentic narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal"
        >
          Arsitektur Sistem dan Desain Antarmuka. Membangun Infrastruktur Terdistribusi
          yang Tetap Tenang di Bawah Beban Ekstrem dan Antarmuka yang Terasa Responsif
          Secara Alami.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
        >
          <MagneticButton variant="primary" href="#projects" className="w-full sm:w-auto">
            Proyek Pilihan <ArrowDown className="w-3.5 h-3.5" />
          </MagneticButton>
          <MagneticButton variant="secondary" href="#contact" className="w-full sm:w-auto">
            Mulai Percakapan <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
          </MagneticButton>
          <GitHubStarButton repoUrl="https://github.com" starCount="148" className="w-full sm:w-auto" />
        </motion.div>
      </div>

      {/* Editorial Bottom Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-muted-foreground"
      >
        <div className="flex items-center gap-2.5">
          <Compass className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
          <span>LOKASI: MAKASSAR-SOPPENG (UTC+8) &bull; erfyan.dev</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>STACK: PHP / PYTHON / LARAVEL / REACT / NEXT.JS</span>
          <span className="text-border hidden sm:inline">&bull;</span>
          <span className="text-primary font-medium">ORGANIK &bull; HARMONIS</span>
        </div>
      </motion.div>
    </section>
  )
}
