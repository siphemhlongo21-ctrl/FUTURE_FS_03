const EVENTS = [
  {
    date: { day: '14', month: 'Mar' },
    title: 'Wine & Dine Evening',
    subtitle: 'A Curated Pairing Experience',
    description: 'Join our sommelier for an exclusive five-course dinner paired with rare South African and French vintages. Each dish is crafted to complement the wine selection.',
    time: '19:00 — 22:30',
    seats: '24 seats only',
    price: 'R1,850 per person',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    tag: 'Sold Out'
  },
  {
    date: { day: '21', month: 'Mar' },
    title: 'Chef\'s Table Experience',
    subtitle: 'An Intimate Culinary Journey',
    description: 'Dine at the chef\'s table for an exclusive behind-the-scenes experience. Watch our head chef prepare a bespoke 7-course tasting menu just for your party.',
    time: '18:30 — 23:00',
    seats: '8 seats only',
    price: 'R2,400 per person',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
    tag: 'Limited'
  },
  {
    date: { day: '05', month: 'Apr' },
    title: 'Spring Harvest Dinner',
    subtitle: 'Celebrating Seasonal Produce',
    description: 'A special menu celebrating the finest spring ingredients from local KwaZulu-Natal farms. A tribute to the land, the season, and the craft of fine cooking.',
    time: '19:00 — 22:00',
    seats: '40 seats',
    price: 'R1,200 per person',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tag: 'Available'
  },
  {
    date: { day: '19', month: 'Apr' },
    title: 'Jazz & Champagne Night',
    subtitle: 'Live Music · Fine Bubbles',
    description: 'An enchanting evening of live jazz performed by the acclaimed Durban Jazz Quartet, accompanied by a curated champagne and canapé selection.',
    time: '20:00 — 00:00',
    seats: '60 seats',
    price: 'R950 per person',
    img: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
    tag: 'Available'
  }
]

export default function Events() {
  return (
    <section id="events" style={{
      padding: '120px 60px',
      background: 'var(--black)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top gold line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
      }} />

      {/* Background watermark */}
      <div style={{
        position: 'absolute', top: '50%', right: '-100px',
        transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '18rem', fontWeight: 300,
        color: 'rgba(201,168,76,0.03)',
        pointerEvents: 'none', userSelect: 'none', lineHeight: 1
      }}>2025</div>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">Upcoming</span>
          <h2 className="section-title">Special <em>Events</em></h2>
          <div className="gold-line" />
          <p style={{
            fontSize: '0.78rem', color: 'rgba(245,240,232,0.5)',
            lineHeight: 1.8, maxWidth: '500px', margin: '0 auto'
          }}>
            Exclusive evenings crafted for the discerning guest.
            Reserve your place at our most anticipated events of the season.
          </p>
        </div>

        {/* Events Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3px'
        }}>
          {EVENTS.map((event, i) => (
            <div key={event.title}
              className={`reveal reveal-delay-${i % 2 + 1}`}
              style={{
                background: 'var(--dark2)',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={event.img} alt={event.title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', filter: 'brightness(0.5)',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />

                {/* Date badge */}
                <div style={{
                  position: 'absolute', top: '20px', left: '20px',
                  background: 'var(--gold)',
                  padding: '12px 16px', textAlign: 'center',
                  minWidth: '60px'
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem', fontWeight: 500,
                    color: 'var(--black)', lineHeight: 1
                  }}>{event.date.day}</div>
                  <div style={{
                    fontSize: '0.55rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--black)',
                    marginTop: '2px'
                  }}>{event.date.month}</div>
                </div>

                {/* Availability tag */}
                <div style={{
                  position: 'absolute', top: '20px', right: '20px',
                  padding: '6px 14px',
                  background: event.tag === 'Sold Out'
                    ? 'rgba(255,68,68,0.2)'
                    : event.tag === 'Limited'
                    ? 'rgba(201,168,76,0.2)'
                    : 'rgba(68,255,68,0.15)',
                  border: `1px solid ${
                    event.tag === 'Sold Out' ? 'rgba(255,68,68,0.4)'
                    : event.tag === 'Limited' ? 'rgba(201,168,76,0.4)'
                    : 'rgba(68,255,68,0.3)'
                  }`,
                  fontSize: '0.55rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: event.tag === 'Sold Out' ? '#ff4444'
                    : event.tag === 'Limited' ? 'var(--gold)'
                    : '#44ff88'
                }}>{event.tag}</div>

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '80px',
                  background: 'linear-gradient(to top, var(--dark2), transparent)'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '28px 32px 32px' }}>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '8px'
                }}>{event.subtitle}</div>

                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem', fontWeight: 300,
                  color: 'var(--cream)', marginBottom: '14px'
                }}>{event.title}</h3>

                <p style={{
                  fontSize: '0.72rem', lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: '24px'
                }}>{event.description}</p>

                {/* Details row */}
                <div style={{
                  display: 'flex', gap: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  marginBottom: '24px', flexWrap: 'wrap'
                }}>
                  {[
                    { icon: '🕐', val: event.time },
                    { icon: '👥', val: event.seats },
                    { icon: '💰', val: event.price }
                  ].map(d => (
                    <div key={d.val} style={{
                      display: 'flex', alignItems: 'center', gap: '8px'
                    }}>
                      <span style={{ fontSize: '0.8rem' }}>{d.icon}</span>
                      <span style={{
                        fontSize: '0.65rem', color: 'rgba(245,240,232,0.5)',
                        letterSpacing: '0.05em'
                      }}>{d.val}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  disabled={event.tag === 'Sold Out'}
                  onClick={() => document.getElementById('reservation')
                    ?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    width: '100%', padding: '14px',
                    background: event.tag === 'Sold Out'
                      ? 'rgba(255,255,255,0.05)' : 'var(--gold)',
                    color: event.tag === 'Sold Out'
                      ? 'rgba(255,255,255,0.2)' : 'var(--black)',
                    border: event.tag === 'Sold Out'
                      ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    fontSize: '0.65rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    cursor: event.tag === 'Sold Out' ? 'not-allowed' : 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={e => {
                    if (event.tag !== 'Sold Out')
                      e.target.style.background = 'var(--gold-light)'
                  }}
                  onMouseLeave={e => {
                    if (event.tag !== 'Sold Out')
                      e.target.style.background = 'var(--gold)'
                  }}
                >
                  {event.tag === 'Sold Out' ? 'Fully Booked' : 'Reserve Your Place'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}