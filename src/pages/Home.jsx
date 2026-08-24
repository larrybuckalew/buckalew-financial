import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Testimonials from '../components/Testimonials'
import { products } from '../data/products'

export default function Home() {
  return (
    <>
      <SEO
        title="Buckalew Financial Services | Life Insurance You Can Trust"
        description="Independent life insurance agency in Nashville, TN. Compare 40+ top carriers for term, whole, universal, and final expense life insurance. Free quotes, no pressure."
        path="/"
      />
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <span className="hero-badge">★ Independent Agency · 40+ Top Carriers</span>
              <h1>Protecting What Matters <em>Most</em>, For Life.</h1>
              <p className="lead">
                Buckalew Financial Services helps families and businesses secure
                their future with the right life insurance — at the right price,
                with guidance you can trust.
              </p>
              <div className="hero-ctas">
                <Link to="/quote" className="btn btn-primary">Get My Free Quote →</Link>
                <Link to="/needs-calculator" className="btn btn-light">How Much Do I Need?</Link>
              </div>
              <div className="hero-trust">
                <span><b>A+</b> Rated Carriers</span>
                <span><b>$2B+</b> Coverage Placed</span>
                <span><b>24hr</b> No-Exam Options</span>
                <span><b>0</b> Pressure, Ever</span>
              </div>
            </div>

            <Reveal delay={150}>
              <div className="hero-media">
                <div className="img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80"
                    alt="Father lifting his smiling child — protecting what matters most"
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="float-card">
                  <div className="fc-icon">🛡️</div>
                  <div>
                    <b>$2B+ Protected</b>
                    <span>for 12,400+ families & businesses</span>
                  </div>
                </div>
                <div className="float-card" style={{ left: 'auto', right: -18, bottom: 'auto', top: 26 }}>
                  <div className="fc-icon">⭐</div>
                  <div>
                    <b>4.9 / 5 Rating</b>
                    <span>from verified client reviews</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stats-band">
        <div className="container stats-grid">
          <div><div className="stat-num"><Counter end={12400} suffix="+" /></div><div className="stat-label">Policies Issued</div></div>
          <div><div className="stat-num"><Counter end={2} prefix="$" suffix="B+" /></div><div className="stat-label">Coverage In Force</div></div>
          <div><div className="stat-num"><Counter end={25} suffix="+" /></div><div className="stat-label">Years of Service</div></div>
          <div><div className="stat-num"><Counter end={98} suffix="%" /></div><div className="stat-label">Client Retention Rate</div></div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Our Solutions</span>
          <h2 className="section-title">Coverage for Every Stage of Life</h2>
          <p className="section-sub">
            From your first policy to legacy planning, we match you with the right
            product from carriers we trust.
          </p>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <div className="card">
                  <div className="card-icon">{p.icon}</div>
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                  <Link to={`/products/${p.id}`} className="card-link">Learn more →</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-2 flex-center" style={{ justifyContent: 'center' }}>
            <Link to="/products" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why independent */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <Reveal>
            <div className="img-frame">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                alt="Advisor shaking hands with a client"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">The Buckalew Difference</span>
            <h2 className="section-title">Why Independent Advice Matters</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 18 }}>
              Captive agents can only sell you one company's products. As an
              independent agency, we compare dozens of top-rated carriers side by
              side — so the recommendation you get is based on your needs, not a
              corporate quota.
            </p>
            <ul className="feature-list mb-2">
              <li>We shop 40+ A-rated carriers on your behalf</li>
              <li>Average client savings of 31% vs. single-carrier quotes</li>
              <li>Unbiased guidance before, during, and after the sale</li>
              <li>Local Nashville team that answers when you call</li>
            </ul>
            <Link to="/about" className="btn btn-outline">More About Us →</Link>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt">
        <div className="container center">
          <span className="eyebrow">Simple Process</span>
          <h2 className="section-title">Covered in Three Easy Steps</h2>
          <p className="section-sub">No paperwork mountains. No pushy sales calls. Just clear guidance.</p>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {[
              ['1', 'Tell Us About You', 'Answer a few questions online or by phone. Takes about two minutes — no obligation.'],
              ['2', 'We Shop 40+ Carriers', 'We compare rates and features across top-rated insurers to find your best fit.'],
              ['3', 'Get Covered Fast', 'Many policies approve in 24–72 hours with no medical exam. We handle all the paperwork.'],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120}>
                <div className="card">
                  <div className="card-icon" style={{ fontFamily: 'var(--font-head)', fontWeight: 700 }}>{n}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Client Stories</span>
          <h2 className="section-title">Trusted by Families Like Yours</h2>
          <p className="section-sub">Real experiences from real clients across Tennessee and beyond.</p>
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div>
                <h2>Ready to Protect Your Family's Future?</h2>
                <p>Get a free, no-obligation estimate in under two minutes.</p>
              </div>
              <Link to="/quote" className="btn btn-primary">Start My Free Quote →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}