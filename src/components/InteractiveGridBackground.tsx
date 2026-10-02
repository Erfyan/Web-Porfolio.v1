import { useEffect, useState } from "react"

export function InteractiveGridBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
        setIsInside(true)
      })
    }

    const handleMouseLeave = () => {
      setIsInside(false)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base Small Square Grid (Kotak Garis-Garis Kecil) */}
      <div className="absolute inset-0 grid-lines-pattern opacity-85" />

      {/* 2. Dynamic Cursor Light / Glow (Cahaya Mengikuti Kursor) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isInside ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, var(--glow-primary) 0%, var(--glow-secondary) 38%, transparent 72%)`,
        }}
      />

      {/* 3. Illuminated Grid Highlight (Garis Kotak Menyala di Sekitar Kursor) */}
      <div
        className="absolute inset-0 grid-lines-pattern-bright transition-opacity duration-300"
        style={{
          opacity: isInside ? 1 : 0,
          WebkitMaskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
          maskImage: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 80%)`,
        }}
      />

      {/* 4. Elegant Ambient Vignette for Depth */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-400"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 45%, var(--background) 100%)",
          opacity: 0.7,
        }}
      />
    </div>
  )
}
