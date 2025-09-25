import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'Full-Stack Developer',
    'Laravel Expert',
    'React Specialist',
    'Next.js Developer',
    'Odoo Developer',
    'UI/UX Enthusiast'
  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const shouldDelete = isDeleting
    
    const timeout = setTimeout(() => {
      if (!shouldDelete && displayText === currentTitle) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (shouldDelete && displayText === '') {
        // Move to next title
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      } else if (shouldDelete) {
        // Delete character
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
      } else {
        // Add character
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
      }
    }, shouldDelete ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-8 animate-float">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-vibrant-magenta/20 border border-electric-blue/30 rounded-full text-electric-blue font-medium text-sm uppercase tracking-wider">
              Welcome to the Future
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-futuristic font-black mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
            Khalid
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-vibrant-magenta to-electric-blue">
              AIT TABADDOUT
            </span>
          </h1>

          {/* Dynamic Title */}
          <div className="mb-8 animate-float" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-4xl font-futuristic text-soft-white mb-2">
              Senior{' '}
              <span className="text-electric-blue text-glow">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-soft-white/80 max-w-2xl mx-auto leading-relaxed">
              Crafting cutting-edge web experiences with Laravel, React, and Next.js. 
              Transforming ideas into powerful, scalable digital solutions.
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="mb-12 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center items-center space-x-8 mb-8">
              {[
                { name: 'Laravel', color: 'text-red-500' },
                { name: 'React', color: 'text-blue-400' },
                { name: 'Next.js', color: 'text-soft-white' },
                { name: 'Odoo', color: 'text-purple-400' },
                { name: 'Node.js', color: 'text-green-500' },
                { name: 'TypeScript', color: 'text-blue-600' }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 flex items-center justify-center ${tech.color} hover:scale-110 transition-transform duration-300`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <span className="text-2xl font-bold">{tech.name[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => scrollToSection('#projects')}
              className="btn-primary group"
            >
              View My Work
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-outline group"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
            </div>
            <p className="text-electric-blue text-sm mt-2 font-medium">Scroll Down</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-electric-blue rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-vibrant-magenta rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-electric-blue rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-10 w-5 h-5 border border-vibrant-magenta rounded-full animate-float opacity-50" style={{ animationDelay: '2.5s' }} />
    </section>
  )
}

export default Hero