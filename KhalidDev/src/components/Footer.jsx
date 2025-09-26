const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Full-Stack Development',
    'Laravel Applications',
    'React Development',
    'Next.js Projects',
    'Odoo ERP Solutions',
    'API Development',
    'Database Design'
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/khalid',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/khalid',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/khalid',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:khalid@example.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-space-black to-dark-navy border-t border-electric-blue/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vibrant-magenta rounded-xl flex items-center justify-center">
                <span className="text-space-black font-bold text-2xl font-futuristic">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-futuristic font-bold text-soft-white">
                  Khalid <span className="text-electric-blue">Dev</span>
                </h3>
                <p className="text-soft-white/60 text-sm">Senior Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-soft-white/80 leading-relaxed mb-6 max-w-md">
              Crafting innovative web solutions with cutting-edge technologies. 
              Specializing in Laravel, React, and Next.js development to bring your ideas to life.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-lg flex items-center justify-center text-electric-blue hover:border-electric-blue/40 hover:bg-electric-blue/20 hover:text-vibrant-magenta transition-all duration-300 group"
                  title={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-futuristic font-bold text-vibrant-magenta mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-soft-white/80 hover:text-electric-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-electric-blue/40 rounded-full mr-3 group-hover:bg-electric-blue transition-colors duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-futuristic font-bold text-vibrant-magenta mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-soft-white/80 flex items-center">
                  <span className="w-2 h-2 bg-vibrant-magenta/40 rounded-full mr-3" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-electric-blue/20">
          <div className="bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-futuristic font-bold text-soft-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-soft-white/80 mb-6 max-w-2xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how we can bring your vision to life.
            </p>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-electric-blue/20 bg-space-black/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-soft-white/60 text-sm">
                © {currentYear} Khalid AIT TABADDOUT. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="text-soft-white/60 hover:text-electric-blue transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-soft-white/60 hover:text-electric-blue transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-electric-blue/20 to-vibrant-magenta/20 border border-electric-blue/30 rounded-lg flex items-center justify-center text-electric-blue hover:border-electric-blue/60 hover:bg-electric-blue/30 transition-all duration-300 group"
              title="Back to Top"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-16 w-3 h-3 bg-electric-blue rounded-full animate-float opacity-30" />
      <div className="absolute bottom-16 left-16 w-4 h-4 border border-vibrant-magenta rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} />
    </footer>
  )
}

export default Footer