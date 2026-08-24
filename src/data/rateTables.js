// Simplified illustrative rate tables for the client-side quote estimator.
// Base annual premium per $1,000 of coverage for a 20-year term policy,
// by age band and health class. These are estimates only, not real quotes.

export const termRates = {
  // ageBand: [Preferred Plus, Preferred, Standard, Fair]
  '18-30': [0.55, 0.68, 0.95, 1.45],
  '31-40': [0.72, 0.92, 1.35, 2.05],
  '41-50': [1.25, 1.62, 2.45, 3.75],
  '51-60': [2.45, 3.15, 4.85, 7.20],
  '61-70': [5.10, 6.55, 9.80, 14.50],
}

// Multipliers applied to the base rate
export const termMultipliers = {
  tobacco: { yes: 2.1, no: 1.0 },
  gender: { male: 1.12, female: 1.0 },
  term: { '10': 0.72, '15': 0.86, '20': 1.0, '30': 1.45 },
}

export const wholeLifeRates = {
  '18-40': 3.8,
  '41-50': 6.2,
  '51-60': 10.5,
  '61-70': 17.8,
}

export const finalExpenseRates = {
  '50-60': 1.15,
  '61-70': 1.95,
  '71-85': 3.40,
}

export function getAgeBand(age) {
  if (age <= 30) return '18-30'
  if (age <= 40) return '31-40'
  if (age <= 50) return '41-50'
  if (age <= 60) return '51-60'
  if (age <= 70) return '61-70'
  return null
}