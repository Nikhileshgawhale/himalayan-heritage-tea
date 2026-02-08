import { useState, useEffect } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setHidden(true)
      // Remove from DOM after animation completes
      setTimeout(() => setRemoved(true), 500)
    }
    
    // Check if already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback: hide after 3 seconds max
      const timeout = setTimeout(handleLoad, 3000)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timeout)
      }
    }
  }, [])

  if (removed) return null

  return (
    <div
      className={`fixed inset-0 bg-bg flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ display: hidden ? 'none' : 'flex' }}
      aria-hidden="true"
    >
      <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin-slow" />
    </div>
  )
}
