export interface Project {
  id: string
  title: string
  category: "Systems" | "Frontend" | "Graphics" | "Fullstack" | "Mobile"
  desc: string
  longDesc?: string
  role: string
  year: string
  tech: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  stats?: { label: string; value: string }[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface TimelineItem {
  year: string
  title: string
  role?: string
  desc: string
  tags?: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: "github" | "twitter" | "linkedin" | "mail" | "whatsapp" | "instagram" | "youtube"
}
