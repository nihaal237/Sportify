import React, { useState } from 'react';

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
      letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff3d3d',
      border: '1px solid rgba(255,61,61,0.35)', padding: '0.25rem 0.8rem', marginBottom: '1.2rem',
    }}>{children}</span>
  );
}

function MetricBox({ label, value, sub, accent = false }) {
  return (
    <div style={{ background: '#0e0e1a', border: `1px solid ${accent ? 'rgba(255,61,61,0.25)' : 'rgba(255,255,255,0.07)'}`, padding: '1.5rem' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6b6b8a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: accent ? '#ff3d3d' : '#f0f0f0', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: '0.75rem', color: '#6b6b8a', marginTop: '0.4rem' }}>{sub}</div>}
    </div>
  );
}

export default function Investors() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'cashflow', label: 'Cash Flow' },
    { id: 'appraisal', label: 'Investment Appraisal' },
    { id: 'balance', label: 'Balance Sheet' },
  ];

  const cashflow = [
    { month: 'M1', revenue: 0, expenses: 9000, balance: 491000 },
    { month: 'M2', revenue: 0, expenses: 9000, balance: 482000 },
    { month: 'M3', revenue: 0, expenses: 9000, balance: 473000 },
    { month: 'M4', revenue: 0, expenses: 9000, balance: 464000 },
    { month: 'M5', revenue: 0, expenses: 9000, balance: 455000 },
    { month: 'M6', revenue: 360, expenses: 6360, balance: 449360 },
    { month: 'M7', revenue: 468, expenses: 10500, balance: 439328 },
    { month: 'M8', revenue: 850, expenses: 10500, balance: 430678 },
    { month: 'M9–12', revenue: 1800, expenses: 11500, balance: 422000 },
  ];

  const appraisal = [
    { year: 1, revenue: 10600, expenses: 144600, netCF: -134000, discFactor: 0.870, pv: -116580 },
    { year: 2, revenue: 80000, expenses: 180000, netCF: -100000, discFactor: 0.756, pv: -75600 },
    { year: 3, revenue: 350000, expenses: 220000, netCF: 130000, discFactor: 0.658, pv: 85540 },
    { year: 4, revenue: 630000, expenses: 280000, netCF: 350000, discFactor: 0.572, pv: 200200 },
    { year: 5, revenue: 950000, expenses: 350000, netCF: 600000, discFactor: 0.497, pv: 298200 },
  ];

  const expenses = [
    { category: 'R&D / Product Development', annual: 75600, pct: 52 },
    { category: 'Marketing & Sales', annual: 23400, pct: 16 },
    { category: 'Operational Expenses', annual: 35400, pct: 24 },
    { category: 'Miscellaneous / Contingency', annual: 10200, pct: 7 },
  ];

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{ padding: '5rem 2.5rem 3rem', background: '#0e0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Investor Relations</Tag>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95 }}>
            FINANCIAL<br /><span style={{ color: '#ff3d3d' }}>OVERVIEW</span>
          </h1>
          <p style={{ color: '#8888aa', marginTop: '1.2rem', maxWidth: '500px', lineHeight: 1.7 }}>
            Sportify's financials are based on a Y-Combinator seed round of USD 500,000. All projections use conservative assumptions with a 15% startup risk discount rate.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <section style={{ padding: '4rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          <MetricBox label="YC Seed Funding" value="$500K" sub="USD @ 1 USD = PKR 278" accent />
          <MetricBox label="Post-Money Valuation" value="~$7.1M" sub="Implied from 7% equity" />
          <MetricBox label="Runway" value="44.8 mo" sub="≈ 3.7 years" />
          <MetricBox label="Monthly Burn (avg)" value="$11.2K" sub="Net of revenue" />
          <MetricBox label="Year 1 Cash Remaining" value="$366K" sub="End of FY 2026" />
          <MetricBox label="Working Capital Ratio" value="24.8×" sub="Current assets / liabilities" accent />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '2.5rem', overflowX: 'auto' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              background: 'none', border: 'none', padding: '0.8rem 1.5rem', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 500,
              color: activeTab === t.id ? '#ff3d3d' : '#6b6b8a',
              borderBottom: activeTab === t.id ? '2px solid #ff3d3d' : '2px solid transparent',
              marginBottom: '-1px', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Tab: Overview */}
        {activeTab === 'overview' && (
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>ANNUAL EXPENSE BREAKDOWN (USD)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '3rem' }}>
              {expenses.map((e, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#d0d0d0' }}>{e.category}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#ff3d3d' }}>${e.annual.toLocaleString()}</span>
                  </div>
                  <div style={{ background: '#0e0e1a', height: '6px', borderRadius: '2px' }}>
                    <div style={{ width: `${e.pct}%`, height: '100%', background: `linear-gradient(90deg, #ff3d3d, #ff7c1f)`, borderRadius: '2px', transition: 'width 0.8s ease' }} />
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.05em' }}>TOTAL ANNUAL EXPENSES</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem', color: '#ff3d3d' }}>$144,600</span>
              </div>
            </div>

            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>FINANCIAL ASSUMPTIONS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
              {[
                ['Exchange Rate', '1 USD = PKR 278 (fixed)'],
                ['Revenue Start', 'Month 6 (beta launch)'],
                ['Pricing', 'PKR 500/mo ≈ USD 1.80 premium'],
                ['Year 1 Target Users', '200 paying @ M6, +30%/mo'],
                ['Tax Rate', '29% Pakistan corporate (from Y2)'],
                ['Depreciation', 'Straight-line, 3 years'],
                ['Co-founder Salaries', 'No salaries Y1; stipends from M7'],
                ['Office', 'Remote Y1; co-working from M7'],
              ].map(([k, v]) => (
                <div key={k} style={{ background: '#07070d', padding: '1rem 1.2rem' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>{k.toUpperCase()}</div>
                  <div style={{ fontSize: '0.84rem', color: '#d0d0d0', marginTop: '0.25rem' }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#0e0e1a', border: '1px solid rgba(255,215,0,0.2)', borderLeft: '3px solid #ffd700', padding: '1.5rem' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: '#ffd700', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>⚠ LIQUIDITY RISK FACTORS</div>
              <ul style={{ color: '#8888aa', fontSize: '0.84rem', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                <li>Revenue ramp slow in Y1–Y2 (freemium model); if conversion &lt;5%, revenue may miss by 40%</li>
                <li>Premature content licensing could create fixed-cost obligations before sufficient DAUs</li>
                <li>Currency risk: USD funding vs PKR operating expenses</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab: Cash Flow */}
        {activeTab === 'cashflow' && (
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>MONTHLY CASH FLOW — YEAR 1 (USD)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {['Month', 'Revenue', 'Expenses', 'Net Flow', 'Closing Balance'].map(h => (
                      <th key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', color: '#6b6b8a', textAlign: 'left', padding: '0.7rem 1rem', textTransform: 'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cashflow.map((r, i) => {
                    const net = r.revenue - r.expenses;
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <td style={{ padding: '0.8rem 1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#ff3d3d' }}>{r.month}</td>
                        <td style={{ padding: '0.8rem 1rem', fontSize: '0.84rem', color: r.revenue > 0 ? '#4ade80' : '#6b6b8a' }}>${r.revenue.toLocaleString()}</td>
                        <td style={{ padding: '0.8rem 1rem', fontSize: '0.84rem', color: '#d0d0d0' }}>${r.expenses.toLocaleString()}</td>
                        <td style={{ padding: '0.8rem 1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: net < 0 ? '#ff6b6b' : '#4ade80' }}>{net < 0 ? '-' : '+'}${Math.abs(net).toLocaleString()}</td>
                        <td style={{ padding: '0.8rem 1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#f0f0f0' }}>${r.balance.toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: '2rem', background: '#0e0e1a', border: '1px solid rgba(255,61,61,0.15)', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              {[['Initial Funding', '$500,000'], ['Total Y1 Burn', '$144,600'], ['Monthly Avg Burn', '$12,050'], ['Monthly Revenue Avg', '~$885'], ['Net Monthly Burn', '~$11,165'], ['Runway', '~44.8 months']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>{k.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#ff3d3d' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Investment Appraisal */}
        {activeTab === 'appraisal' && (
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>5-YEAR INVESTMENT APPRAISAL</h3>
            <p style={{ color: '#6b6b8a', fontSize: '0.82rem', marginBottom: '1.5rem' }}>Discount rate: 15% (startup risk premium) | Revenue CAGR: 250% Y1–Y3, 80% Y4, 50% Y5</p>
            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {['Year', 'Revenue', 'Expenses', 'Net Cash Flow', 'Disc. Factor (15%)', 'Present Value'].map(h => (
                      <th key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.08em', color: '#6b6b8a', textAlign: 'left', padding: '0.7rem 0.8rem', textTransform: 'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {appraisal.map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: r.netCF > 0 ? 'rgba(74,222,128,0.03)' : 'transparent' }}>
                      <td style={{ padding: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#ff3d3d' }}>Year {r.year}</td>
                      <td style={{ padding: '0.8rem', fontSize: '0.84rem', color: '#d0d0d0' }}>${r.revenue.toLocaleString()}</td>
                      <td style={{ padding: '0.8rem', fontSize: '0.84rem', color: '#d0d0d0' }}>${r.expenses.toLocaleString()}</td>
                      <td style={{ padding: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: r.netCF < 0 ? '#ff6b6b' : '#4ade80' }}>{r.netCF < 0 ? '-' : '+'}${Math.abs(r.netCF).toLocaleString()}</td>
                      <td style={{ padding: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#8888aa' }}>{r.discFactor}</td>
                      <td style={{ padding: '0.8rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: r.pv < 0 ? '#ff6b6b' : '#4ade80' }}>{r.pv < 0 ? '-' : '+'}${Math.abs(r.pv).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { label: 'NPV (5-Year)', value: '-$108,240', note: 'Turns positive ~Year 6', color: '#ff6b6b' },
                { label: 'IRR (5-Year)', value: '~11.8%', note: 'Close to 15% discount rate breakeven', color: '#ffd700' },
                { label: 'Payback Period', value: '~4.2 years', note: 'Within a 5-year horizon', color: '#8888aa' },
                { label: 'Verdict', value: 'Compelling', note: '10–20× revenue exit multiple at 7–10yr', color: '#4ade80' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)', padding: '1.2rem' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#6b6b8a', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{m.label.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: m.color, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b6b8a', marginTop: '0.4rem' }}>{m.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Balance Sheet */}
        {activeTab === 'balance' && (
          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>BALANCE SHEET</h3>
            <p style={{ color: '#6b6b8a', fontSize: '0.82rem', marginBottom: '2rem' }}>As of April 15, 2026 (USD)</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="bs-grid">
              {/* Assets */}
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.08em', color: '#ff3d3d', marginBottom: '1rem', borderBottom: '1px solid rgba(255,61,61,0.2)', paddingBottom: '0.5rem' }}>ASSETS</div>
                {[
                  { label: 'Current Assets', isHeader: true },
                  { label: 'Cash & Cash Equivalents', value: '$355,400' },
                  { label: 'Accounts Receivable', value: '$5,200' },
                  { label: 'Prepaid Expenses', value: '$2,400' },
                  { label: 'Total Current Assets', value: '$363,000', isBold: true },
                  { label: 'Non-Current Assets', isHeader: true },
                  { label: 'Equipment (at cost)', value: '$19,000' },
                  { label: 'Less: Accumulated Depreciation', value: '-$6,067' },
                  { label: 'Net Book Value', value: '$12,933', isBold: true },
                  { label: 'TOTAL ASSETS', value: '$375,933', isTotal: true },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: r.isHeader || r.isTotal ? 'block' : 'flex',
                    justifyContent: 'space-between',
                    padding: r.isHeader ? '0.8rem 0 0.3rem' : '0.4rem 0',
                    borderBottom: r.isTotal ? '2px solid rgba(255,61,61,0.3)' : 'none',
                    fontFamily: r.isTotal ? "'Bebas Neue', sans-serif" : "'DM Sans', sans-serif",
                  }}>
                    <span style={{ fontSize: r.isHeader ? '0.7rem' : r.isTotal ? '1rem' : '0.83rem', color: r.isHeader ? '#6b6b8a' : r.isTotal ? '#ff3d3d' : '#d0d0d0', letterSpacing: r.isHeader ? '0.1em' : 0, fontWeight: r.isBold ? 600 : 400 }}>{r.isHeader ? r.label.toUpperCase() : r.label}</span>
                    {r.value && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: r.isTotal ? '1rem' : '0.8rem', color: r.isTotal ? '#ff3d3d' : '#f0f0f0', fontWeight: r.isBold ? 700 : 400 }}>{r.value}</span>}
                  </div>
                ))}
              </div>

              {/* Liabilities & Equity */}
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.08em', color: '#ff3d3d', marginBottom: '1rem', borderBottom: '1px solid rgba(255,61,61,0.2)', paddingBottom: '0.5rem' }}>LIABILITIES & EQUITY</div>
                {[
                  { label: 'Current Liabilities', isHeader: true },
                  { label: 'Accounts Payable', value: '$8,500' },
                  { label: 'Accrued Salaries', value: '$4,000' },
                  { label: 'Deferred Revenue', value: '$2,400' },
                  { label: 'Total Current Liabilities', value: '$14,900', isBold: true },
                  { label: 'Long-Term Liabilities', value: '$0', isBold: true },
                  { label: "Shareholders' Equity", isHeader: true },
                  { label: 'Share Capital (YC Investment)', value: '$500,000' },
                  { label: 'Retained Earnings (Net Loss Y1)', value: '-$138,967' },
                  { label: "Total Shareholders' Equity", value: '$361,033', isBold: true },
                  { label: 'TOTAL LIABILITIES & EQUITY', value: '$375,933', isTotal: true },
                ].map((r, i) => (
                  <div key={i} style={{
                    display: r.isHeader || r.isTotal ? 'block' : 'flex',
                    justifyContent: 'space-between',
                    padding: r.isHeader ? '0.8rem 0 0.3rem' : '0.4rem 0',
                    borderBottom: r.isTotal ? '2px solid rgba(255,61,61,0.3)' : 'none',
                    fontFamily: r.isTotal ? "'Bebas Neue', sans-serif" : "'DM Sans', sans-serif",
                  }}>
                    <span style={{ fontSize: r.isHeader ? '0.7rem' : r.isTotal ? '1rem' : '0.83rem', color: r.isHeader ? '#6b6b8a' : r.isTotal ? '#ff3d3d' : '#d0d0d0', letterSpacing: r.isHeader ? '0.1em' : 0, fontWeight: r.isBold ? 600 : 400 }}>{r.isHeader ? r.label.toUpperCase() : r.label}</span>
                    {r.value && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: r.isTotal ? '1rem' : '0.8rem', color: r.isTotal ? '#ff3d3d' : '#f0f0f0', fontWeight: r.isBold ? 700 : 400 }}>{r.value}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.2)', padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.2rem' }}>✓</span>
              <span style={{ fontSize: '0.84rem', color: '#4ade80' }}>Balance sheet confirmed: Total Assets ($375,933) = Total Liabilities + Equity ($14,900 + $361,033)</span>
            </div>
            <style>{`@media(max-width:640px){.bs-grid{grid-template-columns:1fr!important;}}`}</style>
          </div>
        )}
      </section>

      {/* Recommendations */}
      <section style={{ background: '#0a0a14', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Strategic Recommendations</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>EXTENDING RUNWAY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏢', title: 'Delay Office Lease', desc: 'Delay physical office to Month 10 (saving $1,500). Remain remote-first through beta launch.' },
              { icon: '💳', title: 'Subscriptions First', desc: 'Prioritize subscription revenue over sponsorships. Predictable, compounding income before audience base proven.' },
              { icon: '🏛️', title: 'IGNITE Grants', desc: 'Apply for IGNITE Pakistan grants (up to PKR 5M ≈ $18K) and SECP startup programs — zero equity dilution.' },
              { icon: '🔒', title: 'Cash Reserve Floor', desc: 'Maintain minimum 3-month cash reserve ($33,495). If projected cash drops below this, trigger Series A immediately.' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem', letterSpacing: '0.04em', color: '#f0f0f0', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ color: '#6b6b8a', fontSize: '0.84rem', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
