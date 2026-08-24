import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/quote', label: 'Get a Quote' },
  { to: '/needs-calculator', label: 'Needs Calculator' },
  { to: '/education', label: 'Education' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">B</span>
            <span>
              <span className="brand-name">Buckalew</span>
              <br />
              <span className="brand-tag">Financial Services</span>
            </span>
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" aria-label="Toggle dark mode"
              onClick={() => window.__toggleTheme?.()}>
              🌙
            </button>
            <Link to="/quote" className="btn btn-primary">Free Quote</Link>
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        <nav className={`mobile-menu ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}