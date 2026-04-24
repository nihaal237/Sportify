import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#07070d',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '3rem 2.5rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', marginBottom: '0.8rem' }}>
              SPORT<span style={{ color: '#ff3d3d' }}>IFY</span>
            </div>
            <p style={{ color: '#6b6b8a', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '220px' }}>
              Watch sports together. Rival Rooms, real-time sync, and fan energy — wherever you are.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.1em', color: '#ff3d3d', marginBottom: '1rem' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['/', 'Home'], ['/about', 'About'], ['/board', 'Board of Directors'], ['/investors', 'Investors']].map(([to, label]) => (
                <Link key={to} to={to} style={{ color: '#6b6b8a', fontSize: '0.85rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#f0f0f0'}
                  onMouseLeave={e => e.target.style.color = '#6b6b8a'}
                >{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.1em', color: '#ff3d3d', marginBottom: '1rem' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['/tos', 'Terms of Service'], ['/tos#liability', 'Liability'], ['/tos#aup', 'Acceptable Use']].map(([to, label]) => (
                <Link key={label} to={to} style={{ color: '#6b6b8a', fontSize: '0.85rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#f0f0f0'}
                  onMouseLeave={e => e.target.style.color = '#6b6b8a'}
                >{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.1em', color: '#ff3d3d', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: '#6b6b8a', fontSize: '0.85rem', lineHeight: 1.9 }}>
              legal@sportify.app<br />
              Lahore, Punjab, Pakistan<br />
              Incorporated as LLC
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#6b6b8a', fontSize: '0.78rem' }}>© 2026 Sportify LLC. All rights reserved. YC-backed startup, Lahore, Pakistan.</p>
          <p style={{ color: '#6b6b8a', fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace" }}>Seed: $500K | Post-Money: ~$7.1M</p>
        </div>
      </div>
    </footer>
  );
}
