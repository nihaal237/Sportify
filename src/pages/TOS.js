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

function AccordionItem({ title, id, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }} id={id}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', padding: '1.4rem 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer', color: '#f0f0f0', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', letterSpacing: '0.05em' }}>{title}</span>
        <span style={{ color: '#ff3d3d', fontSize: '1.2rem', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '1.5rem', color: '#8888aa', lineHeight: 1.85, fontSize: '0.88rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function TOS() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{ padding: '5rem 2.5rem 3rem', background: '#0e0e1a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Legal Documents</Tag>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95 }}>
            TERMS &amp;<br /><span style={{ color: '#ff3d3d' }}>LEGAL</span>
          </h1>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[['Effective Date', 'May 1, 2026'], ['Last Updated', 'April 2026'], ['Governing Law', 'Pakistan / Lahore'], ['Contact', 'legal@sportify.app']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>{k.toUpperCase()}</div>
                <div style={{ fontSize: '0.88rem', color: '#d0d0d0', marginTop: '0.2rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        {/* Intro */}
        <div style={{ background: '#0e0e1a', border: '1px solid rgba(255,61,61,0.15)', borderLeft: '3px solid #ff3d3d', padding: '1.5rem', marginBottom: '3rem' }}>
          <p style={{ color: '#8888aa', fontSize: '0.88rem', lineHeight: 1.85 }}>
            These Terms of Service ("Terms") govern your access to and use of Sportify LLC's platform, mobile application, and services (collectively, "the Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Section 1: Liability */}
        <div style={{ marginBottom: '3rem' }}>
          <Tag>Section 1</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>LIMITATION OF LIABILITY</h2>

          <AccordionItem title="1.1 — Disclaimer of Warranties" defaultOpen>
            <p>THE SPORTIFY PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. SPORTIFY LLC EXPRESSLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF:</p>
            <ul style={{ marginTop: '0.8rem', paddingLeft: '1.2rem', lineHeight: 2.2 }}>
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy of information on the Platform</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="1.2 — Limitation of Liability">
            <p style={{ marginBottom: '0.8rem' }}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPORTIFY LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM, INCLUDING BUT NOT LIMITED TO:</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.2 }}>
              <li>Loss or corruption of data, content, or information submitted through the Platform</li>
              <li>Service interruptions, bugs, errors, downtime, or technical failures of any nature</li>
              <li>Unauthorized access to, or alteration of, your account or transmissions resulting from a security breach</li>
              <li>Conduct or content of any third party on the Platform</li>
              <li>Any failure or delay in performance beyond Sportify's reasonable control (force majeure events, cyberattacks, infrastructure outages)</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="1.3 — Aggregate Liability Cap" id="liability">
            <p>IN NO EVENT SHALL SPORTIFY LLC'S TOTAL AGGREGATE LIABILITY TO ANY USER FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE PLATFORM EXCEED THE GREATER OF:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
              <div style={{ background: '#141426', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#ff3d3d' }}>(A)</div>
                <div style={{ fontSize: '0.82rem', color: '#d0d0d0' }}>Amount paid by you to Sportify in the 12 months preceding the claim</div>
              </div>
              <div style={{ background: '#141426', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#ff3d3d' }}>(B)</div>
                <div style={{ fontSize: '0.82rem', color: '#d0d0d0' }}>PKR 5,000 (Five Thousand Pakistani Rupees)</div>
              </div>
            </div>
            <p>This limitation applies regardless of the theory of liability — contract, tort, negligence, strict liability, or otherwise.</p>
          </AccordionItem>

          <AccordionItem title="1.4 — Exclusions">
            <p>Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, Sportify's liability shall be limited to the maximum extent permitted by applicable law. Nothing in these Terms limits Sportify's liability for <strong style={{ color: '#f0f0f0' }}>fraud, gross negligence, or willful misconduct</strong>.</p>
          </AccordionItem>
        </div>

        {/* Section 2: AUP */}
        <div style={{ marginBottom: '3rem' }} id="aup">
          <Tag>Section 2</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>ACCEPTABLE USE POLICY</h2>
          <p style={{ color: '#8888aa', fontSize: '0.88rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            By accessing the Sportify platform, you agree that you shall NOT engage in any of the following prohibited activities:
          </p>

          <AccordionItem title="Prohibited Use #1 — Reverse Engineering & Unauthorized Access" defaultOpen>
            <p>Users are strictly prohibited from:</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.2, marginTop: '0.6rem' }}>
              <li>Reverse engineering, decompiling, disassembling, or otherwise attempting to derive the source code, underlying algorithms, or architecture of the Sportify application or its synchronization engine</li>
              <li>Using automated bots, scrapers, crawlers, or scripts to access the Platform</li>
              <li>Attempting to probe, scan, or test the vulnerability of the Platform's systems or networks without written authorization from Sportify LLC</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Prohibited Use #2 — Illegal or Harmful Activities">
            <p>Users are strictly prohibited from using the Sportify platform in connection with any activity that:</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.2, marginTop: '0.6rem' }}>
              <li>Violates any applicable local, national, or international law or regulation, including Pakistan's <strong style={{ color: '#f0f0f0' }}>Prevention of Electronic Crimes Act (PECA) 2016</strong>, the Electronic Transactions Ordinance (ETO) 2002, or the GDPR where applicable</li>
              <li>Facilitates the distribution, streaming, or sharing of copyrighted sports content without proper authorization from rights holders</li>
              <li>Promotes, incites, or facilitates violence, hate speech, harassment, or discrimination against any individual or group</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Prohibited Use #3 — Platform Abuse & Commercial Exploitation">
            <p>Users are strictly prohibited from:</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.2, marginTop: '0.6rem' }}>
              <li>Selling, reselling, sublicensing, or commercially exploiting access to the Platform or any feature thereof without Sportify's prior written consent</li>
              <li>Using the Platform to transmit unsolicited commercial communications, spam, phishing content, or malicious code</li>
              <li>Creating fake accounts, manipulating engagement metrics, or using the Platform in any manner that disrupts or impairs the integrity of the service</li>
            </ul>
          </AccordionItem>
        </div>

        {/* Section 3: Justification */}
        <div style={{ marginBottom: '3rem' }}>
          <Tag>Section 3</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>LEGAL JUSTIFICATION</h2>
          <div style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)', padding: '2rem' }}>
            <p style={{ color: '#8888aa', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              The Limitation of Liability clause protects the Company from disproportionate financial exposure arising from software bugs, synchronization failures, or security incidents that are inherent risks in any real-time streaming platform. Without such a clause, a single outage during a high-traffic match event could expose the Company to unlimited tort claims. By capping liability at the amount actually paid by the user, the clause aligns financial risk with commercial value — a principle consistently upheld in shrink-wrap and click-wrap agreements recognized under Pakistani electronic transaction law.
            </p>
            <p style={{ color: '#8888aa', lineHeight: 1.85 }}>
              The Acceptable Use Policy complements this by establishing explicit behavioral boundaries that, when violated, shift legal liability from Sportify to the offending user. This is critical for <strong style={{ color: '#f0f0f0' }}>PECA 2016 compliance</strong>, as it provides documented evidence that Sportify has taken affirmative steps to prohibit illegal electronic conduct — a defense recognized under Section 37 Safe Harbour principles.
            </p>
          </div>
        </div>

        {/* Section 4: General */}
        <div style={{ marginBottom: '3rem' }}>
          <Tag>Section 4</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>GENERAL PROVISIONS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              { title: 'Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Lahore, Punjab.' },
              { title: 'Amendments', content: 'Sportify LLC reserves the right to modify these Terms at any time. Users will be notified of material changes via in-app notification or email. Continued use constitutes acceptance.' },
              { title: 'Severability', content: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.' },
              { title: 'Entire Agreement', content: 'These Terms, together with Sportify\'s Privacy Policy, constitute the entire agreement between you and Sportify LLC with respect to the Platform.' },
            ].map((g, i) => (
              <div key={i} style={{ background: '#07070d', padding: '1.5rem' }}>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.06em', color: '#ff3d3d', marginBottom: '0.6rem' }}>{g.title}</h4>
                <p style={{ color: '#8888aa', fontSize: '0.84rem', lineHeight: 1.7 }}>{g.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.07)', padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>LEGAL ENQUIRIES</div>
          <a href="mailto:legal@sportify.app" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#ff3d3d' }}>legal@sportify.app</a>
          <p style={{ color: '#6b6b8a', fontSize: '0.82rem', marginTop: '0.5rem' }}>Sportify LLC, Lahore, Punjab, Pakistan</p>
        </div>
      </div>
    </main>
  );
}
