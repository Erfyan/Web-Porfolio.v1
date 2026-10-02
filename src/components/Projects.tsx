import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projectsData } from "../data/portfolioData"
import { Project } from "../types/portfolio"
import { ProjectModal } from "./ProjectModal"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div>
          <div className="font-mono text-[10px] sm:text-[11px] text-[#10B981] tracking-widest uppercase mb-1.5 font-medium">
            // Proyek Pilihan &bull; Arsipan
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Hasil Karya Saya
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 border transition-all rounded-sm shadow-sm cursor-pointer active:scale-95 text-xs whitespace-nowrap min-h-[36px] ${
                selectedCategory === cat
                  ? "gradient-orange-green-bg text-white font-semibold border-transparent shadow-emerald-500/10"
                  : "border-border text-muted-foreground hover:text-primary hover:border-border/80 bg-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setActiveProject(p)}
              className="group relative border border-border bg-surface flex flex-col hover:border-[#10B981]/50 transition-all duration-300 overflow-hidden cursor-pointer rounded-sm shadow-md hover:shadow-xl"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 z-20 bg-background/90 backdrop-blur-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground rounded-sm">
                  {p.id}
                </div>
                <div className="absolute top-3 right-3 z-20 bg-background/90 backdrop-blur-sm border border-border px-2.5 py-0.5 font-mono text-[10px] text-[#10B981] uppercase rounded-sm font-semibold">
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start mb-2.5">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-primary group-hover:text-[#10B981] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <div className="p-1 border border-border rounded group-hover:border-[#10B981]/60 transition-colors flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#10B981] transition-colors" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 text-xs sm:text-sm flex-1 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-auto space-y-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 bg-background border border-border text-muted-foreground rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center font-mono text-[11px] sm:text-xs text-muted-foreground border-t border-border pt-3">
                    <span className="truncate pr-2">{p.role}</span>
                    <span className="text-[#F97316] font-medium flex-shrink-0">{p.year}</span>
                  </div>
                </div>
              </div>

              {/* Hover bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 gradient-orange-green-bg group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
