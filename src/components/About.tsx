import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { personalInfo } from "../data/portfolioData"

export function About() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
      >
        <div className="space-y-6">
          <div className="font-mono text-[10px] sm:text-[11px] text-[#10B981] tracking-widest uppercase">
            // Arsitektur &amp; Metodologi Utama
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Pengembangan Berkelanjutan &amp; Presisi.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            {personalInfo.shortBio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 font-mono text-xs">
            <div className="p-3.5 sm:p-4 border border-border bg-surface/80 rounded-sm">
              <div className="text-muted-foreground mb-1 text-[10px] sm:text-[11px]">PENDEKATAN</div>
              <div className="text-primary font-medium">
                Terstruktur &amp; Bebas Bug
              </div>
            </div>
            <div className="p-3.5 sm:p-4 border border-border bg-surface/80 rounded-sm">
              <div className="text-muted-foreground mb-1 text-[10px] sm:text-[11px]">METRIK</div>
              <div className="gradient-orange-green-text font-bold">
                Performa &amp; Efisiensi Maksimal
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border p-4 sm:p-6 rounded-sm relative overflow-hidden group shadow-2xl">
          {/* Subtle warm orange to green top line */}
          <div className="absolute top-0 left-0 w-full h-[2px] gradient-orange-green-bg" />

          {/* Code Window Header */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-border font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70 inline-block" />
              <span className="ml-1 sm:ml-2 text-muted-foreground text-[10px] sm:text-[11px] truncate max-w-[150px] sm:max-w-none">
                architect_manifest.json
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs hover:text-primary hover:bg-surface-hover border border-border rounded transition-colors text-muted-foreground cursor-pointer min-h-[32px]"
              title="Salin JSON"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </>
              )}
            </button>
          </div>

          <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-primary p-1">
            <code>
              <span className="text-muted-foreground/60">{`// Spesifikasi Developer\n`}</span>
              <span className="text-muted-foreground">{`const profile = `}</span>
              {personalInfo.codeSnippet.split("\n").map((line, i) => (
                <div
                  key={i}
                  className="hover:bg-muted/40 transition-colors px-1 -mx-1 rounded whitespace-pre"
                >
                  {line.includes('"name"') ||
                  line.includes('"role"') ||
                  line.includes('"status"') ||
                  line.includes('"focus"') ||
                  line.includes('"location"') ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(
                            /"([^"]+)"(?=:)/g,
                            '<span class="text-[#F97316]">"$1"</span>',
                          )
                          .replace(
                            /: "([^"]+)"/g,
                            ': <span class="text-[#10B981]">"$1"</span>',
                          ),
                      }}
                    />
                  ) : (
                    line
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  )
}
