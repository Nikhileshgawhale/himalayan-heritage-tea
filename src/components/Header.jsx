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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-gray-800 tracking-wide no-underline hover:text-gold transition-colors duration-300 group">
          Himalayan Heritage <span className="text-accent-light font-medium group-hover:text-gold transition-colors duration-300">Wellness</span>
        </a>
        <nav
          className={`flex gap-8 max-[900px]:fixed max-[900px]:top-0 max-[900px]:right-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:flex-col max-[900px]:pt-20 max-[900px]:px-8 max-[900px]:pb-8 max-[900px]:bg-bg-alt max-[900px]:border-l border-gold/20 transition-[right] duration-300 ${
            navOpen ? 'max-[900px]:right-0' : 'max-[900px]:-right-full'
          }`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted text-sm font-medium no-underline hover:text-gold transition-colors"
              onClick={() => setNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="hidden max-[900px]:flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 z-[101] group"
          aria-label="Menu"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
    </header>
  )
}
