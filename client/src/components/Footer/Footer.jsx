import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const TripAdvisorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3c1.1 0 2.1.2 3 .57V7h-6v-1.43C9.9 5.2 10.9 5 12 5zM7 9h10l-1 2H8L7 9zm5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
)

const SOCIALS = [
  {
    label: 'Instagram',
    icon: <InstagramIcon />,
    href: 'https://instagram.com',
    color: '#E1306C'
  },
  {
    label: 'Facebook',
    icon: <FacebookIcon />,
    href: 'https://facebook.com',
    color: '#1877F2'
  },
  {
    label: 'Twitter / X',
    icon: <TwitterIcon />,
    href: 'https://twitter.com',
    color: '#ffffff'
  },
  {
    label: 'WhatsApp',
    icon: <WhatsAppIcon />,
    href: 'https://wa.me/27314567890',
    color: '#25D366'
  },
  {
    label: 'TripAdvisor',
    icon: <TripAdvisorIcon />,
    href: 'https://tripadvisor.com',
    color: '#34E0A1'
  },
]

export default function Footer() {
  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--black)',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Top gold line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
      }} />

      {/* Background watermark */}
      <div style={{
        position: 'absolute', bottom: '-40px', right: '-20px',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '16rem', fontWeight: 300,
        color: 'rgba(201,168,76,0.03)',
        pointerEvents: 'none', userSelect: 'none', lineHeight: 1
      }}>MD</div>

      {/* Main content */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '80px 60px 40px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '60px'
      }}>

        {/* Brand column */}
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem', fontWeight: 300,
            color: 'var(--gold)', letterSpacing: '0.2em',
            marginBottom: '8px'
          }}>Maison Dorée</div>
          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            marginBottom: '20px'
          }}>Fine Dining · Durban · Est. 2009</div>
          <p style={{
            fontSize: '0.75rem', lineHeight: 1.9,
            color: 'rgba(245,240,232,0.4)',
            maxWidth: '280px', marginBottom: '28px'
          }}>
            A sanctuary where the finest French-African cuisine
            meets impeccable hospitality. Every evening, a new memory.
          </p>

          {/* Social icons */}
          <div>
            <div style={{
              fontSize: '0.58rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: '14px'
            }}>Follow Us</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {SOCIALS.map(s => (
                <a key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: '38px', height: '38px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: 'rgba(245,240,232,0.5)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = s.color
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.background = `${s.color}15`
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(245,240,232,0.5)'
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigate column */}
        <div>
          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '24px'
          }}>Navigate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Our Story',     id: 'about' },
              { label: 'The Menu',      id: 'menu' },
              { label: 'Events',        id: 'events' },
              { label: 'Reservations',  id: 'reservation' },
              { label: 'Contact',       id: 'contact' },
            ].map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{
                background: 'none', border: 'none',
                fontSize: '0.72rem', color: 'rgba(245,240,232,0.4)',
                cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
                textAlign: 'left', padding: 0, letterSpacing: '0.05em',
                transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.4)'}
              >{l.label}</button>
            ))}
            <Link to="/careers" style={{
              fontSize: '0.72rem', color: 'rgba(245,240,232,0.4)',
              textDecoration: 'none', letterSpacing: '0.05em',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.4)'}
            >Careers</Link>
          </div>
        </div>

        {/* Hours column */}
        <div>
          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '24px'
          }}>Hours</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { day: 'Tue — Sat', time: '18:00 – 23:00' },
              { day: 'Sunday',    time: '11:00 – 15:00' },
              { day: 'Monday',    time: 'Closed' }
            ].map(h => (
              <div key={h.day}>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.1em',
                  color: 'rgba(245,240,232,0.35)', marginBottom: '3px'
                }}>{h.day}</div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  color: h.time === 'Closed'
                    ? 'rgba(245,240,232,0.2)' : 'var(--cream)'
                }}>{h.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div>
          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '24px'
          }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '📍', text: '12 Marine Parade\nFlorida Road, Durban' },
              { icon: '📞', text: '+27 31 456 7890' },
              { icon: '✉️', text: 'reservations@maisondoree.co.za' },
              { icon: '💼', text: 'careers@maisondoree.co.za' },
            ].map(c => (
              <div key={c.text} style={{
                display: 'flex', gap: '10px', alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '0.85rem', marginTop: '1px' }}>{c.icon}</span>
                <span style={{
                  fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)',
                  lineHeight: 1.7, whiteSpace: 'pre-line'
                }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.08)',
        padding: '24px 60px',
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '0.6rem', color: 'rgba(136,136,136,0.4)',
          letterSpacing: '0.1em'
        }}>
          © 2025 Maison Dorée. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link to="/careers" style={{
            fontSize: '0.55rem', color: 'rgba(245,240,232,0.2)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.2)'}
          >Careers</Link>
          <a href="/admin" style={{
            fontSize: '0.55rem', color: 'rgba(201,168,76,0.15)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'rgba(201,168,76,0.15)'}
          >Admin Portal</a>
        </div>
      </div>
    </footer>
  )
}