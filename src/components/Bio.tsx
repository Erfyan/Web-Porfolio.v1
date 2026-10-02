import { motion } from "framer-motion"
import { personalInfo } from "../data/portfolioData"

export function Bio() {
  return (
    <section id="bio" className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-border relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
      >
        {/* Editorial Photo Container */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-5/12 relative group mx-auto lg:mx-0">
          {/* Subtle architectural frame */}
          <div className="relative aspect-[4/5] border border-border overflow-hidden bg-surface rounded-sm p-2 shadow-2xl">
            {/* Corner registration marks */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F97316] z-20 pointer-events-none" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#10B981] z-20 pointer-events-none" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F97316] z-20 pointer-events-none" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#10B981] z-20 pointer-events-none" />

            <div className="w-full h-full overflow-hidden relative">
              <img
                src="../public/profile.jpeg"
                alt={`${personalInfo.name} Portrait`}
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Understated caption badge */}
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-muted-foreground px-1">
            <span>PROGRAMMER &bull; PORTRAIT</span>
            <span className="gradient-orange-green-text font-semibold">MAKASSAR-SOPPENG, ID</span>
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full lg:w-7/12 space-y-6 sm:space-y-8">
          <div className="inline-block px-3 py-1 border border-border text-[10px] sm:text-[11px] font-mono tracking-widest text-[#10B981] bg-surface rounded-sm uppercase">
            // Narasi &amp; Filosofi Programmer
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-[1.15]">
            Merancang sistem dimana{" "}
            <span className="font-serif italic font-normal gradient-orange-green-text">
              Logika &amp; Presisi{" "}
            </span>{" "}
            bertemu intuisi manusia.
          </h2>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-border">
            <div className="font-mono">
              <span className="text-[10px] sm:text-[11px] text-muted-foreground block mb-1">
                DISIPLIN
              </span>
              <span className="text-xs sm:text-sm text-primary font-medium">
                FullStack &amp; Design
              </span>
            </div>
            <div className="font-mono">
              <span className="text-[10px] sm:text-[11px] text-muted-foreground block mb-1">
                LOKASI
              </span>
              <span className="text-xs sm:text-sm text-primary font-medium">
                {personalInfo.location}
              </span>
            </div>
            <div className="font-mono">
              <span className="text-[10px] sm:text-[11px] text-muted-foreground block mb-1">
                STATUS
              </span>
              <span className="text-xs sm:text-sm text-[#10B981] font-medium inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Siap Orderan &amp; Kolaborasi
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
