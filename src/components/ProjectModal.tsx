import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ExternalLink,
  Code2,
  Calendar,
  UserCheck,
  Layers,
} from "lucide-react"
import { Project } from "../types/portfolio"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (project) {
      document.body.classList.add("modal-open")
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("modal-open")
    }
    return () => {
      document.body.classList.remove("modal-open")
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[88vh] bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Top header accent */}
          <div className="h-[3px] w-full gradient-orange-green-bg flex-shrink-0" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-background/70 backdrop-blur-sm flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] px-2.5 py-0.5 bg-surface border border-border text-[#10B981] rounded-md font-semibold">
                PROYEK {project.id}
              </span>
              <span className="font-mono text-xs text-muted-foreground uppercase font-medium">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-surface-hover border border-transparent hover:border-border rounded-lg transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto flex-1">
            {/* Compact Image */}
            <div className="relative h-40 sm:h-56 w-full overflow-hidden bg-background flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-95" />
            </div>

            {/* Details Body */}
            <div className="p-4 sm:p-7 space-y-4 sm:space-y-5 -mt-6 relative z-10">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
                  {project.longDesc || project.desc}
                </p>
              </div>

              {/* Stats Row if available */}
              {project.stats && project.stats.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 bg-background/80 border border-border rounded-xl">
                  {project.stats.map((s) => (
                    <div key={s.label} className="font-mono">
                      <div className="text-[10px] text-muted-foreground uppercase">
                        {s.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#10B981]">
                        {s.value}
                      </div>
                    </div>
                  ))}
                  <div className="font-mono">
                    <div className="text-[10px] text-muted-foreground uppercase">TAHUN</div>
                    <div className="text-sm sm:text-base font-bold text-primary">
                      {project.year}
                    </div>
                  </div>
                </div>
              )}

              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs border-t border-border pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <UserCheck className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span>PERAN:</span>
                  <span className="text-primary font-medium truncate">{project.role}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>TAHUN:</span>
                  <span className="text-primary font-medium">{project.year}</span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#10B981]" /> TEKNOLOGI &amp; STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] sm:text-xs px-2.5 py-1 bg-background border border-border text-primary rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 font-mono text-xs font-semibold gradient-orange-green-bg text-white rounded-lg inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10 hover:brightness-110 cursor-pointer active:scale-95 min-h-[44px]"
                  >
                    <ExternalLink className="w-4 h-4" /> Lihat Proyek (Live)
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 font-mono text-xs border border-border hover:border-[#10B981] text-primary bg-background rounded-lg inline-flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95 min-h-[44px]"
                  >
                    <Code2 className="w-4 h-4" /> Kode Sumber (Source)
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
