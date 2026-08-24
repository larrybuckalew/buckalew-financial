import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Quote from './pages/Quote'
import NeedsCalculator from './pages/NeedsCalculator'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import ArticleDetail from './pages/ArticleDetail'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('bfs-theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('bfs-theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  // Expose toggle for the navbar button
  useEffect(() => {
    window.__toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
    return () => { delete window.__toggleTheme }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/needs-calculator" element={<NeedsCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/:id" element={<ArticleDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}