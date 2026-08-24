import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────
// GOOGLE ANALYTICS 4
// Replace 'G-XXXXXXXXXX' with your real Measurement ID from
// https://analytics.google.com (Admin → Data Streams → Web).
// Until then, the script simply does not load (no errors).
// ─────────────────────────────────────────────────────────────
const MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function Analytics() {
  const location = useLocation()

  // Load the GA script once
  useEffect(() => {
    if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-XXXXXXXXXX') return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', MEASUREMENT_ID)
  }, [])

  // Track page views on every route change (SPA navigation)
  useEffect(() => {
    if (window.gtag && MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: location.pathname,
      })
    }
  }, [location.pathname])

  return null
}

// Helper for custom conversion events (used by forms/calculators)
export function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params)
}