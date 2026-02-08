import { useState, useEffect, useRef } from 'react'
import { Section, SectionTitle, SectionSubtitle } from './Section'

const CONTACTS = [
  { label: 'Address', value: '15 Constable Avenue, London — E16 1TZ', href: null, icon: '📍' },
  { label: 'Phone', value: '+44 735 930 3525', href: 'tel:+447359303525', icon: '📞' },
  { label: 'WhatsApp', value: '+44 742 433 3679', href: 'https://wa.me/447424333679', icon: '💬' },
  { label: 'Email', value: 'himalayanh9612@gmail.com', href: 'mailto:himalayanh9612@gmail.com', icon: '✉️' },
]

function ContactCard({ label, value, href, icon, index }) {
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
      className={`p-6 rounded-lg bg-surface border border-gold/20 hover:border-gold/50 transition-all duration-300 hover-lift glow-gold group relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
      <div className="relative z-10">
        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="block text-xs tracking-widest uppercase text-gold mb-3 font-medium">
          {label}
        </span>
        <p className="text-gray-800 text-base">
          {href ? (
            <a
              href={href}
              className="text-gray-800 no-underline hover:text-gold transition-colors duration-300 inline-block"
            >
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact Form Inquiry')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:himalayanh9612@gmail.com?subject=${subject}&body=${body}`

      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-surface rounded-lg border border-gold/20 p-8 shadow-lg"
      >
        <div className="mb-6">
          <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
            Send Us a Message
          </h3>
          <p className="text-muted text-sm">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              placeholder="+44 123 456 7890"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              placeholder="What is this regarding?"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell us about your inquiry, order requirements, or any questions you have..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              ✓ Thank you! Your message has been sent. We'll get back to you soon.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-bg to-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -ml-48 -mt-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="relative z-10">
        <SectionTitle>Contact Us</SectionTitle>
        <SectionSubtitle>Get in Touch - We'd Love to Hear From You</SectionSubtitle>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
          {CONTACTS.map((contact, index) => (
            <ContactCard key={contact.label} {...contact} index={index} />
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <ContactForm />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="font-display text-lg text-muted mb-2">
            Himalayan Heritage Wellness • UK Limited
          </p>
          <p className="text-sm text-muted">
            Business Hours: Monday - Friday, 9:00 AM - 6:00 PM GMT
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://wa.me/447424333679"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.168a3.145 3.145 0 01-1.847-2.843c0-1.336.695-2.576 1.847-3.28l.361-.209a9.865 9.865 0 015.031-1.378h.004c1.948 0 3.777.76 5.152 2.14a7.215 7.215 0 012.004 5.003c0 1.947-.76 3.777-2.003 5.152a7.215 7.215 0 01-5.003 2.003m0-18.293A9.956 9.956 0 0012.001 0C5.383 0 0 5.384 0 12.001c0 2.097.547 4.142 1.588 5.945L0 24l6.305-1.654a11.975 11.975 0 005.696 1.448h.004c6.617 0 12-5.384 12-12.001C24.001 5.384 18.617.001 12.001.001" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+447359303525"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
