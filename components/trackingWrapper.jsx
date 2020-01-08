import { useEffect } from 'react'
import { initGA, trackPageView } from '../utils'

const trackPageViews = () => {
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  trackPageView()
}

const Layout = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      trackPageViews()
    }
  }, [])

  return children
}

export default Layout
