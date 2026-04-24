import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2.5rem',
    height: '68px',
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(7,7,13,0.95)',
    borderBottom: '1px solid rgba(255,61,61,0.15)',
    backdropFilter: 'blur(20px)',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '2rem',
    letterSpacing: '0.05em',
    color: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  logoAccent: { color: '#ff3d3d' },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    listStyle: 'none',
  },
  link: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#6b6b8a',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  linkActive: { color: '#ff3d3d' },
  cta: {
    background: '#ff3d3d',
    color: '#fff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '0.55rem 1.4rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    flexDirection: 'column',
    gap: '5px',
    padding: '4px',
  },
  bar: {
    width: '24px',
    height: '2px',
    background: '#f0f0f0',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    position: 'fixed',
    top: '68px',
    left: 0,
    right: 0,
    background: 'rgba(7,7,13,0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,61,61,0.2)',
    padding: '1.5rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    zIndex: 999,
  },
};

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/board', label: 'Board' },
  { to: '/investors', label: 'Investors' },
  { to: '/tos', label: 'Legal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <Link to="/" style={styles.logo}>
          SPORT<span style={styles.logoAccent}>IFY</span>
        </Link>

        <ul style={styles.links} className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{ ...styles.link, ...(location.pathname === to ? styles.linkActive : {}) }}
                onMouseEnter={e => e.target.style.color = '#ff3d3d'}
                onMouseLeave={e => e.target.style.color = location.pathname === to ? '#ff3d3d' : '#6b6b8a'}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              style={styles.cta}
              onMouseEnter={e => { e.target.style.background = '#fff'; e.target.style.color = '#ff3d3d'; }}
              onMouseLeave={e => { e.target.style.background = '#ff3d3d'; e.target.style.color = '#fff'; }}
            >
              Join Beta
            </button>
          </li>
        </ul>

        <button
          style={{ ...styles.hamburger, display: 'flex' }}
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </nav>

      {mobileOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{ ...styles.link, fontSize: '1rem', color: location.pathname === to ? '#ff3d3d' : '#f0f0f0' }}
            >
              {label}
            </Link>
          ))}
          <button style={{ ...styles.cta, width: 'fit-content' }}>Join Beta</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
