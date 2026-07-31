import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { FeaturedWork } from './components/sections/FeaturedWork'
import { Hero } from './components/sections/Hero'
import { HowIWork } from './components/sections/HowIWork'
import { Skills } from './components/sections/Skills'
import { StatusCard } from './components/sections/StatusCard'
import { TrustBar } from './components/sections/TrustBar'
import { SmoothScrollProvider } from './lib/smooth-scroll'

export default function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        {/* §4.5 — the card straddles the hero's bottom edge from 480px up; below
            that (§6 sm) it is a normal in-flow block instead. */}
        <div className="relative">
          <Hero />
          <div className="shell relative z-float pb-6 md:absolute md:bottom-0 md:left-1/2 md:w-full md:-translate-x-1/2 md:translate-y-[40%] md:pb-0">
            <StatusCard />
          </div>
        </div>

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
