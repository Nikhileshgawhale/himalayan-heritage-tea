import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

const CARDS = [
  {
    text: 'Tea is part of a $10-billion industry, the second most popular drink in the world after water, and is expected to grow steadily. The trend of natural and healthy lifestyle has witnessed 200% growth in recent years.',
    highlight: false,
    icon: '📈',
  },
  {
    text: 'As we are the only owners of the tea estates, we manufacture tea in our own factory assuring the best quality and market-friendly prices. There are no middlemen—we provide tea at the best market price ensuring optimum profit sharing.',
    highlight: false,
    icon: '🏭',
  },
  {
    text: '30%–50% profit potential in our business relationship, with nearly 90% of the process in-house at effective cost and low expenses. We are willing to provide great profit sharing without compromising quality.',
    highlight: true,
    icon: '💰',
  },
]

function ProposalCard({ text, highlight, icon, index }) {
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
      className={`p-7 rounded-lg border transition-all duration-300 hover-lift glow-gold group relative overflow-hidden ${
        highlight
          ? 'border-gold/50 bg-gold/10'
          : 'border-gold/20 bg-surface'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative z-10">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <p
          className={`text-sm leading-relaxed ${
            highlight ? 'text-gray-800' : 'text-muted'
          }`}
        >
          {highlight ? (
            <>
              <strong className="text-gold">30%–50% profit potential</strong> in our business relationship, with nearly{' '}
              <strong className="text-gold">90% of the process in-house</strong> at effective cost and low expenses.
              We are willing to provide great profit sharing without compromising quality.
            </>
          ) : (
            text
          )}
        </p>
      </div>
    </div>
  )
}

export default function Proposal() {
  return (
    <Section id="proposal" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="relative z-10">
        <SectionNum>02</SectionNum>
        <SectionTitle>Business Idea & Proposal</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {CARDS.map((card, i) => (
            <ProposalCard key={i} {...card} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
