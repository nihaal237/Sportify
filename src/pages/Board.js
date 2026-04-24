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

const coFounders = [
  { roll: '23I-0831', name: 'Nihaal Durrani', role: 'CEO / Chairperson', type: 'Co-Founder Director', class: 'Class B', responsibilities: 'Overall company strategy, external relationships, final decision-making authority. Authorized to execute contracts up to PKR 5M independently.', term: '4 years / renewable', votes: '10 per share' },
  { roll: '23L-0969', name: 'Muhammad Saif', role: 'CTO / Director', type: 'Co-Founder Director', class: 'Class B', responsibilities: 'Product architecture, tech roadmap, engineering team leadership. Oversees IP governance and all technical contributor agreements.', term: '4 years / renewable', votes: '10 per share' },
  { roll: '23L-0970', name: 'Syed Manzer Abbas', role: 'CPO / Director', type: 'Co-Founder Director', class: 'Class B', responsibilities: 'Product vision, user experience, feature prioritization. Creator of the Rival Room™ concept — Sportify\'s core differentiator.', term: '4 years / renewable', votes: '10 per share' },
  { roll: '23L-0677', name: 'Syed Shahzaib Hussain', role: 'CMO / Director', type: 'Co-Founder Director', class: 'Class B', responsibilities: 'Marketing strategy, brand identity, customer acquisition and growth. Pioneered the Room Sponsorship monetization model.', term: '4 years / renewable', votes: '10 per share' },
];

const independent = [
  { roll: '23L-0924', name: 'Ali Hassan', role: 'Independent Director', type: 'Recruited Director' },
  { roll: '23L-0838', name: 'Saad Ather', role: 'Independent Director', type: 'Recruited Director' },
  { roll: '23L-0592', name: 'Ahmad Yar Khan', role: 'Independent Director', type: 'Recruited Director' },
  { roll: '23L-0555', name: 'Ghayas Shahid', role: 'Independent Director', type: 'Recruited Director' },
  { roll: '23L-0735', name: 'Abdullah Usman', role: 'Independent Director', type: 'Recruited Director' },
];

function DirectorCard({ d, expanded, onToggle }) {
  const isFounder = d.responsibilities !== undefined;
  return (
    <div
      onClick={isFounder ? onToggle : undefined}
      style={{
        background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)',
        borderLeft: isFounder ? '3px solid #ff3d3d' : '3px solid #6b6b8a',
        padding: '1.5rem', transition: 'all 0.2s',
        cursor: isFounder ? 'pointer' : 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = isFounder ? '#ff3d3d' : 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = '#141426'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = isFounder ? 'rgba(255,61,61,0.5)' : 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#0e0e1a'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6b6b8a', marginBottom: '0.3rem' }}>{d.roll}</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', color: '#f0f0f0', marginBottom: '0.25rem' }}>{d.name}</h3>
          <div style={{ fontSize: '0.8rem', color: '#ff3d3d', fontWeight: 600 }}>{d.role}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontSize: '0.65rem', fontFamily: "'JetBrains Mono', monospace",
            background: isFounder ? 'rgba(255,61,61,0.1)' : 'rgba(107,107,138,0.1)',
            color: isFounder ? '#ff3d3d' : '#6b6b8a',
            border: `1px solid ${isFounder ? 'rgba(255,61,61,0.3)' : 'rgba(107,107,138,0.3)'}`,
            padding: '0.2rem 0.6rem', letterSpacing: '0.1em',
          }}>
            {d.type}
          </div>
          {isFounder && <div style={{ fontSize: '0.65rem', color: '#6b6b8a', marginTop: '0.4rem' }}>{expanded ? '▲ collapse' : '▼ expand'}</div>}
        </div>
      </div>
      {isFounder && expanded && (
        <div style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ color: '#8888aa', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>{d.responsibilities}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
            {[['Share Class', d.class], ['Term', d.term], ['Voting Power', d.votes], ['Vote Status', 'APPROVED ✓']].map(([k, v]) => (
              <div key={k} style={{ background: '#07070d', padding: '0.6rem 0.8rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>{k}</div>
                <div style={{ fontSize: '0.82rem', color: '#f0f0f0', marginTop: '0.2rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Board() {
  const [expanded, setExpanded] = useState(null);

  const bylawsHighlights = [
    { title: 'Quorum', value: '5 of 9 directors', desc: 'Minimum for valid Board meeting' },
    { title: 'Simple Majority', value: '>50% of quorum', desc: 'Standard resolutions' },
    { title: 'Supermajority', value: '75% of full Board', desc: 'Reserved matters: share issuance, mergers, bylaw amendments, dissolution' },
    { title: 'Officer Removal', value: '60% Board vote', desc: 'Required to remove any C-suite officer' },
    { title: 'AGM Notice', value: '21 days written', desc: 'Annual General Meeting notice requirement' },
    { title: 'EGM Trigger', value: '15% of voting shares', desc: 'Shareholder request threshold for Extraordinary Meeting' },
    { title: 'Non-Compete', value: '12 months post-departure', desc: 'Within sports-tech in Pakistan' },
    { title: 'CEO Contract Authority', value: 'Up to PKR 5M', desc: 'Without Board approval required' },
  ];

  const shareClasses = [
    { cls: 'Class A — Common', authorized: '70,000,000', par: 'PKR 10', votes: '1 per share', holders: 'Public IPO & Employee Pool', color: '#6b6b8a' },
    { cls: 'Class B — Founder', authorized: '20,000,000', par: 'PKR 10', votes: '10 per share', holders: 'Co-Founders (5M each)', color: '#ff3d3d' },
    { cls: 'Preferred Shares', authorized: '10,000,000', par: 'PKR 10', votes: 'None (economic only)', holders: 'Series A/B Investors', color: '#ffd700' },
  ];

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{ padding: '5rem 2.5rem 3rem', background: '#0e0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Corporate Governance</Tag>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '0.02em' }}>
            BOARD OF<br />
            <span style={{ color: '#ff3d3d' }}>DIRECTORS</span>
          </h1>
          <p style={{ color: '#8888aa', marginTop: '1.2rem', maxWidth: '500px', lineHeight: 1.7 }}>
            Sportify LLC is governed by a 9-member Board representing shareholders and co-founders. All directors unanimously approved the Company Bylaws in the inaugural Board meeting.
          </p>
        </div>
      </div>

      {/* Co-Founders */}
      <section style={{ padding: '5rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Tag>Co-Founder Directors</Tag>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>CLASS B SHAREHOLDERS — 10 VOTES/SHARE</h2>
        <p style={{ color: '#6b6b8a', fontSize: '0.85rem', marginBottom: '2rem' }}>Click a card to expand director details.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {coFounders.map((d, i) => (
            <DirectorCard key={i} d={d} expanded={expanded === i} onToggle={() => setExpanded(expanded === i ? null : i)} />
          ))}
        </div>
      </section>

      {/* Independent */}
      <section style={{ background: '#0a0a14', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Independent Directors</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>RECRUITED DIRECTORS — APPOINTED BY CO-FOUNDER VOTE</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {independent.map((d, i) => (
              <div key={i} style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid #6b6b8a', padding: '1.2rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6b6b8a', marginBottom: '0.3rem' }}>{d.roll}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.15rem', letterSpacing: '0.04em', color: '#f0f0f0' }}>{d.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b6b8a', marginTop: '0.3rem' }}>{d.role}</div>
                <div style={{ fontSize: '0.7rem', fontFamily: "'JetBrains Mono', monospace", color: '#3d7fff', marginTop: '0.6rem' }}>VOTE: APPROVED ✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bylaws Highlights */}
      <section style={{ padding: '5rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Tag>Bylaws at a Glance</Tag>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>KEY GOVERNANCE RULES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {bylawsHighlights.map((b, i) => (
            <div key={i} style={{ background: '#07070d', padding: '1.5rem' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6b6b8a', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{b.title.toUpperCase()}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#ff3d3d', marginBottom: '0.4rem' }}>{b.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b6b8a' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Classes */}
      <section style={{ background: '#0e0e1a', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Share Structure</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>DUAL-CLASS CAPITAL STRUCTURE</h2>
          <p style={{ color: '#6b6b8a', fontSize: '0.87rem', marginBottom: '2.5rem' }}>Total Authorized: 100,000,000 shares | Par Value: PKR 10 per share</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  {['Share Class', 'Authorized Shares', 'Par Value', 'Voting Rights', 'Holders'].map(h => (
                    <th key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6b6b8a', textAlign: 'left', padding: '0.8rem 1rem', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shareClasses.map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '1rem', color: s.color, fontWeight: 600, fontSize: '0.88rem' }}>{s.cls}</td>
                    <td style={{ padding: '1rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#d0d0d0' }}>{parseInt(s.authorized).toLocaleString()}</td>
                    <td style={{ padding: '1rem', fontSize: '0.84rem', color: '#8888aa' }}>{s.par}</td>
                    <td style={{ padding: '1rem', fontSize: '0.84rem', color: s.votes.includes('10') ? '#ff3d3d' : '#8888aa' }}>{s.votes}</td>
                    <td style={{ padding: '1rem', fontSize: '0.84rem', color: '#8888aa' }}>{s.holders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6b6b8a', fontSize: '0.78rem', marginTop: '1.2rem' }}>
            * Co-Founder Class B shares are subject to a 24-month post-IPO lock-up period. Class B shares carry Right of First Refusal after lock-up expires.
          </p>
        </div>
      </section>
    </main>
  );
}
