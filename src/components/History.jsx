import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

const TIMELINE = [
  {
    year: '1960',
    text: 'Registration of Balla Tea Estate under the Tea Board of India. Factory number RC-1065.',
    icon: '🏭',
  },
  {
    year: '2012',
    text: 'Made the brand name Himalayan Heritage Tea and started growing within and outside Himachal Pradesh, encouraged by good customer reviews & support.',
    icon: '🌱',
  },
  {
    year: '2018–19',
    text: 'Awarded first prize in tea tasting competition organized by the Tea Board of India, Palampur.',
    icon: '🏆',
  },
]

function TimelineItem({ year, text, icon, index }) {
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
    <div
      ref={ref}
      className={`grid grid-cols-[100px_1fr] gap-8 py-6 border-l-2 border-gold/20 pl-6 hover:border-gold/50 transition-all duration-300 group relative ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute left-0 top-8 w-4 h-4 bg-gold rounded-full -translate-x-[9px] group-hover:scale-150 transition-transform duration-300" />
      <div className="flex items-start gap-3">
        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <span className="font-display text-2xl font-semibold text-gold">{year}</span>
      </div>
      <p className="text-muted leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        {text}
      </p>
    </div>
  )
}

export default function History() {
  return (
    <Section id="history" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="relative z-10">
        <SectionNum>05</SectionNum>
        <SectionTitle>Brand History</SectionTitle>
        <div className="mt-8">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.year} {...item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
