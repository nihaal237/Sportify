import React from 'react';

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.68rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#ff3d3d',
      border: '1px solid rgba(255,61,61,0.35)',
      padding: '0.25rem 0.8rem',
      marginBottom: '1.2rem',
    }}>{children}</span>
  );
}

function MetricCell({ label, value, sub, accent }) {
  return (
    <div style={{
      background: accent ? '#0f0a0a' : '#0e0e1a',
      padding: '1.6rem 1.4rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = accent ? '#130b0b' : '#111122'}
      onMouseLeave={e => e.currentTarget.style.background = accent ? '#0f0a0a' : '#0e0e1a'}
    >
      {accent && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, #ff3d3d, #ff7c1f)',
        }} />
      )}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
        letterSpacing: '0.12em', color: '#6b6b8a', textTransform: 'uppercase', marginBottom: '0.5rem',
      }}>{label}</div>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.3rem',
        lineHeight: 1, color: accent ? '#ff3d3d' : '#f0f0f0',
      }}>{value}</div>
      {sub && <div style={{ fontSize: '0.72rem', color: '#6b6b8a', marginTop: '0.35rem' }}>{sub}</div>}
    </div>
  );
}

function ShareCard({ title, badge, badgeStyle, details }) {
  const badgeStyles = {
    yc: { background: 'rgba(255,61,61,0.15)', color: '#ff3d3d', border: '1px solid rgba(255,61,61,0.3)' },
    founder: { background: 'rgba(255,215,0,0.1)', color: '#ffd700', border: '1px solid rgba(255,215,0,0.25)' },
    esop: { background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)' },
  };

  return (
    <div style={{
      background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', letterSpacing: '0.05em', color: '#f0f0f0' }}>
          {title}
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
          padding: '0.2rem 0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase',
          borderRadius: '2px', ...badgeStyles[badgeStyle],
        }}>{badge}</span>
      </div>
      {details.map(([key, val], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0',
          borderBottom: i < details.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}>
          <span style={{ fontSize: '0.78rem', color: '#8888aa' }}>{key}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.76rem', color: '#d0d0d0' }}>{val}</span>
        </div>
      ))}
    </div>
  );
}

export default function Investors() {
  const metrics = [
    { label: 'YC Seed Round', value: '$500K', sub: 'USD — Closed', accent: true },
    { label: 'Post-Money Valuation', value: '~$7.1M', sub: 'Implied at 7% equity' },
    { label: 'Runway', value: '44.8 mo', sub: '≈ 3.7 years' },
    { label: 'Stage', value: 'Seed', sub: 'Pre-Series A' },
    { label: 'Next Milestone', value: 'Series A', sub: 'Targeting Y2 — 2027', accent: true },
  ];

  const shares = [
    {
      title: 'Series Seed', badge: 'YC Investors', badgeStyle: 'yc',
      details: [
        ['Equity', '7%'],
        ['Investment', '$500,000 USD'],
        ['Instrument', 'SAFE / Preferred'],
        ['Liquidation', '1× non-participating'],
      ],
    },
    {
      title: 'Founders', badge: 'Common', badgeStyle: 'founder',
      details: [
        ['Equity', '87%'],
        ['Vesting', '4 yr / 1 yr cliff'],
        ['Class', 'Common Stock'],
        ['Anti-dilution', 'Broad-based weighted avg'],
      ],
    },
    {
      title: 'ESOP Pool', badge: 'Team', badgeStyle: 'esop',
      details: [
        ['Reserved', '6%'],
        ['Vesting', '3–4 yr standard'],
        ['Purpose', 'Key hires & advisors'],
        ['Board approval', 'Required per grant'],
      ],
    },
  ];

  return (
    <main style={{ paddingTop: '68px', background: '#080810', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{
        padding: '5rem 2.5rem 4rem',
        background: '#0e0e1a',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(255,61,61,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Tag>Investor Relations</Tag>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
            lineHeight: 0.92,
            marginBottom: '1.4rem',
            color: '#f0f0f0',
          }}>
            BUILT TO<br /><span style={{ color: '#ff3d3d' }}>SCALE.</span>
          </h1>
          <p style={{ color: '#8888aa', maxWidth: '480px', lineHeight: 1.75, fontSize: '0.95rem' }}>
            Sportify is backed by a Y-Combinator seed round. We're building the sports content platform for a global audience — and we're open to conversations with aligned investors.
          </p>
        </div>
      </div>

      {/* KEY METRICS */}
      <section style={{ padding: '3.5rem 2.5rem 0', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {metrics.map((m, i) => (
            <MetricCell key={i} {...m} />
          ))}
        </div>
      </section>

      {/* SHARE STRUCTURE */}
      <section style={{ padding: '3.5rem 2.5rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem',
          letterSpacing: '0.05em', marginBottom: '1.4rem', color: '#f0f0f0',
        }}>SHARE STRUCTURE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {shares.map((s, i) => <ShareCard key={i} {...s} />)}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: '#07070d', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2.5rem' }}>
        <div
          className="cta-inner"
          style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: '3rem', alignItems: 'center',
          }}
        >
          <div>
            <Tag>Investor Deck</Tag>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 0.95, marginBottom: '0.9rem', color: '#f0f0f0',
            }}>
              INTERESTED IN<br />SPORTIFY?
            </h2>
            <p style={{ color: '#8888aa', maxWidth: '420px', lineHeight: 1.75, fontSize: '0.9rem' }}>
              Our full investor deck covers unit economics, market sizing, revenue model, and 5-year
              projections. Reach out and we'll be in touch within 48 hours.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
            <button
              style={{
                background: '#ff3d3d', color: '#fff', border: 'none',
                padding: '0.9rem 2.2rem', fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem', letterSpacing: '0.08em', cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e02020'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ff3d3d'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              REQUEST INVESTOR DECK
            </button>
            <button
              style={{
                background: 'transparent', color: '#8888aa',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.85rem 2.2rem', fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.85rem', cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#d0d0d0'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#8888aa'; }}
            >
              Schedule a Call
            </button>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem',
              color: '#4b4b6a', letterSpacing: '0.08em', textAlign: 'right',
            }}>
              investors@sportify.pk
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div style={{ padding: '2rem 2.5rem', maxWidth: '1100px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p style={{ fontSize: '0.72rem', color: '#4b4b6a', lineHeight: 1.7 }}>
          This page is for informational purposes only and does not constitute an offer to sell or a
          solicitation of an offer to buy any securities. Forward-looking statements reflect
          management's current expectations and are subject to risks and uncertainties.
        </p>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .cta-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </main>
  );
}