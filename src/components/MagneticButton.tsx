import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  onClick?: (e: React.MouseEvent) => void
  href?: string
  target?: string
  rel?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = cn(
    "relative px-6 py-3 font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-300 overflow-hidden group inline-flex items-center justify-center gap-2.5 select-none cursor-pointer rounded-sm shadow-sm",
    variant === "primary" &&
      "gradient-orange-green-bg text-white hover:brightness-110 shadow-md shadow-emerald-900/10 active:scale-98",
    variant === "secondary" &&
      "bg-surface text-primary border border-border hover:border-[#10B981]/60 hover:bg-surface-hover",
    variant === "outline" &&
      "text-primary border border-border hover:border-[#F97316]/60 bg-transparent hover:bg-surface-hover",
    variant === "ghost" &&
      "text-muted-foreground hover:text-primary hover:bg-surface-hover",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  )

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  )

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
        whileTap={{ scale: 0.97 }}
        className={baseStyles}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={baseStyles}
    >
      {content}
    </motion.button>
  )
}
