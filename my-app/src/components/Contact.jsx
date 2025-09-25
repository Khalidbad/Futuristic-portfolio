import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'khalid@example.com',
      link: 'mailto:khalid@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Morocco, Casablanca',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/khalid',
      link: 'https://linkedin.com/in/khalid'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/khalid',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/khalid',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/khalid',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Portfolio',
      url: 'https://khalid-portfolio.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-6">
            Get In <span className="text-electric-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-vibrant-magenta mx-auto mb-8" />
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
            <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
              <span className="mr-3">💌</span>
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-soft-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-navy border border-electric-blue/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-soft-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-navy border border-electric-blue/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-soft-white font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-navy border border-electric-blue/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Project Subject"
                />
              </div>
              
              <div>
                <label className="block text-soft-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-navy border border-electric-blue/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-space-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
                <span className="mr-3">📞</span>
                Contact Info
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-electric-blue/5 to-vibrant-magenta/5 border border-electric-blue/10 rounded-xl hover:border-electric-blue/30 hover:bg-electric-blue/10 transition-all duration-300 group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-futuristic font-semibold text-electric-blue group-hover:text-glow transition-all duration-300">
                        {info.title}
                      </h4>
                      <p className="text-soft-white/80">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-space-black to-dark-navy border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-2xl font-futuristic font-bold text-vibrant-magenta mb-8 flex items-center">
                <span className="mr-3">🌐</span>
                Follow Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-xl hover:border-electric-blue/40 hover:bg-electric-blue/20 transition-all duration-300 group"
                  >
                    <div className="text-electric-blue group-hover:text-vibrant-magenta transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="font-medium text-soft-white group-hover:text-electric-blue transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-electric-blue/10 to-vibrant-magenta/10 border border-electric-blue/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-xl font-futuristic font-bold text-electric-blue">
                  Available for Projects
                </h3>
              </div>
              <p className="text-soft-white/80 leading-relaxed">
                I'm currently accepting new projects and collaborations. 
                Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-8 w-4 h-4 bg-electric-blue rounded-full animate-float opacity-40" />
      <div className="absolute bottom-32 left-8 w-6 h-6 border border-vibrant-magenta rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default Contact