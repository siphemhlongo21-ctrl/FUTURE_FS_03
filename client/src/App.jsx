import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About'
import MenuPage from './pages/MenuPage'
import Events from './pages/Events'
import Booking from './components/Booking/Booking'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Footer from './components/Footer/Footer'
import Chatbot from './components/Chatbot/Chatbot'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'

function useReveal() {
  useEffect(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
        { threshold: 0.05 }
      )
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 100)
  }, [])
}

/* ── Landing / Home page ── */
function LandingPage() {
  useReveal()
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Full-screen background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.25)'
      }} />

      {/* Subtle gold vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.8) 100%)'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.8) 100%)'
      }} />

      {/* Corner ornaments */}
      {[
        { top: '40px', left: '40px', borderTop: '1px solid', borderLeft: '1px solid' },
        { top: '40px', right: '40px', borderTop: '1px solid', borderRight: '1px solid' },
        { bottom: '40px', left: '40px', borderBottom: '1px solid', borderLeft: '1px solid' },
        { bottom: '40px', right: '40px', borderBottom: '1px solid', borderRight: '1px solid' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', ...s,
          width: '60px', height: '60px',
          borderColor: 'rgba(201,168,76,0.4)'
        }} />
      ))}

      {/* Centre content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '40px 20px'
      }}>
        {/* Pre-title */}
        <div style={{
          fontSize: '0.6rem', letterSpacing: '0.6em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '28px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px'
        }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          Fine Dining · Durban · Est. 2009
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>

        {/* Main title */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(4rem, 9vw, 8rem)',
          fontWeight: 200, lineHeight: 0.95,
          letterSpacing: '0.05em',
          marginBottom: '8px', color: 'var(--cream)'
        }}>
          Maison
        </h1>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(4rem, 9vw, 8rem)',
          fontWeight: 200, lineHeight: 0.95,
          fontStyle: 'italic',
          letterSpacing: '0.05em',
          marginBottom: '40px', color: 'var(--gold)'
        }}>
          Dorée
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: '0.72rem', letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.5)',
          marginBottom: '60px'
        }}>
          Where every evening becomes a timeless memory
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/main" style={{
            background: 'var(--gold)',
            color: 'var(--black)',
            padding: '16px 48px',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s',
            display: 'inline-block'
          }}
          onMouseEnter={e => {
            e.target.style.background = 'var(--gold-light)'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'var(--gold)'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            Enter Restaurant
          </a>
          <a href="/main#reservation" style={{
            background: 'transparent',
            color: 'var(--cream)',
            padding: '16px 48px',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            border: '1px solid rgba(245,240,232,0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            display: 'inline-block'
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = 'var(--gold)'
            e.target.style.color = 'var(--gold)'
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = 'rgba(245,240,232,0.3)'
            e.target.style.color = 'var(--cream)'
          }}
          >
            Reserve a Table
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: '80px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px'
        }}>
          <div style={{
            fontSize: '0.52rem', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: 'rgba(201,168,76,0.4)'
          }}>Scroll to explore</div>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'scrollLine 1.5s ease-in-out infinite'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { opacity: 1; transform: scaleY(1) translateY(0); }
          100% { opacity: 0; transform: scaleY(0.5) translateY(10px); }
        }
      `}</style>
    </div>
  )
}

/* ── Main restaurant page ── */
function MainPage() {
  useReveal()
  return (
    <>
      <Hero />
      <About />
      <MenuPage />
      <Events />
      <Booking />
      <Testimonials />
      <Contact />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hide navbar on home landing page */}
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isHome && <Footer />}
      {!isHome && <Chatbot />}
    </div>
  )
}