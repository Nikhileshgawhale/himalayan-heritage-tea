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
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (navOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
      // Close on escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setNavOpen(false)
        }
      }
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-3 md:py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-gray-800 tracking-wide no-underline hover:text-gold transition-colors duration-300 group">
          Himalayan Heritage <span className="text-accent-light font-medium group-hover:text-gold transition-colors duration-300">Wellness</span>
        </a>
        {/* Mobile menu overlay */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[101] max-[900px]:block hidden"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setNavOpen(false)
            }}
            onTouchStart={(e) => {
              e.preventDefault()
              setNavOpen(false)
            }}
            aria-hidden="true"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          />
        )}
        
        <nav
          className={`flex gap-8 max-[900px]:fixed max-[900px]:top-0 max-[900px]:right-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:flex-col max-[900px]:pt-16 max-[900px]:px-6 max-[900px]:pb-8 max-[900px]:bg-bg-alt max-[900px]:border-l border-gold/20 max-[900px]:z-[102] max-[900px]:shadow-2xl transition-[right] duration-300 ${
            navOpen ? 'max-[900px]:right-0' : 'max-[900px]:-right-full'
          }`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setNavOpen(false)
            }}
            className="max-[900px]:block hidden absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-800 hover:text-gold hover:bg-gold/10 rounded-full transition-all z-[103] cursor-pointer touch-manipulation"
            aria-label="Close menu"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted text-sm font-medium no-underline hover:text-gold transition-colors py-2"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setNavOpen(false)
                // Small delay to allow menu to close smoothly
                setTimeout(() => {
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
                }, 100)
              }}
              onTouchStart={(e) => {
                e.stopPropagation()
              }}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="hidden max-[900px]:flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 z-[101] group touch-manipulation"
          aria-label="Menu"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setNavOpen((o) => !o)
          }}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
    </header>
  )
}
