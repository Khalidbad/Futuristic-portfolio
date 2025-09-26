const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' }
  ]

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Corp',
      period: '2022 - Present',
      description: 'Leading development of enterprise-level applications using Laravel, React, and Next.js. Architecting scalable solutions and mentoring junior developers.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications, implemented CI/CD pipelines, and optimized application performance.'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces using React and modern CSS frameworks. Collaborated with design teams to bring concepts to life.'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-6">
            About <span className="text-electric-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-vibrant-magenta mx-auto mb-8" />
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that push the boundaries of what's possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-6">My Journey</h3>
              <p className="text-soft-white/90 leading-relaxed mb-6">
                 I specialize in creating 
                robust, scalable web applications that deliver exceptional user experiences. My expertise 
                spans across modern technologies including <span className="text-electric-blue font-semibold">Laravel</span>, 
                <span className="text-electric-blue font-semibold">React</span>, 
                <span className="text-electric-blue font-semibold">Next.js</span> ,and <br></br>
                <span className="text-electric-blue font-semibold">Odoo</span>.
              </p>
              <p className="text-soft-white/90 leading-relaxed mb-6">
                I'm passionate about clean code, innovative solutions, and staying at the forefront 
                of web development trends. Every project is an opportunity to push boundaries and 
                create something extraordinary.
              </p>
              
              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Backend Architecture',
                  'Frontend Development', 
                  'Database Design',
                  'API Development',
                  'Performance Optimization',
                  'Team Leadership'
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full" />
                    <span className="text-soft-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-gradient-to-br from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300 group"
                >
                  <div className="text-3xl font-futuristic font-bold text-electric-blue mb-2 group-hover:text-glow transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-soft-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Column - Education & Professional Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8">Parcours Éducatif & Professionnel</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-vibrant-magenta" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vibrant-magenta rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-space-black font-bold text-xs">2025</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-futuristic font-bold text-soft-white mb-2">
                      Licence Pro Génie Informatique
                    </h4>
                    <p className="text-electric-blue font-semibold mb-2">École High Tech Rabat • 2025-2026</p>
                    <p className="text-soft-white/80 leading-relaxed">
                      Actuellement étudiant en licence professionnelle, approfondissant mes connaissances 
                      en génie informatique et technologies avancées.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start space-x-6">
                   <div className="w-12 h-12 bg-gradient-to-br from-vibrant-magenta to-electric-blue rounded-full flex items-center justify-center flex-shrink-0">
                     <span className="text-space-black font-bold text-xs">2025</span>
                   </div>
                   <div className="flex-1">
                     <h4 className="text-xl font-futuristic font-bold text-soft-white mb-2">
                       Stage en Développement Web (6 mois - En cours)
                     </h4>
                     <p className="text-electric-blue font-semibold mb-2">BRAMS • 2025</p>
                     <p className="text-soft-white/80 leading-relaxed">
                       Développement de projets d'interfaces utilisateur et création d'une application web complète 
                       avec React/Next.js en frontend et Odoo en backend. Création d'un module complet en Python 
                       pour étendre les fonctionnalités d'Odoo.
                     </p>
                   </div>
                 </div>
                 
                 <div className="relative flex items-start space-x-6">
                   <div className="w-12 h-12 bg-gradient-to-br from-electric-blue/90 to-vibrant-magenta/90 rounded-full flex items-center justify-center flex-shrink-0">
                     <span className="text-space-black font-bold text-xs">2024</span>
                   </div>
                   <div className="flex-1">
                     <h4 className="text-xl font-futuristic font-bold text-soft-white mb-2">
                       Stage DevSol Communication (1 mois)
                     </h4>
                     <p className="text-electric-blue font-semibold mb-2">DevSol Communication • 2024</p>
                     <p className="text-soft-white/80 leading-relaxed">
                       Développement d'une application complète de gestion de restaurant utilisant Laravel. 
                       Implémentation des fonctionnalités de commande, gestion des menus, et système de réservation.
                     </p>
                   </div>
                 </div>
                
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue/80 to-vibrant-magenta/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-space-black font-bold text-xs">2022</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-futuristic font-bold text-soft-white mb-2">
                      Formation Full Stack Web
                    </h4>
                    <p className="text-electric-blue font-semibold mb-2">Centre Mixte Formation Professionnelle • 2022-2024</p>
                    <p className="text-soft-white/80 leading-relaxed">
                      Diplôme de Technicien Spécialisé en développement web full-stack. 
                      Maîtrise des technologies modernes et méthodologies de développement.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue/60 to-vibrant-magenta/60 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-space-black font-bold text-xs">2021</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-futuristic font-bold text-soft-white mb-2">
                      Études en Biologie
                    </h4>
                    <p className="text-electric-blue font-semibold mb-2">Université Ibn Zohr • 2021-2022</p>
                    <p className="text-soft-white/80 leading-relaxed">
                      Formation universitaire en biologie qui m'a apporté une approche analytique 
                      et méthodique, compétences transférables au développement logiciel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-futuristic font-bold text-soft-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-soft-white/80 mb-6">
              Let's collaborate and bring your vision to life with cutting-edge technology
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-6 h-6 border border-vibrant-magenta rounded-full animate-float opacity-30" />
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-electric-blue rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default About