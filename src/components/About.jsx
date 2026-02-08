import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle } from './Section'

export default function About() {
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
    <Section id="about" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -ml-48 -mb-48" />
      <div className="relative z-10">
        <SectionNum>04</SectionNum>
        <SectionTitle>About Us</SectionTitle>
        <div
          ref={ref}
          className={`mt-8 space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-display text-xl md:text-2xl text-gray-800 leading-relaxed">
            Nestled in the lap of the mighty snow-capped Dhauladhar ranges, the picturesque Kangra
            Valley—<span className="text-gold italic">"the Valley of the Gods"</span>—is nothing short of bliss to the soul.
          </p>
          <div className="p-6 rounded-lg bg-surface/50 border border-gold/10 backdrop-blur-sm">
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Tea has been cultivated on the gentle slopes of the outer Himalayas since 1949. As a
              company based in Himachal Pradesh, we have a distinct regional advantage. We assure{' '}
              <strong className="text-gold font-semibold">100% authentic, hand-plucked tea leaves</strong> that
              undergo an organic process for a healthy and tasty cup. Our leaves are plucked from the
              gardens and come straight to us.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
