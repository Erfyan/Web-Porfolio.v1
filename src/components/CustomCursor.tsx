import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Detect touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest(
          'a, button, [role="button"], input, textarea, select, .interactive, .theme-switch',
        )
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  if (isTouchDevice || !isVisible) {
    return null
  }

  return (
    <>
      {/* Precision Center Pin - Warm Orange */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#F97316] rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
      />

      {/* Trailing Ring - Calming Green on Hover */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99] border transition-colors duration-200"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? "rgba(16, 185, 129, 0.8)"
            : "rgba(249, 115, 22, 0.35)",
          backgroundColor: isHovering
            ? "rgba(16, 185, 129, 0.08)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.35 }}
      />
    </>
  )
}