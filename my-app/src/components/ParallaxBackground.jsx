import { useEffect, useRef } from 'react'

const ParallaxBackground = () => {
  const starsRef = useRef(null)
  const nebulaRef = useRef(null)
  const circuitRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      const rate2 = scrolled * -0.3
      const rate3 = scrolled * -0.1

      if (starsRef.current) {
        starsRef.current.style.transform = `translateY(${rate}px)`
      }
      if (nebulaRef.current) {
        nebulaRef.current.style.transform = `translateY(${rate2}px)`
      }
      if (circuitRef.current) {
        circuitRef.current.style.transform = `translateY(${rate3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Generate random stars
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 3
    }))
  }

  const stars = generateStars(150)
  const shootingStars = generateStars(5)

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      {/* Deep Space Stars Layer */}
      <div 
        ref={starsRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{ zIndex: 1 }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-soft-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Nebula Clouds Layer */}
      <div 
        ref={nebulaRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{ zIndex: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-blue/10 to-transparent rounded-full blur-3xl animate-nebula" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-vibrant-magenta/10 to-transparent rounded-full blur-3xl animate-nebula" style={{ animationDelay: '10s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-electric-blue/5 to-vibrant-magenta/5 rounded-full blur-2xl animate-nebula" style={{ animationDelay: '20s' }} />
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 3 }}>
        {shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.animationDelay * 2}s`,
              boxShadow: '0 0 6px #00ffff, 0 0 12px #00ffff'
            }}
          >
            <div className="absolute w-20 h-0.5 bg-gradient-to-r from-electric-blue to-transparent -translate-y-0.5" />
          </div>
        ))}
      </div>

      {/* Circuit Board Lines Layer */}
      <div 
        ref={circuitRef}
        className="absolute inset-0 w-full h-[120vh] opacity-20"
        style={{ zIndex: 4 }}
      >
        {/* Horizontal circuit lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-magenta to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Vertical circuit lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-vibrant-magenta to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Circuit nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-glow" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-vibrant-magenta rounded-full animate-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-electric-blue rounded-full animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-space-black/50 via-transparent to-space-black/80"
        style={{ zIndex: 5 }}
      />
    </div>
  )
}

export default ParallaxBackground