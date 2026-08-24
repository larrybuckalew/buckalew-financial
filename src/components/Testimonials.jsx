import { useState } from 'react'
import Reveal from './Reveal'

const testimonials = [
  {
    text: 'After my father passed without any coverage, I promised myself my family would never face that. Buckalew walked me through everything patiently — no pressure, no jargon. I had a 20-year term policy in force within a week.',
    name: 'Marcus T.',
    role: 'Term Life Client, Nashville',
  },
  {
    text: 'As a small business owner, I needed key person coverage and a buy-sell solution fast. Their team coordinated with my attorney and had both policies placed in under three weeks. Truly professional.',
    name: 'Dana R.',
    role: 'Business Owner, Franklin',
  },
  {
    text: 'I assumed at age 62 with my health history that insurance was off the table. They found me a guaranteed-issue final expense policy that was affordable and gave my daughter real peace of mind.',
    name: 'Evelyn S.',
    role: 'Final Expense Client, Murfreesboro',
  },
  {
    text: 'The quote calculator on their site got me close, but sitting down with an advisor refined it perfectly. We laddered term and whole life to fit our budget exactly. Best financial decision we have made.',
    name: 'James & Priya K.',
    role: 'Family Clients, Brentwood',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const initials = t.name
    .replace(/[^A-Za-z &]/g, '')
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <Reveal>
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>
        <p className="testimonial-text">{t.text}</p>
        <div className="testimonial-author">
          <div className="avatar">{initials}</div>
          <div>
            <div className="name">{t.name}</div>
            <div className="role">{t.role}</div>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous">←</button>
        <button className="carousel-btn" onClick={next} aria-label="Next">→</button>
      </div>
      <div className="dots">
        {testimonials.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)} />
        ))}
      </div>
    </Reveal>
  )
}