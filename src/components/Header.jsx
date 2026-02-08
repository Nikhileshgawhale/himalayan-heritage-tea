import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#aim', label: 'Our Aim' },
  { href: '#about', label: 'About' },
  { href: '#tea-types', label: 'Tea Types' },
  { href: '#flavours', label: 'Flavours' },
  { href: '#history', label: 'History' },
  { href: '#process', label: 'Process' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-3 md:py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-xl font-semibold text-gray-800 tracking-wide no-underline hover:text-gold transition-colors duration-300 group">
          Himalayan Heritage <span className="text-accent-light font-medium group-hover:text-gold transition-colors duration-300">Wellness</span>
        </a>
        
        <nav className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted text-xs md:text-sm font-medium no-underline hover:text-gold transition-colors py-1 md:py-0"
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
