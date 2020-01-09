import { useEffect } from 'react'
import { initGA, trackPageView } from '../utils'

const trackPageViews = () => {
  console.log(process.env.GA_TRACKING_ID)
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  trackPageView()
}

const Layout = ({ children }) => {
  useEffect(() => {
    trackPageViews()
  }, [])

  return children
}

export default Layout
