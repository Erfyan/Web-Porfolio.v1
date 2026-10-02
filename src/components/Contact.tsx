import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy, Send } from "lucide-react"
import { personalInfo } from "../data/portfolioData"
import { SocialDock } from "./SocialDock"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.message) return

    const messageText = `Halo Erfyan,\n\nSaya ingin berkonsultasi / mengirim pesan via website portofolio:\n\n👤 Nama: ${formData.name || "Tanpa Nama"}\n📧 Email: ${formData.email}\n\n💬 Pesan:\n${formData.message}`
    const encodedText = encodeURIComponent(messageText)
    const waUrl = `https://wa.me/6287842166300?text=${encodedText}`

    window.open(waUrl, "_blank", "noopener,noreferrer")

    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setFormData({ name: "", email: "", message: "" })
    }, 4500)
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-border mt-12 sm:mt-24 relative overflow-hidden"
    >
      {/* Soothing organic ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,rgba(16,185,129,0.06)_50%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-surface border border-border rounded-sm font-mono text-[10px] sm:text-[11px] text-muted-foreground shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-primary font-medium">KONSULTASI &amp; PROYEK</span>
            <span className="text-border">/</span>
            <span className="text-[#10B981] font-semibold">SIAP MENERIMA ORDERAN</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight"
          >
            Mari bangun sesuatu yang{" "}
            <span className="font-serif italic font-normal gradient-orange-green-text">
              luar biasa
            </span>
            .
          </motion.h2>

          {/* Copyable Email Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-3"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-lg sm:text-2xl md:text-3xl font-mono text-primary hover:text-[#10B981] transition-colors underline decoration-border underline-offset-8 break-all sm:break-normal"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 border border-border bg-surface hover:border-[#10B981]/50 text-muted-foreground hover:text-primary rounded-sm transition-colors flex items-center gap-2 font-mono text-xs shadow-sm cursor-pointer min-h-[38px] active:scale-95"
              title="Salin email ke clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Quick Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bg-surface border border-border p-4 sm:p-6 md:p-8 rounded-sm shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] gradient-orange-green-bg" />

          <div className="font-mono text-xs text-muted-foreground mb-4 sm:mb-6 flex items-center justify-between">
            <span className="tracking-wider uppercase">// PESAN LANGSUNG</span>
            <span className="text-emerald-500 flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              STATUS: SIAP
            </span>
          </div>

          {formSent ? (
            <div className="py-8 sm:py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-mono text-primary">
                Pesan Berhasil Terkirim
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Terima kasih telah menghubungi. Saya akan membalas langsung ke email Anda secepatnya.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block font-mono text-[11px] sm:text-xs text-muted-foreground mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="misal: Elon Musk"
                    className="w-full bg-background border border-border px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-sans text-primary rounded-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/25 transition-all placeholder:text-muted-foreground/40 shadow-inner min-h-[42px]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] sm:text-xs text-muted-foreground mb-1.5">
                    Email Anda
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="emailKamu@gmail.com"
                    className="w-full bg-background border border-border px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-sans text-primary rounded-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/25 transition-all placeholder:text-muted-foreground/40 shadow-inner min-h-[42px]"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[11px] sm:text-xs text-muted-foreground mb-1.5">
                  Detail / Deskripsi Proyek
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Jelaskan kebutuhan aplikasi, Desain, lini waktu, atau ruang lingkup proyek Anda..."
                  className="w-full bg-background border border-border px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-sans text-primary rounded-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/25 transition-all resize-none placeholder:text-muted-foreground/40 shadow-inner"
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 font-mono text-xs font-semibold gradient-orange-green-bg hover:brightness-110 text-white rounded-sm inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/10 cursor-pointer min-h-[44px] active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" /> Kirim via WhatsApp
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Social Dock from Uiverse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col items-center justify-center gap-3 pt-4 sm:pt-6"
        >
          <span className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider text-center">
            Hubungi Di Berbagai Platform
          </span>
          <SocialDock />
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-28 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] sm:text-xs text-muted-foreground gap-3 sm:gap-4 text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Hak Cipta Dilindungi &bull;
          Dirancang dengan Presisi &amp; Harmoni
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <span>TENANG &bull; PERFORMA TINGGI &bull; AKSESIBEL</span>
        </div>
      </div>
    </section>
  )
}
