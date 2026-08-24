import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { trackEvent } from '../components/Analytics'

// ─────────────────────────────────────────────────────────────
// FORMSPREE — free form backend (https://formspree.io)
// 1. Create a free account and a new form
// 2. Copy your form ID (looks like "xkndqzab")
// 3. Paste it below — submissions will be emailed to you
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID'

const initial = { name: '', email: '', phone: '', interest: 'Term Life Insurance', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(null)

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

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      trackEvent('contact_form_submitted', { interest: form.interest })
      setSending(true)
      setSendError(null)

      try {
        // Send via Formspree when configured; otherwise simulate success locally
        if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
          const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(form),
          })
          if (!res.ok) throw new Error('Formspree rejected the submission')
        } else {
          // Demo mode: no backend configured yet
          await new Promise((r) => setTimeout(r, 600))
        }
        setSent(true)
        setForm(initial)
      } catch (e) {
        setSendError('Something went wrong sending your message. Please call us at (813) 863-5917 instead.')
      } finally {
        setSending(false)
      }
    }
  }

  return (
    <>
      <SEO
        title="Contact Us | Buckalew Financial Services"
        description="Questions about life insurance? Call (813) 863-5917 or send us a message. A real person answers — we respond within one business day."
        path="/contact"
      />
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
                  <span style={{ color: 'var(--text-muted)' }}>(813) 863-5917<br />Mon–Fri, 9:00am – 5:30pm ET</span>
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
                  <span style={{ color: 'var(--text-muted)' }}>3031 Mojave Oak Dr<br />Valrico, FL 33594</span>
                </div>
              </div>

              <iframe
                title="Buckalew Financial Services office location"
                src="https://www.google.com/maps?q=3031+Mojave+Oak+Dr,+Valrico,+FL+33594&output=embed"
                style={{
                  width: '100%', height: 220, border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', marginTop: 22,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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
              {sendError && (
                <div className="error-msg mb-2" style={{ fontSize: '0.9rem' }}>
                  ⚠ {sendError}
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
                <button type="submit" className="btn btn-primary mt-1" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
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