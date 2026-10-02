import { motion } from "framer-motion"
import { timelineData } from "../data/portfolioData"

export function Timeline() {
  return (
    <section id="timeline" className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl mx-auto border-t border-border">
      <div className="mb-8 sm:mb-14">
        <div className="font-mono text-[10px] sm:text-[11px] text-[#10B981] tracking-widest uppercase mb-1.5 font-medium">
          // Karir &amp; Perjalanan Work
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Pengalaman Membangun Proyek
        </h2>
      </div>

      <div className="relative border-l border-border ml-2 sm:ml-4">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="mb-10 sm:mb-14 ml-5 sm:ml-8 md:ml-12 relative"
          >
            {/* Precision indicator node */}
            <div className="absolute -left-[25px] sm:-left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-background border-2 border-[#10B981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />

            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
              <span className="font-mono text-xs md:text-sm text-[#F97316] font-semibold">
                {item.year}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-sans">{item.title}</h3>
            </div>

            {item.role && (
              <div className="font-mono text-[11px] sm:text-xs text-[#10B981] mb-2.5">
                {item.role}
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed mb-3.5 text-xs sm:text-sm md:text-base">
              {item.desc}
            </p>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 bg-surface border border-border text-muted-foreground rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
