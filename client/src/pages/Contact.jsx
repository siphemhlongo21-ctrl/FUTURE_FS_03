export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '120px 60px',
      background: 'var(--dark)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Visit <em>Maison Dorée</em></h2>
          <div className="gold-line" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'start'
        }}>

          {/* Left - Info */}
          <div>
            {[
              {
                icon: '📍',
                label: 'Address',
                value: '12 Marine Parade, Florida Road\nDurban, KwaZulu-Natal, 4001'
              },
              {
                icon: '📞',
                label: 'Reservations',
                value: '+27 31 456 7890\nreservations@maisondoree.co.za'
              },
              {
                icon: '🕐',
                label: 'Opening Hours',
                value: 'Tuesday – Saturday: 18:00 – 23:00\nSunday Brunch: 11:00 – 15:00\nMonday: Closed'
              },
              {
                icon: '✨',
                label: 'Private Dining',
                value: 'Available for exclusive hire\nUp to 24 guests · Full menu customisation'
              }
            ].map((item, i) => (
              <div key={item.label}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: 'flex', gap: '20px',
                  marginBottom: '36px', paddingBottom: '36px',
                  borderBottom: '1px solid rgba(201,168,76,0.08)'
                }}>
                <div style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}>
                  {item.icon}
                </div>
                <div>
                  <span style={{
                    fontSize: '0.58rem', letterSpacing: '0.3em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    display: 'block', marginBottom: '10px'
                  }}>{item.label}</span>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem', lineHeight: 1.9,
                    color: 'var(--cream)', whiteSpace: 'pre-line'
                  }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social buttons */}
            <div className="reveal" style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap'
            }}>
              {['Instagram', 'Facebook', 'WhatsApp', 'TripAdvisor'].map(s => (
                <button key={s} style={{
                  background: 'transparent',
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'var(--gold)',
                  padding: '10px 18px',
                  fontSize: '0.6rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'var(--gold)'
                  e.target.style.color = 'var(--black)'
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'var(--gold)'
                }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Right - Photo + Map */}
          <div className="reveal reveal-delay-2">
            {/* Restaurant photo */}
            <div style={{
              width: '100%', height: '260px',
              overflow: 'hidden', marginBottom: '3px',
              position: 'relative'
            }}>
              <img
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80"
                alt="Maison Dorée restaurant"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', filter: 'brightness(0.7)',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.7), transparent)'
              }} />
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem', color: 'var(--gold)', fontStyle: 'italic'
              }}>Maison Dorée, Durban</div>

              {/* Gold corner accents */}
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                width: '28px', height: '28px',
                borderTop: '1px solid var(--gold)',
                borderLeft: '1px solid var(--gold)'
              }} />
              <div style={{
                position: 'absolute', bottom: '12px', right: '12px',
                width: '28px', height: '28px',
                borderBottom: '1px solid var(--gold)',
                borderRight: '1px solid var(--gold)'
              }} />
            </div>

            {/* Map box */}
            <div style={{
              width: '100%', height: '220px',
              background: 'var(--dark2)',
              border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexDirection: 'column',
              gap: '12px', position: 'relative'
            }}>
              {/* Corner accents */}
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                width: '24px', height: '24px',
                borderTop: '1px solid var(--gold)',
                borderLeft: '1px solid var(--gold)'
              }} />
              <div style={{
                position: 'absolute', bottom: '12px', right: '12px',
                width: '24px', height: '24px',
                borderBottom: '1px solid var(--gold)',
                borderRight: '1px solid var(--gold)'
              }} />

              <span style={{ fontSize: '2rem' }}>📍</span>
              <p style={{
                fontSize: '0.68rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--text-muted)',
                textAlign: 'center', lineHeight: 1.8
              }}>
                12 Marine Parade, Florida Road<br />
                Durban, KwaZulu-Natal
              </p>

              {/* Get Directions button — gold */}
              <button
                onClick={() => window.open(
                  'https://maps.google.com/?q=Florida+Road+Durban', '_blank'
                )}
                style={{
                  background: 'var(--gold)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '10px 28px',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  marginTop: '8px',
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
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}