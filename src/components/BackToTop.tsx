import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 bg-surface/90 hover:bg-surface border border-border hover:border-[#10B981]/70 text-muted-foreground hover:text-primary rounded-full shadow-xl backdrop-blur-md transition-all group cursor-pointer"
        >
          <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-muted-foreground group-hover:text-[#10B981]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
