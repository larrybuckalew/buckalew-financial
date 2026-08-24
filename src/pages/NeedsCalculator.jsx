import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const fmt = (n) => '$' + Math.round(n).toLocaleString()

export default function NeedsCalculator() {
  const [income, setIncome] = useState(75000)
  const [years, setYears] = useState(15)
  const [mortgage, setMortgage] = useState(250000)
  const [debts, setDebts] = useState(30000)
  const [education, setEducation] = useState(100000)
  const [finalExpenses, setFinalExpenses] = useState(15000)
  const [existing, setExisting] = useState(50000)
  const [savings, setSavings] = useState(40000)

  const incomeNeed = income * years
  const gross = incomeNeed + mortgage + debts + education + finalExpenses
  const net = Math.max(gross - existing - savings, 0)

  return (
    <>
      <SEO
        title="How Much Life Insurance Do I Need? | Free Calculator"
        description="Free coverage needs calculator using the DIME method. Estimate how much life insurance your family needs based on income, debts, mortgage, education, and final expenses."
        path="/needs-calculator"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Home</Link> / Needs Calculator</div>
          <h1>How Much Coverage Do I Need?</h1>
          <p>
            Use the DIME method — Debt, Income, Mortgage, Education — to estimate
            your family's true coverage gap in about two minutes.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Inputs */}
            <div className="card" style={{ padding: '34px 30px' }}>
              <h3 style={{ marginBottom: 22 }}>Your Situation</h3>

              <div className="field">
                <label>Annual Income: <span className="range-value">{fmt(income)}</span></label>
                <input type="range" min="0" max="300000" step="5000" value={income}
                  onChange={(e) => setIncome(+e.target.value)} />
              </div>
              <div className="field">
                <label>Years of Income to Replace: <span className="range-value">{years}</span></label>
                <input type="range" min="1" max="40" value={years}
                  onChange={(e) => setYears(+e.target.value)} />
              </div>
              <div className="field">
                <label>Mortgage Balance: <span className="range-value">{fmt(mortgage)}</span></label>
                <input type="range" min="0" max="1500000" step="10000" value={mortgage}
                  onChange={(e) => setMortgage(+e.target.value)} />
              </div>
              <div className="field">
                <label>Other Debts: <span className="range-value">{fmt(debts)}</span></label>
                <input type="range" min="0" max="300000" step="5000" value={debts}
                  onChange={(e) => setDebts(+e.target.value)} />
              </div>
              <div className="field">
                <label>Children's Education: <span className="range-value">{fmt(education)}</span></label>
                <input type="range" min="0" max="600000" step="10000" value={education}
                  onChange={(e) => setEducation(+e.target.value)} />
              </div>
              <div className="field">
                <label>Final Expenses: <span className="range-value">{fmt(finalExpenses)}</span></label>
                <input type="range" min="5000" max="100000" step="1000" value={finalExpenses}
                  onChange={(e) => setFinalExpenses(+e.target.value)} />
              </div>
              <div className="field">
                <label>Existing Life Coverage: <span className="range-value">{fmt(existing)}</span></label>
                <input type="range" min="0" max="2000000" step="10000" value={existing}
                  onChange={(e) => setExisting(+e.target.value)} />
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label>Liquid Savings & Investments: <span className="range-value">{fmt(savings)}</span></label>
                <input type="range" min="0" max="2000000" step="10000" value={savings}
                  onChange={(e) => setSavings(+e.target.value)} />
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="wizard" style={{ maxWidth: 'none' }}>
                <div className="wizard-body">
                  <div className="quote-result">
                    <div className="wizard-step-label">Recommended Coverage</div>
                    <div className="amount">{fmt(net)}</div>
                    <p className="per">estimated coverage gap</p>

                    <div className="result-breakdown">
                      <div>Income Replacement <b>{fmt(incomeNeed)}</b></div>
                      <div>Mortgage Payoff <b>{fmt(mortgage)}</b></div>
                      <div>Other Debts <b>{fmt(debts)}</b></div>
                      <div>Education Fund <b>{fmt(education)}</b></div>
                      <div>Final Expenses <b>{fmt(finalExpenses)}</b></div>
                      <div>Less: Existing Resources <b>−{fmt(existing + savings)}</b></div>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 22 }}>
                      This estimate uses the widely-accepted DIME method. It is a
                      planning guideline, not financial advice — an advisor can refine
                      it for inflation, taxes, and your specific goals.
                    </p>

                    <div className="flex-center" style={{ justifyContent: 'center' }}>
                      <Link to="/quote" className="btn btn-primary">Price This Coverage →</Link>
                      <Link to="/contact" className="btn btn-outline">Discuss With Advisor</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}