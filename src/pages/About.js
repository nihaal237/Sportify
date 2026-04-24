import React from 'react';

function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
      letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff3d3d',
      border: '1px solid rgba(255,61,61,0.35)', padding: '0.25rem 0.8rem', marginBottom: '1.2rem',
    }}>{children}</span>
  );
}

function Section({ children, style = {} }) {
  return (
    <section style={{ padding: '5rem 2.5rem', maxWidth: '1200px', margin: '0 auto', ...style }}>
      {children}
    </section>
  );
}

export default function About() {
  const timeline = [
    { date: 'Jan 2026', event: 'Sportify LLC incorporated', note: 'Multi-founder LLC registered in Pakistan' },
    { date: 'Feb 2026', event: 'Y-Combinator Seed Round', note: '$500K secured; ~7% equity; $7.1M post-money valuation' },
    { date: 'Mar 2026', event: 'Core tech stack defined', note: 'WebSocket engine, React Native, AWS infrastructure' },
    { date: 'Apr 2026', event: 'Board formally constituted', note: '9-member board: 4 co-founders + 5 independent directors' },
    { date: 'May 2026', event: 'Alpha build begins', note: 'Contract engineering team onboarded' },
    { date: 'Q3 2026', event: 'Beta Launch (Target)', note: '200+ paying subscribers; Rival Rooms go live' },
  ];

  const values = [
    { title: 'Fan First', icon: '🏆', desc: 'Every decision starts with one question: does this make the fan experience better?' },
    { title: 'Radical Transparency', icon: '🔍', desc: 'Open governance, published financials, and a board structure that holds us accountable.' },
    { title: 'Built for Pakistan', icon: '🇵🇰', desc: 'Designed around cricket culture, Lahore-based, and compliant with PECA and SECP standards.' },
    { title: 'Move with Urgency', icon: '⚡', desc: '44-month runway means we have time to build right — but we still sprint like the clock is ticking.' },
  ];

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Page Hero */}
      <div style={{
        padding: '5rem 2.5rem 3rem',
        background: 'linear-gradient(180deg, #0e0e1a 0%, #07070d 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(255,61,61,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>About Sportify</Tag>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '0.02em' }}>
            THE COMPANY<br />
            <span style={{ color: '#ff3d3d' }}>BEHIND THE ROOMS</span>
          </h1>
        </div>
      </div>

      {/* Mission */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          <div>
            <Tag>Our Mission</Tag>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
              BRING BACK THE CROWD
            </h2>
            <p style={{ color: '#8888aa', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              Sportify is a <strong style={{ color: '#f0f0f0' }}>mobile-first social sports video streaming platform</strong> that enables sports enthusiasts to watch pre-recorded sports content together in synchronized virtual rooms.
            </p>
            <p style={{ color: '#8888aa', lineHeight: 1.85 }}>
              We replicate the thrill of communal sports viewing through real-time chat, emoji reactions, Rival Team Rooms, and friend-based watch parties — purpose-built for sports fans aged 16–35.
            </p>
          </div>
          <div style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)', padding: '2rem' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#6b6b8a', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>// COMPANY SNAPSHOT</div>
            {[
              ['Entity Type', 'Limited Liability Company (LLC)'],
              ['Headquarters', 'Lahore, Punjab, Pakistan'],
              ['Regulatory Body', 'SECP Pakistan'],
              ['Fiscal Year', 'January – December 2026'],
              ['Funding Source', 'Y-Combinator Seed Round'],
              ['Investment', 'USD 500,000 (≈ PKR 139M)'],
              ['Equity Issued', '~7% to Y-Combinator'],
              ['Valuation (Post-Money)', '~USD 7,142,857'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', gap: '1rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#6b6b8a' }}>{k}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#d0d0d0', textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
      </Section>

      {/* Values */}
      <section style={{ background: '#0a0a14', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Company Values</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem' }}>
            WHAT DRIVES US
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', background: 'rgba(255,255,255,0.05)' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: '#0a0a14', padding: '2rem', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#0e0e1a'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a14'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', color: '#ff3d3d', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ color: '#6b6b8a', fontSize: '0.87rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <Tag>Company Timeline</Tag>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem' }}>
          FROM IDEA TO LAUNCH
        </h2>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '120px', top: 0, bottom: 0, width: '1px', background: 'rgba(255,61,61,0.2)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '100px', flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#ff3d3d', paddingTop: '4px', textAlign: 'right' }}>{t.date}</div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff3d3d', flexShrink: 0, marginTop: '6px', boxShadow: '0 0 10px rgba(255,61,61,0.4)' }} />
                <div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem', letterSpacing: '0.04em', color: '#f0f0f0' }}>{t.event}</div>
                  <div style={{ fontSize: '0.84rem', color: '#6b6b8a', marginTop: '0.2rem' }}>{t.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* IP Note */}
      <section style={{ background: '#0e0e1a', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Tag>Intellectual Property</Tag>
          <p style={{ color: '#8888aa', lineHeight: 1.85, marginBottom: '1rem' }}>
            All IP — including source code, the synchronization engine, the <strong style={{ color: '#f0f0f0' }}>Rival Room™ concept</strong>, brand assets, business plans, and domain names — is the exclusive property of Sportify LLC under a formal IP Assignment Agreement signed by all four co-founders.
          </p>
          <p style={{ color: '#8888aa', lineHeight: 1.85 }}>
            Future employees and contractors are required to sign IP assignment agreements before contributing to any codebase or product. The CTO oversees all technical IP governance and repository access controls.
          </p>
        </div>
      </section>
    </main>
  );
}
