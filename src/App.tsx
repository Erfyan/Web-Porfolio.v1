import { ThemeProvider } from "./context/ThemeContext"
import { CustomCursor } from "./components/CustomCursor"
import { InteractiveGridBackground } from "./components/InteractiveGridBackground"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Bio } from "./components/Bio"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Timeline } from "./components/Timeline"
import { Contact } from "./components/Contact"
import { BackToTop } from "./components/BackToTop"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-primary selection:bg-[#10B981] selection:text-white relative transition-colors duration-400">
        {/* Dynamic Small Square Grid & Cursor Glow Spotlight */}
        <InteractiveGridBackground />

        {/* Dynamic Custom Cursor */}
        <CustomCursor />

        {/* Sticky Navigation with Theme Switch */}
        <Nav />

        {/* Main Page Content */}
        <main id="main-content" className="relative z-10">
          <Hero />
          <Bio />
          <About />
          <Projects />
          <Skills />
          <Timeline />
        </main>

        {/* Contact & Footer Section */}
        <div className="relative z-10">
          <Contact />
        </div>

        {/* Scroll to Top Trigger */}
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
