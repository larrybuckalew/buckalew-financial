import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import { faqs } from '../data/faqs'

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / FAQ</div>
          <h1>Frequently Asked Questions</h1>
          <p>Straight answers to the questions we hear most often.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>

          <Reveal>
            <div className="cta-band mt-3">
              <div>
                <h2>Still Have Questions?</h2>
                <p>We are happy to help — no obligation, no pressure.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Contact Us →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}