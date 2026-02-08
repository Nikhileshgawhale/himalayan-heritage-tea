import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

const TYPES = [
  {
    title: 'White Tea',
    desc: 'Subtle, delicate, and elegant. White teas undergo the least processing—picked, withered, and dried. Soft grey leaves (bud and top two leaves). Popular: Silver Needle, Bai Mudan.',
    icon: '🌿',
  },
  {
    title: 'Green Tea',
    desc: 'Less oxidation, green leaf retained. Steamed (Japanese: Sencha, Genmaicha, Matcha) or pan-fired (Chinese: Longjing, Gunpowder). Flavors from buttery and grassy to smoky and savory.',
    icon: '🍃',
  },
  {
    title: 'Black Tea',
    desc: 'Heavily oxidized, strong and bold. Kangra, Darjeeling, Assam, Ceylon. Graded (OP full-leaf, BOP broken). Base for Earl Grey and many flavoured teas.',
    icon: '☕',
  },
  {
    title: 'Oolong Tea',
    desc: 'Semi-oxidized, complex to produce. From Taiwan and China. Oxidation 10%–85%. Can be steeped multiple times. Examples: Baozhong, Da Hong Pao, Tieguanyin, milk oolong.',
    icon: '🍵',
  },
  {
    title: 'Flavoured Tea',
    desc: 'Processed black, green or oolong teas blended with spices, herbs, flower petals or fruit essential oils for a wide variety of flavoured teas.',
    icon: '🌸',
  },
]

function TeaCard({ title, desc, icon, index }) {
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
    <article
      ref={ref}
      className={`p-7 rounded-lg bg-surface border border-gold/20 hover:border-gold/50 transition-all duration-300 hover-lift glow-gold group relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative z-10">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-gold mb-3 group-hover:text-gold/90 transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </article>
  )
}

export default function TeaTypes() {
  return (
    <Section id="tea-types">
      <SectionNum>07</SectionNum>
      <SectionTitle>Tea Types</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {TYPES.map(({ title, desc, icon }, index) => (
          <TeaCard key={title} title={title} desc={desc} icon={icon} index={index} />
        ))}
      </div>
    </Section>
  )
}
