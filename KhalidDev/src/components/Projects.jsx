import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Laravel backend, React frontend, and advanced payment integration.',
      category: 'Full-Stack',
      technologies: ['Laravel', 'React', 'MySQL', 'Stripe', 'Redis'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with Next.js and WebSocket integration.',
      category: 'Frontend',
      technologies: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring capabilities.',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      category: 'Frontend',
      technologies: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Complete social media platform with real-time messaging and content sharing.',
      category: 'Full-Stack',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'WebRTC'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
       id: 6,
       title: 'Application de Gestion Restaurant',
       description: 'Système complet de gestion de restaurant développé avec Laravel. Fonctionnalités de commande en ligne, gestion des menus, système de réservation et tableau de bord administrateur.',
       category: 'Backend',
       technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
       image: '/api/placeholder/600/400',
       liveUrl: '#',
       githubUrl: '#',
       featured: true
     },
     {
       id: 7,
       title: 'Module Odoo Personnalisé',
       description: 'Développement d\'un module complet pour Odoo avec interface React/Next.js. Extension des fonctionnalités ERP avec des workflows personnalisés et intégration API.',
       category: 'Fullstack',
       technologies: ['Odoo', 'Python', 'React', 'Next.js', 'PostgreSQL'],
       image: '/api/placeholder/600/400',
       liveUrl: '#',
       githubUrl: '#',
       featured: true
     },
     {
       id: 8,
       title: 'Enterprise ERP System',
       description: 'Complete Odoo ERP implementation with custom modules for inventory management, CRM, accounting, and HR. Integrated with third-party APIs and custom workflows.',
       category: 'Backend',
       technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML', 'JavaScript'],
       image: '/api/placeholder/600/400',
       liveUrl: '#',
       githubUrl: '#',
       featured: false
     },
    {
      id: 7,
      title: 'REST API Framework',
      description: 'Scalable REST API framework with automated documentation and testing suite.',
      category: 'Backend',
      technologies: ['PHP', 'Laravel', 'Swagger', 'PHPUnit'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id

    return (
      <div 
        className={`group relative bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl overflow-hidden hover:border-electric-blue/40 transition-all duration-500 transform hover:-translate-y-2 ${
          project.featured ? 'lg:col-span-2' : ''
        }`}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Project Image */}
        <div className="relative h-64 bg-gradient-to-br from-electric-blue/10 to-vibrant-magenta/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-vibrant-magenta/20 flex items-center justify-center">
            <div className="text-6xl opacity-30">🚀</div>
          </div>
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-80' : 'opacity-40'
          }`} />
          
          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <a 
              href={project.liveUrl}
              className="w-10 h-10 bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/30 rounded-full flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-space-black transition-all duration-300"
              title="Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href={project.githubUrl}
              className="w-10 h-10 bg-vibrant-magenta/20 backdrop-blur-sm border border-vibrant-magenta/30 rounded-full flex items-center justify-center text-vibrant-magenta hover:bg-vibrant-magenta hover:text-space-black transition-all duration-300"
              title="View Code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gradient-to-r from-electric-blue to-vibrant-magenta text-space-black text-xs font-bold rounded-full">
                FEATURED
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-futuristic font-bold text-soft-white group-hover:text-electric-blue transition-colors duration-300">
              {project.title}
            </h3>
            <span className="px-2 py-1 bg-vibrant-magenta/20 border border-vibrant-magenta/30 rounded-full text-vibrant-magenta text-xs font-medium">
              {project.category}
            </span>
          </div>
          
          <p className="text-soft-white/80 leading-relaxed mb-4 text-sm">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-electric-blue/10 border border-electric-blue/20 rounded text-electric-blue text-xs font-medium hover:bg-electric-blue/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links */}
          <div className="flex space-x-4">
            <a 
              href={project.liveUrl}
              className="flex-1 btn-primary text-center text-sm py-2"
            >
              Live Demo
            </a>
            <a 
              href={project.githubUrl}
              className="flex-1 btn-outline text-center text-sm py-2"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-6">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-vibrant-magenta mx-auto mb-8" />
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge development work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-electric-blue to-vibrant-magenta text-space-black'
                  : 'bg-transparent border border-electric-blue/30 text-electric-blue hover:border-electric-blue/60 hover:bg-electric-blue/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-futuristic font-bold text-soft-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-soft-white/80 mb-6">
              Let's discuss how we can bring your ideas to life with modern technology
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Start Collaboration
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 right-12 w-4 h-4 bg-vibrant-magenta rounded-full animate-float opacity-40" />
      <div className="absolute bottom-40 left-12 w-6 h-6 border border-electric-blue rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default Projects