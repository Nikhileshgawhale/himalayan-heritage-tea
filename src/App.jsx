import { useEffect } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Aim from './components/Aim'
import Proposal from './components/Proposal'
import Ease from './components/Ease'
import About from './components/About'
import History from './components/History'
import Cultivation from './components/Cultivation'
import TeaTypes from './components/TeaTypes'
import Flavours from './components/Flavours'
import Stats from './components/Stats'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { initAnalytics, trackPageView } from './utils/analytics'

export default function App() {
  useEffect(() => {
    // Initialize analytics
    initAnalytics()
    
    // Track initial page view
    trackPageView(window.location.pathname)
    
    // Track page views on hash changes (for single-page app)
    const handleHashChange = () => {
      trackPageView(window.location.pathname + window.location.hash)
    }
    
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <ErrorBoundary>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Aim />
        <Proposal />
        <Ease />
        <About />
        <History />
        <Cultivation />
        <TeaTypes />
        <Flavours />
        <Stats />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
