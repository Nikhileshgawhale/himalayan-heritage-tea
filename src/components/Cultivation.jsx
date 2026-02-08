import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle, SectionDesc } from './Section'

export default function Cultivation() {
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
    <Section alt className="relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="relative z-10">
        <SectionNum>06</SectionNum>
        <SectionTitle>Tea & Cultivation</SectionTitle>
        <div
          ref={ref}
          className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="p-6 rounded-lg bg-surface/30 border border-gold/10 backdrop-blur-sm">
            <SectionDesc>
              Kangra tea is from the Kangra district in Himachal Pradesh, India. Both black tea and green
              tea have been produced in the Kangra Valley since the mid-19th century. Kangra tea was given{' '}
              <strong className="text-gold font-semibold">Geographical Indication status in 2005</strong>.
            </SectionDesc>
          </div>
          <SectionDesc>
            Tea was first grown in the Kangra region in the mid-19th century after a feasibility survey
            in 1848. There are <strong className="text-gold font-semibold">5,900 tea gardens</strong> covering
            about <strong className="text-gold font-semibold">2,312 hectares</strong> between Dharamsala, Shahpur,
            Palampur, Baijnath and Jogindernagar, with an annual output of{' '}
            <strong className="text-gold font-semibold">899,000 kg</strong>. Black tea constitutes around 90% of
            production.
          </SectionDesc>
        </div>
      </div>
    </Section>
  )
}
