import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'

const timeline = [
  ['1999', 'Founded in Nashville', 'Robert Buckalew opens a one-office independent agency with a simple promise: honest advice, no pressure.'],
  ['2005', '100th Family Protected', 'Word of mouth drives growth as the agency expands into term and whole life planning for young families.'],
  ['2012', 'Business Solutions Division', 'Key person insurance and buy-sell funding services launch for Middle Tennessee business owners.'],
  ['2018', 'Digital-First Experience', 'Online quote tools and accelerated underwriting partnerships cut approval times from weeks to days.'],
  ['2024', '40+ Carrier Network', 'The agency now represents more than 40 top-rated insurers, serving clients across 12 states.'],
]

const team = [
  ['Robert Buckalew', 'Founder & Principal', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'],
  ['Sarah Mitchell', 'Senior Life Advisor', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'],
  ['David Chen', 'Business Solutions Lead', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'],
  ['Angela Foster', 'Client Services Director', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'],
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / About</div>
          <h1>About Buckalew Financial Services</h1>
          <p>
            For over 25 years, we have helped families and businesses protect what
            matters most — with independence, integrity, and genuine care.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Independent by Design</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
              Most insurance agents work for one company and sell only that company's
              products. We built Buckalew Financial Services differently: as an
              independent agency, we represent dozens of top-rated carriers and shop
              them all on your behalf.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              That means our only loyalty is to you. When we recommend a policy,
              it is because it is genuinely the best fit for your health profile,
              budget, and goals — not because of a sales quota.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="img-frame mb-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="The Buckalew Financial Services team collaborating"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="stats-band" style={{ borderRadius: 'var(--radius-lg)', padding: '44px 32px' }}>
              <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div><div className="stat-num"><Counter end={25} suffix="+" /></div><div className="stat-label">Years in Business</div></div>
                <div><div className="stat-num"><Counter end={40} suffix="+" /></div><div className="stat-label">Carrier Partners</div></div>
                <div><div className="stat-num"><Counter end={12} /></div><div className="stat-label">States Licensed</div></div>
                <div><div className="stat-num"><Counter end={12400} suffix="+" /></div><div className="stat-label">Policies Issued</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Milestones</span>
            <h2 className="section-title">25+ Years of Trusted Service</h2>
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

      <section className="section">
        <div className="container center">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-title">Meet Your Advisors</h2>
          <p className="section-sub">Licensed professionals who answer the phone, return calls, and never pressure.</p>
          <div className="grid-3" style={{ textAlign: 'center' }}>
            {team.map(([name, role, photo], i) => (
              <Reveal key={name} delay={i * 90}>
                <div className="card team-card">
                  <img className="team-photo" src={photo} alt={`${name}, ${role}`} loading="lazy" />
                  <h3 style={{ fontSize: '1.05rem' }}>{name}</h3>
                  <div className="team-role mt-1">{role}</div>
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