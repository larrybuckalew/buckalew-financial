import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { trackEvent } from '../components/Analytics'
import { termRates, termMultipliers, wholeLifeRates, finalExpenseRates, getAgeBand } from '../data/rateTables'

const STEPS = ['About You', 'Health Profile', 'Coverage', 'Your Estimate']

const fmt = (n) => '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 })

function OptionTile({ selected, onClick, children }) {
  return (
    <div className={`option-tile ${selected ? 'selected' : ''}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default function Quote() {
  const [step, setStep] = useState(0)
  const [age, setAge] = useState(35)
  const [gender, setGender] = useState('')
  const [health, setHealth] = useState('')
  const [tobacco, setTobacco] = useState('')
  const [policyType, setPolicyType] = useState('term')
  const [term, setTerm] = useState('20')
  const [coverage, setCoverage] = useState(500000)

  const canNext =
    (step === 0 && gender) ||
    (step === 1 && health && tobacco !== '') ||
    step === 2

  // Premium calculation
  let monthly = null
  if (step === 3) {
    const band = getAgeBand(age)
    if (policyType === 'term') {
      const idx = { 'Preferred Plus': 0, Preferred: 1, Standard: 2, Fair: 3 }[health]
      const base = termRates[band][idx]
      const rate = base * termMultipliers.tobacco[tobacco] * termMultipliers.gender[gender] * termMultipliers.term[term]
      monthly = (rate * (coverage / 1000)) / 12
    } else if (policyType === 'whole') {
      const bandKey = age <= 40 ? '18-40' : age <= 50 ? '41-50' : age <= 60 ? '51-60' : '61-70'
      const rate = wholeLifeRates[bandKey] * termMultipliers.tobacco[tobacco] * termMultipliers.gender[gender]
      monthly = (rate * (coverage / 1000)) / 12
    } else {
      const bandKey = age <= 60 ? '50-60' : age <= 70 ? '61-70' : '71-85'
      const rate = finalExpenseRates[bandKey] * termMultipliers.tobacco[tobacco] * termMultipliers.gender[gender]
      monthly = (rate * (coverage / 1000)) / 12
    }
  }

  const reset = () => { setStep(0); setGender(''); setHealth(''); setTobacco('') }

  // Fire a conversion event when the user reaches their estimate
  const goToResults = () => {
    if (!canNext) return
    trackEvent('quote_completed', {
      policy_type: policyType,
      term_length: policyType === 'term' ? term : null,
      coverage_amount: policyType === 'final' ? Math.min(coverage, 50000) : coverage,
    })
    setStep(3)
  }

  return (
    <>
      <SEO
        title="Free Life Insurance Quote | Buckalew Financial Services"
        description="Get an instant life insurance estimate in under two minutes. Compare term, whole, and final expense rates — no email required, no obligation."
        path="/quote"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Get a Quote</div>
          <h1>Free Life Insurance Quote</h1>
          <p>
            Answer a few quick questions for an instant estimate.
            No email required, no obligation — just real numbers.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="wizard">
            <div className="wizard-progress">
              <div className="wizard-progress-bar"
                style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
            </div>

            <div className="wizard-body">
              {/* Step 0 */}
              {step === 0 && (
                <>
                  <div className="wizard-step-label">Step 1 of 4</div>
                  <h2>Tell us about yourself</h2>

                  <div className="field">
                    <label>Your Age: <span className="range-value">{age}</span></label>
                    <input type="range" min="18" max="85" value={age}
                      onChange={(e) => setAge(+e.target.value)} />
                  </div>

                  <div className="field">
                    <label>Gender (for rating purposes)</label>
                    <div className="option-grid">
                      <OptionTile selected={gender === 'male'} onClick={() => setGender('male')}>Male</OptionTile>
                      <OptionTile selected={gender === 'female'} onClick={() => setGender('female')}>Female</OptionTile>
                    </div>
                  </div>
                </>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <>
                  <div className="wizard-step-label">Step 2 of 4</div>
                  <h2>Your health profile</h2>

                  <div className="field">
                    <label>Overall Health</label>
                    <div className="option-grid">
                      <OptionTile selected={health === 'Preferred Plus'} onClick={() => setHealth('Preferred Plus')}>
                        Excellent<small>No major issues, ideal vitals</small>
                      </OptionTile>
                      <OptionTile selected={health === 'Preferred'} onClick={() => setHealth('Preferred')}>
                        Very Good<small>Minor, well-controlled issues</small>
                      </OptionTile>
                      <OptionTile selected={health === 'Standard'} onClick={() => setHealth('Standard')}>
                        Average<small>Some managed conditions</small>
                      </OptionTile>
                      <OptionTile selected={health === 'Fair'} onClick={() => setHealth('Fair')}>
                        Needs Review<small>Multiple conditions</small>
                      </OptionTile>
                    </div>
                  </div>

                  <div className="field">
                    <label>Have you used tobacco in the last 12 months?</label>
                    <div className="option-grid">
                      <OptionTile selected={tobacco === 'no'} onClick={() => setTobacco('no')}>No</OptionTile>
                      <OptionTile selected={tobacco === 'yes'} onClick={() => setTobacco('yes')}>Yes</OptionTile>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <div className="wizard-step-label">Step 3 of 4</div>
                  <h2>Coverage preferences</h2>

                  <div className="field">
                    <label>Policy Type</label>
                    <div className="option-grid">
                      <OptionTile selected={policyType === 'term'} onClick={() => setPolicyType('term')}>
                        Term Life<small>10–30 year protection</small>
                      </OptionTile>
                      <OptionTile selected={policyType === 'whole'} onClick={() => setPolicyType('whole')}>
                        Whole Life<small>Lifetime + cash value</small>
                      </OptionTile>
                      <OptionTile selected={policyType === 'final'} onClick={() => setPolicyType('final')}>
                        Final Expense<small>$5K–$50K, no exam</small>
                      </OptionTile>
                    </div>
                  </div>

                  {policyType === 'term' && (
                    <div className="field">
                      <label>Term Length</label>
                      <div className="option-grid">
                        {['10', '15', '20', '30'].map((t) => (
                          <OptionTile key={t} selected={term === t} onClick={() => setTerm(t)}>
                            {t} Years
                          </OptionTile>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="field">
                    <label>
                      Coverage Amount:{' '}
                      <span className="range-value">{fmt(policyType === 'final' ? Math.min(coverage, 50000) : coverage)}</span>
                    </label>
                    <input
                      type="range"
                      min={policyType === 'final' ? 5000 : 100000}
                      max={policyType === 'final' ? 50000 : 2000000}
                      step={policyType === 'final' ? 1000 : 25000}
                      value={policyType === 'final' ? Math.min(coverage, 50000) : coverage}
                      onChange={(e) => setCoverage(+e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Step 3 — Results */}
              {step === 3 && monthly != null && (
                <>
                  <div className="wizard-step-label">Step 4 of 4 · Your Estimate</div>
                  <div className="quote-result">
                    <div className="amount">{fmt(monthly)}</div>
                    <p className="per">estimated monthly premium</p>

                    <div className="result-breakdown">
                      <div>Policy Type <b>{policyType === 'term' ? `Term (${term} yr)` : policyType === 'whole' ? 'Whole Life' : 'Final Expense'}</b></div>
                      <div>Coverage <b>{fmt(policyType === 'final' ? Math.min(coverage, 50000) : coverage)}</b></div>
                      <div>Age / Gender <b>{age} · {gender}</b></div>
                      <div>Health Class <b>{health}</b></div>
                      <div>Tobacco Use <b>{tobacco === 'yes' ? 'Yes' : 'No'}</b></div>
                      <div>Total Over Term <b>{fmt(monthly * (policyType === 'term' ? +term * 12 : 240))}</b></div>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 22 }}>
                      This is an illustrative estimate only — actual rates depend on
                      full underwriting. An advisor can confirm your best carrier match
                      and lock in a binding quote.
                    </p>

                    <div className="flex-center" style={{ justifyContent: 'center' }}>
                      <Link to="/contact" className="btn btn-primary">Confirm With an Advisor →</Link>
                      <button className="btn btn-outline" onClick={reset}>Start Over</button>
                    </div>
                  </div>
                </>
              )}

              {/* Nav buttons */}
              {step < 3 && (
                <div className="wizard-nav">
                  <button className="btn btn-outline" disabled={step === 0}
                    style={{ opacity: step === 0 ? 0.4 : 1 }}
                    onClick={() => setStep(step - 1)}>
                    ← Back
                  </button>
                  <button className="btn btn-primary" disabled={!canNext}
                    style={{ opacity: canNext ? 1 : 0.5 }}
                    onClick={goToResults}>
                    Continue →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}