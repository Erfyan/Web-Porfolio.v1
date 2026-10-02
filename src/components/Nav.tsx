import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { personalInfo } from "../data/portfolioData"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Bio", href: "#bio" },
  { label: "Tentang", href: "#about" },
  { label: "Karya", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#timeline" },
  { label: "Kontak", href: "#contact" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Simple section spy
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            return
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.substring(1)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })

      // Trigger section pulse animation
      el.classList.remove("section-pulse-active")
      void el.offsetWidth
      el.classList.add("section-pulse-active")
      setTimeout(() => {
        el.classList.remove("section-pulse-active")
      }, 1100)
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border py-2.5 shadow-lg shadow-black/10"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand with enlarged click area */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2.5 group font-mono font-bold text-lg tracking-tight text-primary px-3 py-2 -ml-2 rounded-xl hover:bg-surface-hover/60 transition-all cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
            <span className="font-sans font-semibold tracking-tight text-primary">
              {personalInfo.name.toLowerCase()}
              <span className="gradient-orange-green-text">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links with generous padded click targets */}
          <div className="hidden md:flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-2.5 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer min-h-[40px] ${
                    isActive
                      ? "text-[#10B981] font-semibold bg-surface-hover/80 shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-surface-hover/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-[#F97316] to-[#10B981] rounded-full"
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Action Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Uiverse Theme Toggle Switch */}
            <ThemeToggle />

            <div className="w-px h-4 bg-border mx-1" />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-xs font-mono font-medium text-primary bg-surface hover:border-[#10B981]/70 hover:bg-surface-hover transition-all rounded-lg group shadow-sm active:scale-95 cursor-pointer"
            >
              <span>HUBUNGI</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[#10B981] transition-colors" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-primary hover:text-[#10B981] hover:bg-surface-hover rounded-xl transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-background/98 backdrop-blur-xl border-b border-border p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2.5 font-mono">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-[#10B981] hover:bg-surface-hover rounded-xl transition-all flex items-center justify-between active:scale-[0.98] cursor-pointer"
                >
                  <span className="font-medium">/{item.label.toLowerCase()}</span>
                  <span className="text-xs text-muted-foreground opacity-40">
                    &bull;
                  </span>
                </a>
              ))}
              <div className="pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />{" "}
                  TERIMA PROYEK BARU
                </span>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-4 py-2.5 gradient-orange-green-bg text-white font-semibold rounded-lg shadow-sm cursor-pointer active:scale-95"
                >
                  HUBUNGI SAYA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

