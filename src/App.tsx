import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { FeaturedWork } from './components/sections/FeaturedWork'
import { Hero } from './components/sections/Hero'
import { HowIWork } from './components/sections/HowIWork'
import { Skills } from './components/sections/Skills'
import { TrustBar } from './components/sections/TrustBar'
import { SmoothScrollProvider } from './lib/smooth-scroll'

export default function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        {/* §4.7 moved the status card inside the hero, beside the portrait —
            it is no longer a full-width band straddling the section boundary. */}
        <Hero />

        <TrustBar />
        <HowIWork />
        <FeaturedWork />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  )
}
