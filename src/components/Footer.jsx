export default function Footer() {
  return (
    <footer className="py-12 border-t border-gold/20 bg-bg-alt/50 backdrop-blur-sm">
      <div className="max-w-container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
            Himalayan Heritage <span className="text-gold">Wellness</span>
          </h3>
          <p className="text-sm text-muted">
            Preserving 150 years of tea tradition from the heart of Kangra Valley
          </p>
        </div>
        <div className="pt-6 border-t border-gold/10">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Himalayan Heritage Wellness UK Limited. Kangra Valley tea legacy since 1960.
          </p>
        </div>
      </div>
    </footer>
  )
}
