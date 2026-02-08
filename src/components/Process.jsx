import { useState, useEffect, useRef } from 'react'
import { Section, SectionTitle, SectionSubtitle } from './Section'

const STEPS = [
  {
    num: '01',
    title: 'Sourcing from Trusted Gardens',
    text: 'We source from our own tea estates in Kangra Valley—verified, hand-plucked, and sustainably cultivated.',
    icon: '🌱',
  },
  {
    num: '02',
    title: 'In-House Manufacturing',
    text: 'Tea is processed in our own factory with strict hygiene, retaining flavor, color, and quality.',
    icon: '🏭',
  },
  {
    num: '03',
    title: 'Quality & Packaging',
    text: 'Each batch undergoes quality checks and is packed for export and retail, ready for global distribution.',
    icon: '📦',
  },
  {
    num: '04',
    title: 'Global Distribution',
    text: 'We fulfill orders internationally with reliable logistics and dedicated support. Buy at factory rates.',
    icon: '🌍',
  },
]

function ProcessStep({ num, title, text, icon, index }) {
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
      className={`pt-6 border-t-2 border-gold/20 hover:border-gold/50 transition-all duration-300 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <span className="text-xs tracking-wider text-gold font-medium">{num}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-gray-800 mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export default function Process() {
  return (
    <Section id="process" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-alt/50 to-bg" />
      <div className="relative z-10">
        <SectionTitle>Our Work Process</SectionTitle>
        <SectionSubtitle>Precision at Every Step</SectionSubtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {STEPS.map((step, index) => (
            <ProcessStep key={step.num} {...step} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
