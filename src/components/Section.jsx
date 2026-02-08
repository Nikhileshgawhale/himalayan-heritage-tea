const SECTION_CLASS = 'py-20'

export function Section({ id, children, alt, className = '' }) {
  return (
    <section
      id={id}
      className={`${SECTION_CLASS} ${alt ? 'bg-bg-alt' : ''} ${className}`.trim()}
    >
      <div className="max-w-container mx-auto px-4">{children}</div>
    </section>
  )
}

export function SectionNum({ children }) {
  return (
    <span className="block text-xs tracking-[0.15em] text-gold mb-3">{children}</span>
  )
}

export function SectionLabel({ children }) {
  return (
    <h2 className="text-xs tracking-[0.2em] uppercase text-accent mb-2">{children}</h2>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
      {children}
    </h2>
  )
}

export function SectionSubtitle({ children }) {
  return <p className="text-muted mb-8">{children}</p>
}

export function SectionDesc({ children }) {
  return <p className="text-muted max-w-[720px] mb-4 last:mb-0 leading-relaxed">{children}</p>
}
