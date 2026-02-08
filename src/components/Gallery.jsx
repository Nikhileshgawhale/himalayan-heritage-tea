import { useState, useEffect, useRef } from 'react'
import { Section, SectionNum, SectionTitle, SectionSubtitle } from './Section'

const IMAGES = [
  {
    src: '/WhatsApp Image 2026-02-06 at 9.41.40 PM.jpeg',
    alt: 'Himalayan Heritage Tea Product',
    title: 'Premium Tea Collection',
  },
  {
    src: '/WhatsApp Image 2026-02-06 at 9.41.48 PM.jpeg',
    alt: 'Himalayan Heritage Tea Product',
    title: 'Authentic Kangra Valley Tea',
  },
]

const PDFS = [
  {
    title: 'Chamomile Tea Label',
    file: '/3x6in-Label - Chamomile Tea - HHWUL-DAL-06FEB2026ai.pdf',
    description: 'Product label for Chamomile Tea',
  },
  {
    title: 'Hibiscus Tea Label',
    file: '/3x6in-Label - Hibiscus Tea - HHWUL-DAL-06FEB2026ai.pdf',
    description: 'Product label for Hibiscus Tea',
  },
]

const VIDEO = {
  src: '/WhatsApp Video 2026-02-06 at 9.41.34 PM.mp4',
  title: 'Himalayan Heritage Tea',
  description: 'Watch our tea production process',
}

function ImageCard({ src, alt, title, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <>
      <div
        ref={ref}
        className={`group relative overflow-hidden rounded-lg bg-surface border border-gold/20 hover:border-gold/50 transition-all duration-300 hover-lift cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-gold hover:text-gold/70 transition-colors text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-gold mt-4 font-display text-lg">{title}</p>
          </div>
        </div>
      )}
    </>
  )
}

function PDFCard({ title, file, description, index }) {
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
      className={`p-6 rounded-lg bg-surface border border-gold/20 hover:border-gold/50 transition-all duration-300 hover-lift group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-gold mb-2 group-hover:text-gold/90 transition-colors">
            {title}
          </h3>
          <p className="text-muted text-sm mb-4">{description}</p>
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/70 transition-colors"
          >
            <span>View PDF</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

function VideoPlayer({ src, title, description }) {
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
      className={`rounded-lg bg-surface border border-gold/20 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="aspect-video">
        <video
          src={src}
          controls
          className="w-full h-full object-cover"
          poster="/WhatsApp Image 2026-02-06 at 9.41.40 PM.jpeg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-gold mb-2">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <Section id="gallery" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="relative z-10">
        <SectionNum>09</SectionNum>
        <SectionTitle>Gallery & Resources</SectionTitle>
        <SectionSubtitle>Explore our products, labels, and business materials</SectionSubtitle>

        {/* Video Section */}
        <div className="mt-12 mb-16">
          <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span>🎥</span>
            Video
          </h3>
          <VideoPlayer {...VIDEO} />
        </div>

        {/* Images Section */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span>📸</span>
            Product Images
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMAGES.map((image, index) => (
              <ImageCard key={index} {...image} index={index} />
            ))}
          </div>
        </div>

        {/* PDFs Section */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <span>📄</span>
            Documents & Labels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PDFS.map((pdf, index) => (
              <PDFCard key={index} {...pdf} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
