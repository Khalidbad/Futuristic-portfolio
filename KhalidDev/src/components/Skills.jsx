import { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: 'Laravel', level: 95, category: 'Backend' },
    { name: 'React', level: 92, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'Python', level: 80, category: 'Language' },
    { name: 'Odoo', level: 90, category: 'Backend' },

    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'PHP', level: 93, category: 'Language' },
    { name: 'JavaScript', level: 95, category: 'Language' },
    { name: 'MySQL', level: 87, category: 'Database' },
    // { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Docker', level: 50, category: 'DevOps' },
    { name: 'AWS', level: 50, category: 'Cloud' }
  ]

  const categories = {
    'Frontend': { color: 'electric-blue', icon: '🎨' },
    'Backend': { color: 'vibrant-magenta', icon: '⚙️' },
    'Language': { color: 'electric-blue', icon: '💻' },
    'Database': { color: 'vibrant-magenta', icon: '🗄️' },
    'DevOps': { color: 'electric-blue', icon: '🚀' },
    'Cloud': { color: 'vibrant-magenta', icon: '☁️' }
  }

  const tools = [
    'VS Code', 'Git', 'Postman', 'Figma', 'Photoshop',
    'Webpack', 'Vite', 'Composer', 'NPM', 'Yarn',
    'Redis', 'Nginx', 'Apache', 'Linux', 'Windows'
  ]

  const SkillBar = ({ skill, index }) => {
    return (
      <div className="mb-6 group">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{categories[skill.category]?.icon}</span>
            <span className="font-futuristic font-semibold text-soft-white group-hover:text-electric-blue transition-colors duration-300">
              {skill.name}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full bg-${categories[skill.category]?.color}/20 text-${categories[skill.category]?.color} border border-${categories[skill.category]?.color}/30`}>
              {skill.category}
            </span>
          </div>
          <span className="text-electric-blue font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-dark-navy rounded-full h-3 border border-electric-blue/20 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-electric-blue to-vibrant-magenta rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-6">
            Technical <span className="text-electric-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-vibrant-magenta mx-auto mb-8" />
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Mastering the latest technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
                <span className="mr-3">💡</span>
                Core Technologies
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Skills Categories & Tools */}
          <div className="space-y-8">
            {/* Skill Categories */}
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
                <span className="mr-3">🎯</span>
                Expertise Areas
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(categories).map(([category, config]) => (
                  <div 
                    key={category}
                    className={`bg-gradient-to-br from-${config.color}/10 to-${config.color}/5 border border-${config.color}/20 rounded-xl p-4 hover:border-${config.color}/40 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="text-2xl mb-2">{config.icon}</div>
                    <h4 className={`font-futuristic font-bold text-${config.color} group-hover:text-glow transition-all duration-300`}>
                      {category}
                    </h4>
                    <p className="text-soft-white/60 text-sm mt-1">
                      {technicalSkills.filter(skill => skill.category === category).length} skills
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
                <span className="mr-3">🛠️</span>
                Tools & Platforms
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-full text-soft-white hover:border-electric-blue/40 hover:text-electric-blue transition-all duration-300 cursor-pointer text-sm font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning & Growth */}
            <div className="bg-gradient-to-br from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-2xl p-8">
              <h3 className="text-xl font-futuristic font-bold text-electric-blue mb-4 flex items-center">
                <span className="mr-3">📚</span>
                Continuous Learning
              </h3>
              <p className="text-soft-white/80 leading-relaxed mb-4">
                Always exploring new technologies and methodologies to stay ahead of the curve.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI/ML Integration', 'Web3 Technologies', 'Microservices', 'GraphQL'].map((topic) => (
                  <span 
                    key={topic}
                    className="px-3 py-1 bg-vibrant-magenta/20 border border-vibrant-magenta/30 rounded-full text-vibrant-magenta text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-8 w-3 h-3 bg-electric-blue rounded-full animate-float opacity-40" />
      <div className="absolute bottom-32 right-8 w-5 h-5 border border-vibrant-magenta rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-16 w-2 h-2 bg-vibrant-magenta rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Skills