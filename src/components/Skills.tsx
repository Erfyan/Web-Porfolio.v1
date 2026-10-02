import { motion } from "framer-motion"
import { skillCategories } from "../data/portfolioData"

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-border">
      <div className="mb-8 sm:mb-14">
        <div className="font-mono text-[10px] sm:text-[11px] text-[#10B981] tracking-widest uppercase mb-1.5 font-medium">
          // Keahlian Teknis &bull; Toolchain
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Keahlian Utama.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-5 sm:p-8 border border-border bg-surface hover:border-[#10B981]/50 transition-all duration-300 rounded-sm shadow-md hover:shadow-xl group"
          >
            <div className="relative z-10">
              <h3 className="font-mono text-base sm:text-lg text-primary border-b border-border pb-3 sm:pb-4 mb-5 sm:mb-6 flex items-center justify-between">
                <span className="font-sans font-semibold tracking-tight">{cat.name}</span>
                <span className="text-[11px] text-[#F97316] font-mono font-medium">
                  [0{i + 1}]
                </span>
              </h3>
              <div className="flex flex-col gap-3 sm:gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 sm:gap-3 font-mono text-xs text-muted-foreground group/skill"
                  >
                    <span className="text-[10px] text-muted-foreground/60 group-hover/skill:text-[#10B981] transition-colors">
                      ◆
                    </span>
                    <span className="group-hover/skill:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
