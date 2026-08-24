import { Link, useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { getProduct } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)

  if (!product) return <Navigate to="/products" replace />

  return (
    <>
      <SEO
        title={`${product.name} | Buckalew Financial Services`}
        description={product.short}
        path={`/products/${product.id}`}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {product.name}
          </div>
          <h1>{product.icon} {product.name}</h1>
          <p>{product.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="product-banner">
              <img src={product.image} alt={product.name} loading="eager" />
            </div>
          </Reveal>
        </div>
        <div className="container product-hero-grid" style={{ marginTop: 14 }}>
          <Reveal>
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
                Is {product.name} Right for You?
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 26 }}>{product.description}</p>

              <h3 style={{ marginBottom: 12 }}>Key Features & Benefits</h3>
              <ul className="feature-list">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="info-panel">
              <h3>At a Glance</h3>
              {product.specs.map(([k, v], i) => (
                <div className="spec-row" key={i}>
                  <span>{k}</span><b>{v}</b>
                </div>
              ))}
              <div className="mt-2" style={{ display: 'grid', gap: 10 }}>
                <Link to="/quote" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Get a Free Quote
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                  Ask a Question
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}