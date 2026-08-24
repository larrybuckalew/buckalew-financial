import { useEffect } from 'react'

// Update this when the real domain is known
const SITE_URL = 'https://buckalewfinancial.com'

// Lightweight per-page SEO: sets title, meta description,
// Open Graph tags, and canonical URL on every route change.
export default function SEO({ title, description, path = '/', type = 'website' }) {
  useEffect(() => {
    document.title = title

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    if (description) setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    if (description) setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', SITE_URL + path)
    setMeta('property', 'og:type', type)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = SITE_URL + path
  }, [title, description, path, type])

  return null
}