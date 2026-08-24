import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
      <div className="container">
        <div style={{ fontFamily: 'var(--font-head)', fontSize: '5rem', color: 'var(--gold-500)', fontWeight: 700 }}>
          404
        </div>
        <h1 className="section-title">Page Not Found</h1>
        <p className="section-sub" style={{ margin: '0 auto 32px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">← Back to Home</Link>
      </div>
    </section>
  )
}