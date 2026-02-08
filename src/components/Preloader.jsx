import { useState, useEffect } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleLoad = () => setHidden(true)
    if (document.readyState === 'complete') handleLoad()
    else window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-bg flex items-center justify-center z-[9999] transition-opacity duration-500 ${hidden ? 'opacity-0 pointer-events-none invisible' : ''}`}
      aria-hidden="true"
    >
      <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin-slow" />
    </div>
  )
}
