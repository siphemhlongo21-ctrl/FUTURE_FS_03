import { useState, useEffect } from 'react'

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
    label: 'Fine Dining Experience'
  },
  {
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80',
    label: 'Exquisite Cuisine'
  },
  {
    img: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80',
    label: 'Elegant Atmosphere'
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" style={{
      height: '100vh', position: 'relative',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', overflow: 'hidden'
    }}>
      {/* Slideshow */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${s.img})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.5s ease',
          filter: 'brightness(0.35)'
        }} />
      ))}

      {/* Gold overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%),
          linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.7) 100%)
        `
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '0 20px'
      }}>
        <p style={{
          fontSize: '0.65rem', letterSpacing: '0.45em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '24px', animation: 'fadeUp 1s 0.3s both'
        }}>
          Est. 2009 · Fine Dining · Durban, South Africa
        </p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(4rem, 10vw, 8.5rem)',
          fontWeight: 300, lineHeight: 0.95,
          marginBottom: '16px', animation: 'fadeUp 1s 0.5s both',
          textShadow: '0 2px 40px rgba(0,0,0,0.5)'
        }}>
          Maison<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Dorée</em>
        </h1>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px',
          margin: '24px 0', animation: 'fadeUp 1s 0.6s both'
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <p style={{
            fontSize: '0.72rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--cream)', opacity: 0.7
          }}>{SLIDES[current].label}</p>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <p style={{
          fontSize: '0.78rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)',
          margin: '0 0 56px', animation: 'fadeUp 1s 0.7s both'
        }}>
          Where every evening becomes a timeless memory
        </p>

        <div style={{
          display: 'flex', gap: '20px',
          justifyContent: 'center', alignItems: 'center',
          animation: 'fadeUp 1s 0.9s both'
        }}>
          <button className="btn-gold"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
            Reserve Your Table
          </button>
          <button className="btn-outline"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Menu
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: '80px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', zIndex: 3
      }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '24px' : '6px',
            height: '6px', borderRadius: '3px',
            background: i === current ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.3s ease', padding: 0
          }} />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s 1.5s both'
      }}>
        <span style={{
          fontSize: '0.55rem', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'var(--text-muted)'
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scrollLine 2s infinite'
        }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  )
}