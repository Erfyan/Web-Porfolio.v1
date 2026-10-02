import React from "react"

interface SocialItem {
  id: string
  name: string
  href: string
  gradient: string
  borderColor: string
  icon: React.ReactNode
}

export function SocialDock() {
  const items: SocialItem[] = [
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/Erfyan",
      gradient: "from-stone-700 to-stone-900",
      borderColor: "border-stone-600/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/er-fyan-2164403b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      gradient: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://wa.me/6287842166300",
      gradient: "from-emerald-600 to-green-700",
      borderColor: "border-emerald-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.163 5.286-1.386c1.455.794 3.09 1.213 4.783 1.214h.004c5.505 0 9.989-4.478 9.99-9.984 0-2.668-1.039-5.176-2.926-7.062a9.927 9.927 0 0 0-7.054-2.927zm5.706 14.364c-.237.668-1.382 1.275-1.916 1.341-.497.062-1.144.093-3.69-0.96-3.257-1.347-5.352-4.667-5.514-4.885-.162-.218-1.317-1.754-1.317-3.345 0-1.591.832-2.373 1.129-2.695.297-.322.648-.403.864-.403.216 0 .432.003.621.012.2.008.468-.076.73.552.27.649.918 2.242.999 2.404.081.162.135.351.027.567-.108.216-.162.351-.324.54-.162.189-.341.422-.486.567-.162.162-.33.337-.142.66.189.324.84 1.387 1.802 2.244 1.237 1.103 2.28 1.444 2.604 1.606.324.162.513.135.702-.081.189-.216.81-.945 1.026-1.269.216-.324.432-.27.73-.162.297.108 1.89.891 2.214 1.053.324.162.54.243.621.378.081.135.081.783-.156 1.451z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      name: "YouTube",
      href: "https://youtube.com/erfyan_09",
      gradient: "from-red-600 to-red-800",
      borderColor: "border-red-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://instagram.com/errv_9",
      gradient: "from-purple-600 via-pink-600 to-amber-500",
      borderColor: "border-pink-500/50",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative inline-block max-w-full">
      {/* Hidden SVG Squircle Clip Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      {/* Glass Dock Background Container */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-xl rounded-2xl border border-border shadow-xl" />

      {/* Dock Icons Row */}
      <div className="relative flex items-end gap-x-1.5 sm:gap-x-2.5 p-1.5 sm:p-2.5 max-w-full overflow-x-auto">
        {items.map((item) => (
          <div key={item.id} className="relative group flex-shrink-0">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              style={{ clipPath: "url(#squircleClip)" }}
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg border ${item.borderColor} cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl active:scale-95`}
            >
              {item.icon}
            </a>
            {/* Tooltip */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-surface border border-border rounded font-mono text-[10px] text-primary opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg whitespace-nowrap z-30">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
