import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // You can log to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg px-4">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <h1 className="font-display text-6xl font-bold text-gold mb-4">⚠️</h1>
              <h2 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                Something went wrong
              </h2>
              <p className="text-muted text-lg mb-8">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-block px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-surface border border-gold/20 text-gray-800 font-medium rounded-lg hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
