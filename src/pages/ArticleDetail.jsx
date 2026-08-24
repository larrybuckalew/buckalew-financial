import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { articles } from '../data/articles'

// Renders simple "## Heading" markdown-ish body blocks
function Body({ blocks }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) =>
        b.startsWith('## ') ? (
          <h2 key={i}>{b.slice(3)}</h2>
        ) : (
          <p key={i}>{b}</p>
        )
      )}
    </div>
  )
}

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) return <Navigate to="/education" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/education">Education</Link> / {article.tag}
          </div>
          <h1 style={{ maxWidth: 760 }}>{article.title}</h1>
          <div className="article-meta" style={{ marginTop: 14 }}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>Buckalew Advisory Team</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <Reveal>
            <div className="product-banner">
              <img src={article.image} alt={article.title} loading="eager" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Body blocks={article.body} />
          </Reveal>

          <Reveal>
            <div className="cta-band mt-3" style={{ maxWidth: 760, margin: '40px auto 0' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem' }}>Ready to Put This Into Practice?</h2>
                <p>Get a personalized quote or talk through your situation with an advisor.</p>
              </div>
              <Link to="/quote" className="btn btn-primary">Get My Quote →</Link>
            </div>
          </Reveal>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/education" className="btn btn-outline">← Back to Education Center</Link>
          </div>
        </div>
      </section>
    </>
  )
}