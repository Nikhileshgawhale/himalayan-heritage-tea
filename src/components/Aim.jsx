import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle, SectionDesc } from './Section'

export default function Aim() {
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
    <Section id="aim" alt className="relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -ml-48 -mb-48" />
      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionNum>01</SectionNum>
        <SectionTitle>Our Aim</SectionTitle>
        <div className="space-y-4">
          <div className="p-6 rounded-lg bg-surface/30 border border-gold/10 backdrop-blur-sm">
            <SectionDesc>
              Expansion and promotion of a 150-year-old tea legacy and cultivation of Kangra Valley,
              Himachal Pradesh, India. Creating mutual benefits in the process.
            </SectionDesc>
          </div>
          <SectionDesc>
            Kangra tea is known for its natural color and flavor around the world. The unique
            characteristics of our tea are attributed to the geographical convenience of the region.
          </SectionDesc>
        </div>
      </div>
    </Section>
  )
}
