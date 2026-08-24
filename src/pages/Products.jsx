import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { products } from '../data/products'

export default function Products() {
  return (
    <>
      <SEO
        title="Life Insurance Products | Buckalew Financial Services"
        description="Explore term life, whole life, universal life, final expense, and group life insurance. Independent guidance to match the right coverage to your goals and budget."
        path="/products"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Products</div>
          <h1>Life Insurance Products</h1>
          <p>
            Every family is different. Explore our full range of coverage options —
            then let us tailor the right combination for your goals and budget.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 100}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-media">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                  <div className="flex-center">
                    <span style={{ fontSize: '1.4rem' }}>{p.icon}</span>
                    <h3>{p.name}</h3>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--gold-500)', marginBottom: 10 }}>{p.tagline}</p>
                  <p>{p.short}</p>
                  <div className="flex-center mt-1">
                    <Link to={`/products/${p.id}`} className="btn btn-outline">Learn More</Link>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 600 }}>{p.startingPrice}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="cta-band mt-3">
              <div>
                <h2>Not Sure Which Product Fits?</h2>
                <p>Our advisors will walk you through it — no pressure, no obligation.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Talk to an Advisor →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}