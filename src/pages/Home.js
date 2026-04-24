import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── tiny reusable components ── */
function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#ff3d3d',
      border: '1px solid rgba(255,61,61,0.35)',
      padding: '0.25rem 0.8rem',
      marginBottom: '1.2rem',
    }}>{children}</span>
  );
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        let start = 0;
        const duration = 1800;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Room simulator widget ── */
function RoomSimulator() {
  const teams = [
    { name: 'Pakistan', flag: '🇵🇰', color: '#00a651' },
    { name: 'India', flag: '🇮🇳', color: '#ff9933' },
  ];
  const [messages, setMessages] = useState([
    { user: 'Ali_Hawks', team: 0, text: 'LET\'S GOOOO 🔥', time: '21:03' },
    { user: 'RohanFan99', team: 1, text: 'Not today Pakistan 😤', time: '21:03' },
    { user: 'CricketKing', team: 0, text: 'Babar is a machine 💪', time: '21:04' },
  ]);
  const [input, setInput] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(0);
  const bottomRef = useRef(null);

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, {
      user: 'You',
      team: selectedTeam,
      text: input.trim(),
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    }]);
    setInput('');
  };

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  return (
    <div style={{
      background: '#0e0e1a',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '2px',
      overflow: 'hidden',
      maxWidth: '420px',
      width: '100%',
    }}>
      {/* header */}
      <div style={{ background: '#141426', padding: '0.8rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}>
          🏏 PAK vs IND — <span style={{ color: '#ff3d3d' }}>LIVE</span>
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#6b6b8a' }}>247 in room</span>
      </div>

      {/* team select */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {teams.map((t, i) => (
          <button key={i} onClick={() => setSelectedTeam(i)} style={{
            flex: 1, padding: '0.5rem', background: selectedTeam === i ? `${t.color}22` : 'transparent',
            border: 'none', borderBottom: selectedTeam === i ? `2px solid ${t.color}` : '2px solid transparent',
            color: selectedTeam === i ? t.color : '#6b6b8a', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s',
          }}>
            {t.flag} {t.name}
          </button>
        ))}
      </div>

      {/* messages */}
      <div style={{ height: '200px', overflowY: 'auto', padding: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: teams[m.team].color, minWidth: '70px', paddingTop: '2px' }}>{m.user}</span>
            <span style={{ fontSize: '0.82rem', color: '#d0d0d0', flex: 1 }}>{m.text}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#6b6b8a', paddingTop: '2px' }}>{m.time}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* input */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#141426' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder={`Cheer for ${teams[selectedTeam].name}...`}
          style={{
            flex: 1, background: 'transparent', border: 'none', padding: '0.7rem 1rem',
            color: '#f0f0f0', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', outline: 'none',
          }}
        />
        <button onClick={send} style={{
          background: '#ff3d3d', border: 'none', padding: '0 1rem', cursor: 'pointer',
          color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.8rem',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = '#cc2a2a'}
          onMouseLeave={e => e.target.style.background = '#ff3d3d'}
        >SEND</button>
      </div>
    </div>
  );
}

/* ── main ── */
export default function Home() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          <line x1="19" y1="10" x2="22" y2="7"/>
          <line x1="22" y1="10" x2="19" y2="7"/>
        </svg>
      ),
      title: 'Rival Rooms',
      desc: 'Fan zones split by team loyalty. Trash talk, celebrate, and feel the rivalry in real time.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"/>
          <polyline points="1 20 1 14 7 14"/>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        </svg>
      ),
      title: 'Sync Engine',
      desc: 'WebSocket-powered playback sync keeps every fan on the same frame, no spoilers.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
        </svg>
      ),
      title: 'Fan Reactions',
      desc: 'Emoji storms, voice cheers, and live polls that explode at match-defining moments.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
          <polyline points="17 2 12 7 7 2"/>
          <line x1="12" y1="12" x2="12" y2="17"/>
          <line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/>
        </svg>
      ),
      title: 'Watch Parties',
      desc: 'Invite your squad to a private room. Like watching together — from anywhere.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
          <line x1="2" y1="20" x2="22" y2="20"/>
        </svg>
      ),
      title: 'Live Stats',
      desc: 'In-room live match stats, player performance overlays, and predictive score boards.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      title: 'Smart Moderation',
      desc: 'AI-powered community moderation keeps the energy high and the toxicity low.',
    },
  ];

  const stats = [
    { value: 500000, suffix: '', prefix: '$', label: 'Seed Funding (YC)' },
    { value: 44, suffix: ' mo', prefix: '', label: 'Runway' },
    { value: 7100000, suffix: '+', prefix: '$', label: 'Post-Money Valuation' },
    { value: 100000000, suffix: '', prefix: '', label: 'Authorized Shares' },
  ];

  return (
    <main style={{ paddingTop: '68px' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* bg gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(255,61,61,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }} className="hero-grid">
          <div>
            <Tag>YC-Backed • Seed Stage • 2026</Tag>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              marginBottom: '1.5rem',
            }}>
              WATCH<br />
              SPORTS<br />
              <span style={{ color: '#ff3d3d', WebkitTextStroke: '1px #ff3d3d', WebkitTextFillColor: 'transparent' }}>TOGETHER</span>
            </h1>
            <p style={{ color: '#8888aa', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '440px', marginBottom: '2.5rem' }}>
              Sportify transforms isolated streaming into a communal fan experience.
              Rival Rooms, real-time sync, and sports-grade reactions — built for the
              16–35 generation of digital sports fans.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button style={{
                background: '#ff3d3d', color: '#fff', border: 'none', padding: '0.9rem 2.2rem',
                fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.08em',
                cursor: 'pointer', transition: 'all 0.2s',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Join Beta Waitlist
              </button>
              <Link to="/investors" style={{
                background: 'transparent', color: '#f0f0f0', border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.9rem 2.2rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem',
                letterSpacing: '0.08em', display: 'inline-block', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff3d3d'; e.currentTarget.style.color = '#ff3d3d'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#f0f0f0'; }}
              >
                Investor Info →
              </Link>
            </div>
          </div>

          {/* room widget */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-20px',
                background: 'radial-gradient(ellipse, rgba(255,61,61,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <RoomSimulator />
            </div>
          </div>
        </div>

        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── STATS ── */}
      <section style={{
        background: '#0e0e1a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '3rem 2.5rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: '#ff3d3d', lineHeight: 1 }}>
                {s.prefix}<AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6b8a', marginTop: '0.4rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: '6rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Tag>The Problem</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="split-grid">
          <div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
              SPORTS IS<br />SOCIAL.<br />
              <span style={{ color: '#ff3d3d' }}>STREAMING ISN'T.</span>
            </h2>
          </div>
          <div>
            <p style={{ color: '#8888aa', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.2rem' }}>
              Modern realities — distance, schedules, global fans — have separated us from the people we want to watch with. Netflix, YouTube, and ESPN give you the match. They can't give you the <strong style={{ color: '#f0f0f0' }}>moment</strong>.
            </p>
            <p style={{ color: '#8888aa', lineHeight: 1.85, fontSize: '1rem' }}>
              Teleparty and Discord exist for gaming. Sports fans have nothing purpose-built for <strong style={{ color: '#f0f0f0' }}>rival team rooms, synchronized reactions, and real-time community energy</strong>.
            </p>
          </div>
        </div>
        <style>{`@media(max-width:768px){.split-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '4rem 2.5rem 6rem', background: '#0a0a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Tag>Platform Features</Tag>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '3rem' }}>
            BUILT FOR THE FAN EXPERIENCE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: 'rgba(255,255,255,0.05)' }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: '#0a0a14', padding: '2rem',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#0e0e1a'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a14'}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '52px', height: '52px', marginBottom: '1rem',
                  background: 'rgba(255,61,61,0.08)',
                  border: '1px solid rgba(255,61,61,0.2)',
                  borderRadius: '10px',
                }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '0.04em', marginBottom: '0.6rem', color: '#f0f0f0' }}>{f.title}</h3>
                <p style={{ color: '#6b6b8a', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at center, rgba(255,61,61,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Tag>Early Access</Tag>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
          READY TO FEEL<br />THE CROWD?
        </h2>
        <p style={{ color: '#8888aa', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2.5rem' }}>
          Beta launches in Q3 2026. Join the waitlist — be first in the Rival Room when we go live.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            placeholder="your@email.com"
            style={{
              background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f0f0',
              padding: '0.85rem 1.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
              outline: 'none', width: '280px', transition: 'border 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#ff3d3d'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <button style={{
            background: '#ff3d3d', color: '#fff', border: 'none', padding: '0.85rem 2rem',
            fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.08em',
            cursor: 'pointer', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = '#cc2a2a'}
            onMouseLeave={e => e.target.style.background = '#ff3d3d'}
          >
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  );
}