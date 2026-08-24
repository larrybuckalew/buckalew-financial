import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'

const timeline = [
  ['2015', 'Licensed', 'Larry Buckalew earns his life insurance license and begins helping families protect what matters most.'],
  ['April 2020', 'Buckalew Financial Services Is Born', 'Larry founds BFS as an independent agency — built on honest advice, no pressure, and personal service.'],
  ['Today', 'Serving Families Nationwide', 'Based in Valrico, Florida, BFS helps clients across the country find the right life coverage at the right price.'],
]

const values = [
  ['🔓', 'Independent', 'We are not tied to any single insurance company. That means unbiased recommendations based on your needs — never a corporate quota.'],
  ['📜', 'Fully Licensed', 'Licensed life insurance professional — trained, credentialed, and accountable for every recommendation.'],
  ['🤝', 'Local & Personal', "You're not just a number here. You get direct access to your advisor — before, during, and after you're covered."],
]

export default function About() {
  return (
    <>
      <SEO
        title="About Larry Buckalew | Buckalew Financial Services"
        description="Meet Larry Buckalew, independent life insurance advisor based in Valrico, FL serving clients nationwide. Licensed since 2015 — honest advice, no pressure."
        path="/about"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <h1>About Buckalew Financial Services</h1>
          <p>
            Independent life insurance guidance — honest advice, no pressure,
            and personal service from someone who answers the phone.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Built on Honest Advice, Not Sales Quotas</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
              Buckalew Financial Services was founded in <b>April 2020</b> by{' '}
              <b>Larry Buckalew</b>, who entered the insurance industry after
              earning his license in <b>2015</b>. After years of seeing families
              sold policies that didn't fit their lives, Larry set out to do it
              differently: as an independent advisor who shops multiple top-rated
              carriers and recommends only what genuinely fits.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
              No gimmicks. No pressure. Just straightforward guidance on term,
              whole, universal, and final expense life insurance — explained in
              plain English so you can make confident decisions.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Based in <b>Valrico, Florida</b> and serving clients{' '}
              <b>nationwide</b>, BFS specializes exclusively in life insurance —
              so every conversation is focused on protecting the people you love.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="img-frame mb-2">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Larry Buckalew, independent life insurance advisor"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card" style={{ padding: '26px 28px' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 14 }}>Advisor at a Glance</h3>
              {[
                ['Advisor', 'Larry Buckalew'],
                ['Licensed Since', '2015'],
                ['Agency Founded', 'April 2020'],
                ['Specialty', 'Life Insurance'],
                ['Location', 'Valrico, FL — serving clients nationwide'],
              ].map(([k, v], i) => (
                <div className="spec-row" key={i}>
                  <span>{k}</span><b>{v}</b>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {timeline.map(([year, title, desc], i) => (
              <Reveal key={year} delay={i * 80}>
                <div className="timeline-item">
                  <div className="timeline-year">{year}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Why Clients Trust Buckalew</span>
          <h2 className="section-title">The Buckalew Difference</h2>
          <p className="section-sub">Three simple promises behind every recommendation.</p>
          <div className="grid-3">
            {values.map(([icon, t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="card">
                  <div className="card-icon">{icon}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="cta-band mt-3" style={{ textAlign: 'left' }}>
              <div>
                <h2>Let's Talk About Your Plan</h2>
                <p>A conversation costs nothing — and could change everything.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Schedule a Call →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}