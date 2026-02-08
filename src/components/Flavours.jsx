import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

const BLACK_TEA = [
  'Kangra Orthodox Black Tea',
  'Kangra First Flush Black Tea',
  'Mint, Masala, Cinnamon, Cardamom Black Tea',
  'Jasmine, Chamomile, Stevia, Tulsi, Ginger Black Tea',
  'English Breakfast, Rose, Lemon, Lemongrass',
  'Mango, Mixed Berries, Lychee, Peach, Mixed Fruit',
  'Oolong Tea, Kashmiri Kahwa, Earl Grey Tea',
]

const GREEN_TEA = [
  'Kangra Green Tea, Kangra Slimming Green Tea',
  'Mint, Cardamom, Stevia, Jasmine, Chamomile',
  'Tulsi, Ginger, Lemon, Lemongrass',
  'Mango, Mixed Berries, Lychee, Peach, Mixed Fruit',
  'Detox Green Tea, Seabuckthorn Green Tea',
]

function FlavourList({ title, items, color }) {
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
      className={`p-6 rounded-lg bg-surface/50 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover-lift ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
    >
      <h3 className={`font-display text-xl font-semibold ${color} mb-6 flex items-center gap-2`}>
        <span className="text-2xl">{color.includes('accent') ? '☕' : '🍃'}</span>
        {title}
      </h3>
      <ul className="list-none space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-muted py-2.5 px-3 text-sm border-l-2 border-gold/20 hover:border-gold/50 hover:text-gray-800 transition-all duration-300 rounded"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Flavours() {
  return (
    <Section id="flavours" alt className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="relative z-10">
        <SectionNum>08</SectionNum>
        <SectionTitle>Flavours We Offer</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <FlavourList title="Black / Regular Tea" items={BLACK_TEA} color="text-gold" />
          <FlavourList title="Green Tea" items={GREEN_TEA} color="text-accent-light" />
        </div>
      </div>
    </Section>
  )
}
