import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

const ITEMS = [
  {
    text: 'No agency purchase required—buy & sell or purchase samples of all our teas at factory rates.',
    icon: '🏪',
  },
  {
    text: 'Investment only on products purchased from us; sell via distributorship, retailers, multi-level marketing, online, stores, restaurants, cafes, trade fairs & more.',
    icon: '🚀',
  },
  {
    text: 'Build a sustainable and scalable business that grows fast and firm in the present and future.',
    icon: '🌳',
  },
]

function EaseItem({ text, icon, index }) {
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
    <li
      ref={ref}
      className={`p-5 rounded-lg bg-surface/30 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover-lift mb-4 group ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <p className="text-muted leading-relaxed flex-1 group-hover:text-gray-800 transition-colors duration-300">
          {text}
        </p>
      </div>
    </li>
  )
}

export default function Ease() {
  return (
    <Section id="ease" alt className="relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="relative z-10">
        <SectionNum>03</SectionNum>
        <SectionTitle>Ease of Doing Business With Us</SectionTitle>
        <ul className="max-w-[680px] list-none mt-8">
          {ITEMS.map((item, i) => (
            <EaseItem key={i} {...item} index={i} />
          ))}
        </ul>
      </div>
    </Section>
  )
}
