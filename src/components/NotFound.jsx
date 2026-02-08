import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="font-display text-9xl font-bold text-gold mb-4">404</h1>
          <h2 className="font-display text-4xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-muted text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Go to Homepage
          </a>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-surface border border-gold/20 text-gray-800 font-medium rounded-lg hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
