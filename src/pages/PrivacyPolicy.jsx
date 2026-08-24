import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const sections = [
  {
    h: '1. Information We Collect',
    p: [
      'When you use our website, request a quote, or contact us, we may collect the following information:',
      'Contact details you provide voluntarily — such as your name, email address, phone number, and the nature of your inquiry.',
      'Quote information you enter into our calculators (age range, health profile, coverage preferences). This information is used only to generate an estimate and is not stored on our servers.',
      'Standard analytics data collected automatically, such as pages visited, approximate location (city level), device type, and referral source. This data is aggregated and does not identify you personally.',
    ],
  },
  {
    h: '2. How We Use Your Information',
    p: [
      'We use the information you provide solely to respond to your inquiries, prepare insurance quotes, and provide ongoing service related to policies you hold through our agency.',
      'We do not sell, rent, or trade your personal information to third parties for marketing purposes. Ever.',
      'We may share information with insurance carriers only as necessary to obtain quotes or service a policy you have requested — and only with carriers you have agreed to consider.',
    ],
  },
  {
    h: '3. Text Messaging & Phone Consent (TCPA)',
    p: [
      'By submitting a form on this website, you consent to be contacted by Buckalew Financial Services by phone, email, or text message regarding your inquiry, even if you are on a federal or state Do-Not-Call registry. Consent is not a condition of purchase.',
      'Message and data rates may apply. You may opt out of text messages at any time by replying STOP, or request removal from our call list by contacting us directly.',
    ],
  },
  {
    h: '4. Cookies & Analytics',
    p: [
      'This website uses Google Analytics to understand how visitors use the site so we can improve it. Google Analytics uses cookies to collect anonymous usage statistics. You can disable cookies in your browser settings; the site will continue to function.',
      'We do not use cookies for advertising retargeting without your explicit consent.',
    ],
  },
  {
    h: '5. Data Security & Retention',
    p: [
      'We take reasonable administrative and technical measures to protect personal information submitted through this website. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
      'We retain inquiry information only as long as needed to respond to your request or as required by applicable insurance regulations.',
    ],
  },
  {
    h: '6. Your Rights',
    p: [
      'You may request access to, correction of, or deletion of any personal information we hold about you at any time by emailing hello@buckalewfinancial.com or calling (813) 863-5917.',
      'Florida residents have additional rights under applicable state law, which we honor fully.',
    ],
  },
  {
    h: '7. Changes to This Policy',
    p: [
      'We may update this Privacy Policy from time to time. The effective date below will always reflect the current version. Continued use of this website after changes constitutes acceptance of the updated policy.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Buckalew Financial Services"
        description="How Buckalew Financial Services collects, uses, and protects your personal information — including TCPA texting consent and cookie disclosures."
        path="/privacy-policy"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>Effective date: January 1, 2026 · Last updated: August 2026</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container article-body">
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          ))}
          <p style={{ marginTop: 30 }}>
            Questions? Contact us at{' '}
            <a href="mailto:hello@buckalewfinancial.com" style={{ color: 'var(--gold-500)' }}>
              hello@buckalewfinancial.com
            </a>{' '}
            or <b>(813) 863-5917</b>. See also our{' '}
            <Link to="/terms" style={{ color: 'var(--gold-500)' }}>Terms of Use</Link>.
          </p>
        </div>
      </section>
    </>
  )
}