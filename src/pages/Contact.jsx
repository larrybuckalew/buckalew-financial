import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const initial = { name: '', email: '', phone: '', interest: 'Term Life Insurance', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value })
    if (errors[k]) setErrors({ ...errors, [k]: null })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (form.phone && !/^[\d\s()+.-]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number.'
    if (!form.message.trim()) errs.message = 'Please tell us a little about what you need.'
    return errs
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSent(true)
      setForm(initial)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Contact</div>
          <h1>Contact Us</h1>
          <p>
            Questions about coverage? Ready for a personalized quote?
            We respond to every message within one business day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container contact-grid">
          {/* Info column */}
          <Reveal>
            <div className="card" style={{ padding: '30px 26px' }}>
              <h3 style={{ marginBottom: 8 }}>Get In Touch</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: 10 }}>
                Prefer to talk? Call us directly — a real person answers.
              </p>

              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <b>Phone</b><br />
                  <span style={{ color: 'var(--text-muted)' }}>(555) 214-8890<br />Mon–Fri, 8:30am – 5:30pm CT</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <b>Email</b><br />
                  <span style={{ color: 'var(--text-muted)' }}>hello@buckalewfinancial.com</span>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div>
                  <b>Office</b><br />
                  <span style={{ color: 'var(--text-muted)' }}>420 Commerce Street, Suite 210<br />Nashville, TN 37219</span>
                </div>
              </div>

              <div className="map-placeholder">
                🗺️<br />Interactive map placeholder<br />(connect Google Maps embed here)
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={120}>
            <div className="card" style={{ padding: '34px 32px' }}>
              {sent && (
                <div className="success-banner mb-2">
                  ✓ Thank you! Your message has been sent. An advisor will reach out within one business day.
                </div>
              )}

              <form onSubmit={submit} noValidate>
                <div className="form-grid">
                  <div className="field">
                    <label>Full Name *</label>
                    <input className="input" value={form.name} onChange={set('name')} placeholder="Jane Smith" />
                    {errors.name && <div className="error-msg">{errors.name}</div>}
                  </div>
                  <div className="field">
                    <label>Email *</label>
                    <input className="input" type="email" value={form.email} onChange={set('email')} placeholder="jane@email.com" />
                    {errors.email && <div className="error-msg">{errors.email}</div>}
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input className="input" value={form.phone} onChange={set('phone')} placeholder="(555) 123-4567" />
                    {errors.phone && <div className="error-msg">{errors.phone}</div>}
                  </div>
                  <div className="field">
                    <label>I'm Interested In</label>
                    <select className="select" value={form.interest} onChange={set('interest')}>
                      <option>Term Life Insurance</option>
                      <option>Whole Life Insurance</option>
                      <option>Universal Life Insurance</option>
                      <option>Final Expense Insurance</option>
                      <option>Group & Business Coverage</option>
                      <option>Policy Review</option>
                      <option>Something Else</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label>How Can We Help? *</label>
                    <textarea className="textarea" value={form.message} onChange={set('message')}
                      placeholder="Tell us about your family or business needs..." />
                    {errors.message && <div className="error-msg">{errors.message}</div>}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-1">Send Message →</button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: 12 }}>
                  By submitting, you agree to be contacted about insurance products.
                  We never sell your information.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}