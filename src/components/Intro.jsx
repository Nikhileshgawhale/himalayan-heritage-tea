import { useState, useEffect, useRef } from 'react'
import { Section, SectionLabel, SectionTitle, SectionSubtitle } from './Section'

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl -mr-32 -mt-32" />
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel>From Soil to Cup</SectionLabel>
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-gray-800 mb-2 bg-gradient-to-r from-gray-800 to-gold bg-clip-text text-transparent">
          Pure Himalayan Reach
        </h3>
        <SectionSubtitle>Farming Roots. Global Standards.</SectionSubtitle>
        <p className="text-muted max-w-[640px] text-lg leading-relaxed">
          Kangra tea is known for its natural color and flavor around the world. The unique
          characteristics of our tea are attributed to the geographical convenience of the region.
        </p>
      </div>
    </Section>
  )
}
