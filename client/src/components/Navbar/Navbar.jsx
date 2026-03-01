import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (window.location.pathname !== '/main') {
      navigate('/main')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      padding: scrolled ? '14px 60px' : '28px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      transition: 'all 0.4s ease'
    }}>

      {/* Logo — always gold */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.6rem', fontWeight: 300,
          letterSpacing: '0.2em', color: 'var(--gold)'
        }}>
          Maison{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Dorée</em>
        </span>
      </Link>

      {/* Nav links */}
      <ul style={{
        display: 'flex', gap: '28px',
        listStyle: 'none', alignItems: 'center'
      }}>
        {[
          { label: 'About',        id: 'about' },
          { label: 'Menu',         id: 'menu' },
          { label: 'Events',       id: 'events' },
          { label: 'Reservations', id: 'reservation' },
          { label: 'Contact',      id: 'contact' },
        ].map(item => (
          <li key={item.id}>
            <button onClick={() => scrollTo(item.id)} style={{
              background: 'none', border: 'none',
              color: 'rgba(245,240,232,0.75)',
              cursor: 'pointer',
              fontSize: '0.62rem', letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.3s', padding: '4px 0'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.75)'}
            >
              {item.label}
            </button>
          </li>
        ))}

        {/* Careers link */}
        <li>
          <Link to="/careers" style={{
            color: 'rgba(245,240,232,0.75)',
            fontSize: '0.62rem', letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            textDecoration: 'none',
            transition: 'color 0.3s', padding: '4px 0'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.75)'}
          >
            Careers
          </Link>
        </li>
      </ul>

      {/* Reserve button — gold bg, black text */}
      <button
        onClick={() => scrollTo('reservation')}
        style={{
          background: 'var(--gold)',
          color: '#0A0A0A',
          border: 'none',
          padding: '11px 28px',
          fontSize: '0.62rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s'
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
        Reserve a Table
      </button>
    </nav>
  )
}