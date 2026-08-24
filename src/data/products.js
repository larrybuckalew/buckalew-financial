export const products = [
  {
    id: 'term-life',
    icon: '🛡️',
    name: 'Term Life Insurance',
    tagline: 'Affordable protection for a set period of time.',
    short:
      'Straightforward, budget-friendly coverage that protects your family for 10, 20, or 30 years — ideal for covering mortgages, income replacement, and growing-family needs.',
    description:
      'Term life insurance provides coverage for a specific period — typically 10, 15, 20, or 30 years. If you pass away during the term, your beneficiaries receive a tax-free death benefit. Term life offers the largest coverage amounts at the lowest initial cost, making it the most popular choice for young families, homeowners, and anyone who needs substantial protection while their financial obligations are highest.',
    features: [
      'Level premiums that never increase during your term',
      'Coverage amounts from $100,000 to $5 million+',
      'Convertible to permanent coverage without a medical exam',
      'Optional riders: child term, waiver of premium, accelerated death benefit',
      'Return-of-premium options available from select carriers',
    ],
    specs: [
      ['Best For', 'Young families, mortgage protection'],
      ['Typical Terms', '10 / 15 / 20 / 25 / 30 years'],
      ['Premiums', 'Lowest initial cost'],
      ['Cash Value', 'None'],
      ['Medical Exam', 'Often required (no-exam options available)'],
    ],
    startingPrice: 'from $18/mo',
  },
  {
    id: 'whole-life',
    icon: '🏛️',
    name: 'Whole Life Insurance',
    tagline: 'Lifelong protection with guaranteed cash value.',
    short:
      'Permanent coverage that lasts your entire life with guaranteed cash value growth, fixed premiums, and potential dividends — a cornerstone of long-term financial planning.',
    description:
      'Whole life insurance is permanent coverage designed to last your entire lifetime as long as premiums are paid. It combines a guaranteed death benefit with a cash value component that grows at a guaranteed rate on a tax-deferred basis. Premiums are level for life, and many participating policies pay annual dividends that can be taken as cash, used to reduce premiums, or purchase additional paid-up insurance.',
    features: [
      'Guaranteed lifelong coverage — never expires',
      'Guaranteed cash value accumulation you can borrow against',
      'Fixed, predictable premiums for life',
      'Potential dividend payments from participating carriers',
      'Estate planning and legacy benefits, including tax advantages',
    ],
    specs: [
      ['Best For', 'Legacy planning, estate strategies'],
      ['Duration', 'Your entire lifetime'],
      ['Premiums', 'Higher, but fixed for life'],
      ['Cash Value', 'Yes — guaranteed growth'],
      ['Dividends', 'Available on participating policies'],
    ],
    startingPrice: 'from $95/mo',
  },
  {
    id: 'universal-life',
    icon: '📈',
    name: 'Universal Life Insurance',
    tagline: 'Flexible permanent coverage that adapts to you.',
    short:
      'Adjustable permanent life insurance with flexible premiums and death benefits, plus cash value tied to current interest rates or index performance.',
    description:
      'Universal life insurance offers permanent protection with unmatched flexibility. You can adjust your premium payments and death benefit as your needs change, and your policy builds cash value based on interest crediting. Indexed universal life (IUL) policies link cash value growth to a market index like the S&P 500 with downside protection, offering greater growth potential than traditional universal life.',
    features: [
      'Flexible premiums — pay more or less within policy limits',
      'Adjustable death benefit as your needs evolve',
      'Indexed Universal Life (IUL) options with market-linked growth',
      'Tax-advantaged cash value for supplemental retirement income',
      'Policy loans and withdrawals for financial flexibility',
    ],
    specs: [
      ['Best For', 'Flexible planning, retirement supplement'],
      ['Duration', 'Lifetime (flexible)'],
      ['Premiums', 'Adjustable within limits'],
      ['Cash Value', 'Interest or index-linked growth'],
      ['Complexity', 'Moderate — best with advisor guidance'],
    ],
    startingPrice: 'from $75/mo',
  },
  {
    id: 'final-expense',
    icon: '🕊️',
    name: 'Final Expense Insurance',
    tagline: 'Peace of mind for your loved ones, simplified.',
    short:
      'A smaller whole life policy designed specifically to cover funeral costs, medical bills, and other end-of-life expenses — with easy approval and no medical exam.',
    description:
      'Final expense insurance (sometimes called burial insurance) is a small whole life policy, typically $5,000–$50,000, created to cover funeral and burial costs, outstanding medical bills, and other final obligations. Underwriting is simple — most applicants qualify without a medical exam — and benefits are paid quickly so your family is not left scrambling during a difficult time.',
    features: [
      'No medical exam required — simple health questions only',
      'Guaranteed-issue options even for serious health conditions',
      'Quick benefit payout to cover funeral and final bills',
      'Fixed premiums that never increase',
      'Ages 50–85 generally eligible',
    ],
    specs: [
      ['Best For', 'Seniors, funeral planning'],
      ['Coverage Range', '$5,000 – $50,000'],
      ['Premiums', 'Affordable, fixed for life'],
      ['Medical Exam', 'Not required'],
      ['Approval Speed', 'As fast as same-day'],
    ],
    startingPrice: 'from $32/mo',
  },
  {
    id: 'group-life',
    icon: '👥',
    name: 'Group & Business Life',
    tagline: 'Protect your team and your business.',
    short:
      'Employer-sponsored group life coverage and business solutions including key person insurance, buy-sell funding, and executive bonus plans.',
    description:
      'Group life insurance through an employer provides affordable baseline coverage for employees, often with guaranteed acceptance. Beyond basic group plans, we help businesses implement key person insurance to protect against the loss of a critical employee, buy-sell agreement funding to ensure smooth ownership transitions, and executive bonus (COLI) arrangements to attract and retain top talent.',
    features: [
      'Employer-paid or voluntary employee-pay group plans',
      'Key person insurance to protect business continuity',
      'Buy-sell agreement funding for partnerships',
      'Executive bonus plans (Section 162) for retention',
      'Simplified enrollment and administration support',
    ],
    specs: [
      ['Best For', 'Business owners, HR teams'],
      ['Plan Types', 'Group term, voluntary, key person'],
      ['Underwriting', 'Simplified / guaranteed issue'],
      ['Cost Sharing', 'Employer, employee, or split'],
      ['Administration', 'Full service support included'],
    ],
    startingPrice: 'custom quote',
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)