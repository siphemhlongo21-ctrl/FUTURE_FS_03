const POSITIONS = [
  {
    title: 'Head Chef',
    department: 'Kitchen',
    type: 'Full-Time',
    icon: '👨‍🍳',
    description: 'Lead our culinary team in delivering exceptional French-African cuisine. You will oversee menu development, kitchen operations, and mentor junior chefs.',
    requirements: [
      'Minimum 8 years fine dining experience',
      'Formal culinary qualification (Le Cordon Bleu or equivalent)',
      'Proven leadership and team management skills',
      'Passion for seasonal, locally sourced ingredients',
      'Knowledge of French culinary techniques'
    ]
  },
  {
    title: 'Sous Chef',
    department: 'Kitchen',
    type: 'Full-Time',
    icon: '🍳',
    description: 'Support the Head Chef in daily kitchen operations, menu preparation, and maintaining the highest standards of food quality and presentation.',
    requirements: [
      'Minimum 5 years fine dining experience',
      'Culinary diploma or equivalent',
      'Strong knowledge of classical cooking techniques',
      'Ability to work in a high-pressure environment',
      'Excellent organisational skills'
    ]
  },
  {
    title: 'Pastry Chef',
    department: 'Kitchen',
    type: 'Full-Time',
    icon: '🍮',
    description: 'Create extraordinary desserts and pastries that complete the Maison Dorée dining experience. Develop seasonal dessert menus and special occasion cakes.',
    requirements: [
      'Minimum 4 years pastry experience',
      'Formal pastry qualification preferred',
      'Creative flair and attention to detail',
      'Experience with French pastry techniques',
      'Portfolio of previous work required'
    ]
  },
  {
    title: 'Restaurant Manager',
    department: 'Front of House',
    type: 'Full-Time',
    icon: '🎩',
    description: 'Oversee all front-of-house operations, ensuring every guest receives an exceptional dining experience. Manage reservations, staff, and service standards.',
    requirements: [
      'Minimum 5 years restaurant management experience',
      'Hospitality management qualification advantageous',
      'Exceptional interpersonal and leadership skills',
      'Experience with reservation systems',
      'Fluency in English; French advantageous'
    ]
  },
  {
    title: 'Head Sommelier',
    department: 'Beverage',
    type: 'Full-Time',
    icon: '🍷',
    description: 'Curate and manage our extensive wine cellar featuring over 200 South African and French vintages. Guide guests through wine pairings and host wine events.',
    requirements: [
      'Cape Wine Master or WSET Level 3 minimum',
      'Minimum 4 years sommelier experience',
      'Deep knowledge of South African and French wines',
      'Excellent communication and sales skills',
      'Passion for wine education'
    ]
  },
  {
    title: 'Senior Waiter / Waitress',
    department: 'Front of House',
    type: 'Full-Time',
    icon: '🥂',
    description: 'Deliver impeccable table service to our discerning guests. As a senior member of our team, you will mentor junior staff and maintain our high service standards.',
    requirements: [
      'Minimum 3 years fine dining service experience',
      'Excellent knowledge of food and wine',
      'Warm, professional demeanour',
      'Ability to work evenings and weekends',
      'Fluency in English required'
    ]
  },
  {
    title: 'Bartender / Mixologist',
    department: 'Beverage',
    type: 'Full-Time',
    icon: '🍸',
    description: 'Craft our signature cocktails and manage our premium spirits collection. Create seasonal cocktail menus and deliver exceptional bar service.',
    requirements: [
      'Minimum 3 years cocktail bar experience',
      'FGASA or equivalent bartending qualification',
      'Creative flair for cocktail development',
      'Knowledge of premium spirits and champagne',
      'Energetic and personable personality'
    ]
  },
  {
    title: 'Event Coordinator',
    department: 'Events',
    type: 'Full-Time',
    icon: '✨',
    description: 'Plan and execute our exclusive dining events including Wine & Dine evenings, Chef\'s Table experiences, Jazz nights, and private functions.',
    requirements: [
      'Minimum 3 years event coordination experience',
      'Hospitality or events management qualification',
      'Exceptional organisational and communication skills',
      'Experience with luxury or fine dining events',
      'Availability for evening and weekend events'
    ]
  },
  {
    title: 'Kitchen Porter',
    department: 'Kitchen',
    type: 'Full-Time',
    icon: '🧹',
    description: 'Play a vital role in keeping our kitchen running smoothly. Maintain cleanliness and hygiene standards while supporting the culinary team.',
    requirements: [
      'Previous kitchen experience advantageous',
      'Strong work ethic and reliability',
      'Ability to work in a fast-paced environment',
      'Availability for evening shifts',
      'Health and safety awareness'
    ]
  }
]

const BENEFITS = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading remuneration packages with performance bonuses' },
  { icon: '🍽️', title: 'Staff Meals', desc: 'Complimentary meals during shifts from our full menu' },
  { icon: '📚', title: 'Training & Growth', desc: 'Ongoing professional development and international training opportunities' },
  { icon: '🥂', title: 'Wine Education', desc: 'Regular wine tastings and education sessions with our sommelier' },
  { icon: '🏥', title: 'Medical Aid', desc: 'Comprehensive medical aid contribution for full-time employees' },
  { icon: '🎂', title: 'Birthday Leave', desc: 'Paid leave on your birthday to celebrate in style' },
]

export default function Careers() {
  return (
    <section id="careers" style={{
      background: 'var(--black)',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* Hero banner */}
      <div style={{
        position: 'relative', height: '50vh',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.25)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, var(--black))'
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center', padding: '0 20px'
        }}>
          <span className="section-label">Join Our Family</span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300, lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Build Your Career at<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Maison Dorée</em>
          </h1>
          <p style={{
            fontSize: '0.78rem', letterSpacing: '0.2em',
            color: 'rgba(245,240,232,0.5)',
            textTransform: 'uppercase'
          }}>
            Where passion meets excellence
          </p>
        </div>
      </div>

      {/* Intro */}
      <div style={{
        maxWidth: '800px', margin: '0 auto',
        padding: '80px 60px',
        textAlign: 'center'
      }}>
        <span className="section-label">Why Maison Dorée?</span>
        <h2 className="section-title">More Than a <em>Workplace</em></h2>
        <div className="gold-line" />
        <p style={{
          fontSize: '0.85rem', lineHeight: 2.1,
          color: 'rgba(245,240,232,0.65)'
        }}>
          At Maison Dorée, we believe that exceptional hospitality begins with
          exceptional people. We are committed to nurturing talent, fostering
          creativity, and building careers that last a lifetime. If you share our
          passion for fine food, impeccable service, and creating unforgettable
          experiences — we want to hear from you.
        </p>
      </div>

      {/* Benefits */}
      <div style={{
        padding: '0 60px 80px',
        background: 'var(--dark)'
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '80px' }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Staff <em>Benefits</em></h2>
            <div className="gold-line" />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px'
          }}>
            {BENEFITS.map((b, i) => (
              <div key={b.title}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                style={{
                  background: 'var(--dark2)',
                  padding: '36px 32px',
                  borderTop: '2px solid transparent',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderTopColor = 'var(--gold)'
                  e.currentTarget.style.background = 'var(--dark3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderTopColor = 'transparent'
                  e.currentTarget.style.background = 'var(--dark2)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{b.icon}</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem', marginBottom: '10px',
                  color: 'var(--gold)'
                }}>{b.title}</h3>
                <p style={{
                  fontSize: '0.72rem', lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.5)'
                }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Positions */}
      <div style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Current Openings</span>
            <h2 className="section-title">Open <em>Positions</em></h2>
            <div className="gold-line" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3px'
          }}>
            {POSITIONS.map((pos, i) => (
              <div key={pos.title}
                className={`reveal reveal-delay-${(i % 2) + 1}`}
                style={{
                  background: 'var(--dark2)',
                  padding: '36px',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = 'var(--gold)'
                  e.currentTarget.style.background = 'var(--dark3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.background = 'var(--dark2)'
                }}
              >
                {/* Position header */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: '16px', marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{pos.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', flexWrap: 'wrap', gap: '8px'
                    }}>
                      <h3 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.3rem', color: 'var(--cream)'
                      }}>{pos.title}</h3>
                      <span style={{
                        background: 'rgba(201,168,76,0.1)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        color: 'var(--gold)',
                        fontSize: '0.55rem', letterSpacing: '0.2em',
                        textTransform: 'uppercase', padding: '4px 10px'
                      }}>{pos.type}</span>
                    </div>
                    <div style={{
                      fontSize: '0.6rem', letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: 'var(--text-muted)',
                      marginTop: '4px'
                    }}>{pos.department}</div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.74rem', lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.55)',
                  marginBottom: '20px'
                }}>{pos.description}</p>

                {/* Requirements */}
                <div style={{
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  paddingTop: '16px', marginBottom: '24px'
                }}>
                  <div style={{
                    fontSize: '0.58rem', letterSpacing: '0.25em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    marginBottom: '12px'
                  }}>Requirements</div>
                  {pos.requirements.map(req => (
                    <div key={req} style={{
                      display: 'flex', gap: '10px',
                      marginBottom: '6px', alignItems: 'flex-start'
                    }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.6rem', marginTop: '3px' }}>◆</span>
                      <span style={{
                        fontSize: '0.7rem', lineHeight: 1.6,
                        color: 'rgba(245,240,232,0.45)'
                      }}>{req}</span>
                    </div>
                  ))}
                </div>

                {/* Apply button */}
                <a href="mailto:careers@maisondoree.co.za?subject=Application: ${pos.title}"
                  style={{
                    display: 'block', textAlign: 'center',
                    background: 'var(--gold)', color: 'var(--black)',
                    padding: '12px', fontSize: '0.62rem',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.background = 'var(--gold)'}
                >
                  Apply for This Position
                </a>
              </div>
            ))}
          </div>

          {/* General application */}
          <div className="reveal" style={{
            marginTop: '3px',
            background: 'var(--dark2)',
            padding: '48px',
            textAlign: 'center',
            borderTop: '2px solid rgba(201,168,76,0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📩</div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', color: 'var(--gold)',
              marginBottom: '12px', fontWeight: 300
            }}>Don't See Your Role?</h3>
            <p style={{
              fontSize: '0.78rem', lineHeight: 1.9,
              color: 'rgba(245,240,232,0.55)',
              maxWidth: '500px', margin: '0 auto 28px'
            }}>
              We are always looking for exceptional talent. Send us your CV
              and a cover letter — we would love to hear from passionate
              hospitality professionals.
            </p>
            <a href="mailto:careers@maisondoree.co.za"
              className="btn-gold"
              style={{ textDecoration: 'none' }}>
              Send General Application
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}