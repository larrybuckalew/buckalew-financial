import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { articles } from '../data/articles'

export default function Education() {
  return (
    <>
      <SEO
        title="Life Insurance Education Center | Buckalew Financial Services"
        description="Clear, honest guides on life insurance: how much coverage you need, term vs. whole life, no-exam underwriting, beneficiary mistakes, and more — written by licensed advisors."
        path="/education"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Education Center</div>
          <h1>Education Center</h1>
          <p>
            Clear, honest answers about life insurance — written by our advisors,
            not by a marketing department.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="grid-3">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={(i % 3) * 90}>
                <Link to={`/education/${a.id}`}>
                  <div className="card article-card" style={{ height: '100%' }}>
                    <div className="card-media">
                      <img src={a.image} alt={a.title} loading="lazy" />
                    </div>
                    <div className="article-meta">
                      <span className="article-tag">{a.tag}</span>
                      <span>{a.date}</span>
                    </div>
                    <h3 style={{ fontSize: '1.08rem' }}>{a.title}</h3>
                    <p style={{ flex: 1 }}>{a.excerpt}</p>
                    <span className="card-link">Read article →</span>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 8 }}>
                      {a.readTime}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="cta-band mt-3">
              <div>
                <h2>Have a Question We Haven't Answered?</h2>
                <p>Our advisors are happy to help — no sales pitch, promise.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Ask an Advisor →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}