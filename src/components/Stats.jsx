import { useState, useEffect, useRef } from 'react'
import { Section } from './Section'

const STATS = [
  { num: 150, suffix: '+', label: 'Years of Legacy' },
  { num: 100, suffix: '%', label: 'Authentic Hand-Plucked' },
  { num: 90, suffix: '%', label: 'In-House Process' },
  { num: 5900, suffix: '+', label: 'Tea Gardens' },
]

function AnimatedCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="p-6 hover-lift scroll-reveal">
      <span className="block font-display text-4xl md:text-5xl font-semibold text-gold mb-2 counter-animate">
        {hasAnimated ? count.toLocaleString() : '0'}{suffix}
      </span>
      <span className="text-sm text-muted uppercase tracking-wider">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <Section className="py-20 bg-gradient-to-b from-bg via-bg-alt to-bg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {STATS.map(({ num, suffix, label }) => (
          <AnimatedCounter key={label} value={num} suffix={suffix} label={label} />
        ))}
      </div>
    </Section>
  )
}
