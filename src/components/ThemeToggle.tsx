import React from "react"
import { useTheme } from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === "light"

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Moon icon for dark mode */}
      <Moon
        className={`w-3.5 h-3.5 transition-colors duration-300 ${
          !isLight
            ? "text-[#F97316]"
            : "text-muted-foreground/60 hover:text-muted-foreground"
        }`}
      />

      {/* Uiverse Switch by gharsh11032000 */}
      <label
        className="theme-switch"
        aria-label="Toggle dark and light theme"
        title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      >
        <input
          type="checkbox"
          checked={isLight}
          onChange={toggleTheme}
          aria-checked={isLight}
        />
        <span className="theme-slider" />
      </label>

      {/* Sun icon for light mode */}
      <Sun
        className={`w-3.5 h-3.5 transition-colors duration-300 ${
          isLight
            ? "text-[#10B981]"
            : "text-muted-foreground/60 hover:text-muted-foreground"
        }`}
      />
    </div>
  )
}
