const reviews = [
  {
    name: 'Priya & Rahul Naidoo',
    role: 'Durban · Anniversary Dinner',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=100&q=80',
    text: `The Wagyu was transcendent — I've dined in Paris, Tokyo, and New York,
    and Maison Dorée stands shoulder to shoulder with the very best.
    An extraordinary evening that we will speak of for years.`
  },
  {
    name: 'Dr. Amara Okonkwo',
    role: 'Cape Town · Business Dinner',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    text: `Every detail — from the candlelight to the sommelier's perfect pairings
    to the chocolate soufflé — was flawless. This is what fine dining should
    feel like. We will return every anniversary without question.`
  },
  {
    name: 'James Thornton',
    role: 'Durban · Proposal Evening',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: `I proposed here last December. The team arranged rose petals, a custom
    dessert, and the most perfect table in the restaurant. She said yes.
    Maison Dorée will always hold a special place in our hearts.`
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '140px 60px',
      background: 'var(--black)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '20rem', fontWeight: 300,
        color: 'rgba(201,168,76,0.03)',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        userSelect: 'none'
      }}>MD</div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">Guest Voices</span>
          <h2 className="section-title">What Our Guests <em>Say</em></h2>
          <div className="gold-line" />
        </div>

        {/* Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {reviews.map((r, i) => (
            <div key={r.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--dark2)',
                padding: '48px 56px',
                borderLeft: '0px solid var(--gold)',
                transition: 'border-width 0.3s, padding-left 0.3s, background 0.3s',
                position: 'relative', overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderLeftWidth = '3px'
                e.currentTarget.style.paddingLeft = '53px'
                e.currentTarget.style.background = 'var(--dark3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderLeftWidth = '0px'
                e.currentTarget.style.paddingLeft = '56px'
                e.currentTarget.style.background = 'var(--dark2)'
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '20px', right: '40px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '8rem', color: 'rgba(201,168,76,0.06)',
                lineHeight: 1, pointerEvents: 'none'
              }}>"</div>

              {/* Stars */}
              <div style={{
                color: 'var(--gold)', letterSpacing: '4px',
                fontSize: '0.75rem', marginBottom: '24px'
              }}>★★★★★</div>

              {/* Quote */}
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.25rem', fontWeight: 300,
                fontStyle: 'italic', lineHeight: 1.8,
                color: 'var(--cream)', marginBottom: '32px'
              }}>"{r.text}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%', overflow: 'hidden',
                  border: '1px solid rgba(201,168,76,0.3)',
                  flexShrink: 0
                }}>
                  <img src={r.img} alt={r.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.65rem', letterSpacing: '0.25em',
                    textTransform: 'uppercase', color: 'var(--gold)'
                  }}>{r.name}</div>
                  <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    color: 'var(--text-muted)', marginTop: '4px'
                  }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}