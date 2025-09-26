import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParallaxBackground from './components/ParallaxBackground'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for smooth entrance animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-space-black overflow-x-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Main Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <Projects /> */}
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
