import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-16 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg via-bg-alt to-white"
        style={{
          backgroundImage: `
            linear-gradient(165deg, rgba(250,249,247,0.95) 0%, rgba(245,243,240,0.9) 100%),
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(122,155,118,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at ${mousePosition.x}% ${mousePosition.y}%, rgba(196,163,90,0.05) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tea leaf decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-5 rotate-12 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path
            d="M50 10 Q30 30 20 50 Q30 70 50 90 Q70 70 80 50 Q70 30 50 10"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5 -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path
            d="M50 10 Q30 30 20 50 Q30 70 50 90 Q70 70 80 50 Q70 30 50 10"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-[720px] mx-auto px-4 text-center z-10">
        <div className="animate-fade-in-up">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
            Clean. Trusted. Natural. Sustainable.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-800 mb-2 bg-gradient-to-r from-gray-800 via-gold to-gray-800 bg-clip-text text-transparent animate-gradient-shift">
            150-Year Tea Legacy
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="font-display text-xl md:text-2xl text-gold mb-6 tracking-wide">
            Kangra Valley • Himachal Pradesh
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-[600px] mx-auto">
            Expansion and promotion of a 150-year-old tea legacy from Kangra Valley, India. Creating
            mutual benefits in the process.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#contact"
            className="group inline-block py-4 px-10 text-sm font-medium tracking-wide bg-gold text-bg no-underline border-2 border-gold transition-all duration-300 hover:bg-transparent hover:text-gold hover:shadow-[0_0_30px_rgba(196,163,90,0.3)] hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.15em] uppercase text-muted animate-float flex flex-col items-center gap-2">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
