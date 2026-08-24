import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">B</span>
              <span>
                <span className="brand-name">Buckalew</span>
                <br />
                <span className="brand-tag">Financial Services</span>
              </span>
            </Link>
            <p>
              Independent life insurance guidance for families and businesses.
              We shop dozens of top-rated carriers so you get the right coverage
              at the right price.
            </p>
          </div>

          <div>
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/term-life">Term Life</Link></li>
              <li><Link to="/products/whole-life">Whole Life</Link></li>
              <li><Link to="/products/universal-life">Universal Life</Link></li>
              <li><Link to="/products/final-expense">Final Expense</Link></li>
              <li><Link to="/products/group-life">Group & Business</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/education">Education Center</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>📞 (813) 863-5917</li>
              <li>✉️ hello@buckalewfinancial.com</li>
              <li>📍 3031 Mojave Oak Dr<br />Valrico, FL 33594</li>
              <li>🕒 Mon–Fri, 9:00am – 5:30pm ET</li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer">
          Buckalew Financial Services is an independent insurance agency. Product
          availability varies by state; licensing information available upon request.
          The quote estimator and coverage calculator on this website provide
          illustrative estimates only and do not constitute an offer of insurance,
          a binding quote, or financial advice. Actual premiums are determined by
          carrier underwriting based on your complete application, health history,
          and other factors. Consult a licensed professional before making any
          financial decision.
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Buckalew Financial Services. All rights reserved.</span>
          <span>Privacy · Terms · Licensing · Accessibility</span>
        </div>
      </div>
    </footer>
  )
}