const STORY_SECTIONS = [
  {
    year: '2009',
    title: 'The Beginning',
    text: 'Maison Dorée was founded by Chef Étienne Moreau, who left the kitchens of Paris with a single dream — to bring the soul of French fine dining to the vibrant heart of Durban. Opening with just 24 seats and a handwritten menu, the restaurant was fully booked within its first week.'
  },
  {
    year: '2013',
    title: 'A New Vision',
    text: 'After winning the KwaZulu-Natal Restaurant of the Year award, we expanded our kitchen and introduced our signature French-African fusion concept — marrying classical Parisian technique with the bold, fresh flavours of South Africa\'s coastline and farmlands.'
  },
  {
    year: '2018',
    title: 'The Golden Era',
    text: 'Maison Dorée earned its place among South Africa\'s top 10 fine dining establishments. We launched our private dining room, our celebrated Chef\'s Table experience, and our curated wine cellar featuring over 200 South African and French vintages.'
  },
  {
    year: '2024',
    title: 'Today & Beyond',
    text: 'Today, Maison Dorée continues to evolve — introducing seasonal tasting menus, exclusive event evenings, and a new generation of dishes that honour our roots while embracing the future. Every table, every plate, every evening is crafted with the same devotion as day one.'
  }
]

const TEAM = [
  {
    name: 'Chef Étienne Moreau',
    role: 'Founder & Executive Chef',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
    bio: 'Trained at Le Cordon Bleu Paris. 25 years of culinary mastery across 3 continents.'
  },
  {
    name: 'Naledi Dlamini',
    role: 'Head Pastry Chef',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    bio: 'A master of precision and sweetness, Naledi\'s desserts have been featured in Condé Nast Traveller.'
  },
  {
    name: 'Marco Ferreira',
    role: 'Head Sommelier',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Cape Wine Master with an encyclopaedic knowledge of South African and French vintages.'
  }
]

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--black)',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* ── PART 1: Hero story split ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh'
      }}>
        {/* Image side */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80"
            alt="Maison Dorée interior"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', filter: 'brightness(0.7)'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 60%, var(--black))'
          }} />
          {/* Corner accents */}
          <div style={{
            position: 'absolute', top: '30px', left: '30px',
            width: '50px', height: '50px',
            borderTop: '2px solid var(--gold)',
            borderLeft: '2px solid var(--gold)'
          }} />
          <div style={{
            position: 'absolute', bottom: '30px', right: '30px',
            width: '50px', height: '50px',
            borderBottom: '2px solid var(--gold)',
            borderRight: '2px solid var(--gold)'
          }} />
        </div>

        {/* Text side */}
        <div style={{
          padding: '100px 80px 100px 60px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <span className="section-label">Our Heritage</span>
          <h2 className="section-title">
            A Story of<br /><em>Passion & Place</em>
          </h2>
          <div className="gold-line-left" />
          <p style={{
            fontSize: '0.85rem', lineHeight: 2.1,
            color: 'rgba(245,240,232,0.65)',
            marginBottom: '20px'
          }}>
            Nestled in the heart of Durban, Maison Dorée — French for
            <em style={{ color: 'var(--gold)' }}> "Golden House"</em> — is more
            than a restaurant. It is a sanctuary where time slows down,
            where conversation flows as freely as the wine, and where every
            dish is a love letter to the craft of cooking.
          </p>
          <p style={{
            fontSize: '0.85rem', lineHeight: 2.1,
            color: 'rgba(245,240,232,0.65)'
          }}>
            We believe that the finest dining experiences are not merely about
            food — they are about memory, emotion, and the rare joy of being
            truly cared for. From the moment you arrive to the final sip of
            dessert wine, every detail is designed with you in mind.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
            gap: '32px', marginTop: '48px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(201,168,76,0.15)'
          }}>
            {[
              { num: '15+', label: 'Years of Excellence' },
              { num: '42',  label: 'Signature Dishes' },
              { num: '3',   label: 'Industry Awards' }
            ].map(s => (
              <div key={s.label}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.6rem', fontWeight: 300,
                  color: 'var(--gold)', display: 'block', lineHeight: 1
                }}>{s.num}</span>
                <span style={{
                  fontSize: '0.58rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--text-muted)',
                  display: 'block', marginTop: '8px'
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 2: Timeline ── */}
      <div style={{
        padding: '100px 60px',
        background: 'var(--dark)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
        }} />

        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">The <em>Story So Far</em></h2>
          <div className="gold-line" />
        </div>

        <div style={{
          maxWidth: '900px', margin: '0 auto',
          position: 'relative'
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
            transform: 'translateX(-50%)'
          }} />

          {STORY_SECTIONS.map((s, i) => (
            <div key={s.year}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 60px 1fr',
                gap: '0', marginBottom: '60px',
                alignItems: 'center'
              }}>
              {/* Left */}
              <div style={{
                textAlign: 'right',
                paddingRight: '50px',
                opacity: i % 2 === 0 ? 1 : 0,
                pointerEvents: i % 2 === 0 ? 'auto' : 'none'
              }}>
                {i % 2 === 0 && (
                  <>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.75rem', color: 'var(--gold)',
                      letterSpacing: '0.3em', marginBottom: '8px'
                    }}>{s.year}</div>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.4rem', marginBottom: '12px'
                    }}>{s.title}</h3>
                    <p style={{
                      fontSize: '0.75rem', lineHeight: 1.9,
                      color: 'rgba(245,240,232,0.55)'
                    }}>{s.text}</p>
                  </>
                )}
              </div>

              {/* Center dot */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '14px', height: '14px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  border: '3px solid var(--black)',
                  boxShadow: '0 0 0 1px var(--gold)'
                }} />
              </div>

              {/* Right */}
              <div style={{
                paddingLeft: '50px',
                opacity: i % 2 !== 0 ? 1 : 0,
                pointerEvents: i % 2 !== 0 ? 'auto' : 'none'
              }}>
                {i % 2 !== 0 && (
                  <>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.75rem', color: 'var(--gold)',
                      letterSpacing: '0.3em', marginBottom: '8px'
                    }}>{s.year}</div>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.4rem', marginBottom: '12px'
                    }}>{s.title}</h3>
                    <p style={{
                      fontSize: '0.75rem', lineHeight: 1.9,
                      color: 'rgba(245,240,232,0.55)'
                    }}>{s.text}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PART 3: Meet the Team ── */}
      <div style={{ padding: '100px 60px', background: 'var(--black)' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">The People Behind the Magic</span>
          <h2 className="section-title">Meet Our <em>Team</em></h2>
          <div className="gold-line" />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px', maxWidth: '1000px', margin: '0 auto'
        }}>
          {TEAM.map((member, i) => (
            <div key={member.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--dark2)',
                overflow: 'hidden',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img src={member.img} alt={member.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', filter: 'brightness(0.75)',
                    transition: 'transform 0.6s'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent 60%)'
                }} />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '8px'
                }}>{member.role}</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.3rem', marginBottom: '12px'
                }}>{member.name}</h3>
                <p style={{
                  fontSize: '0.72rem', lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.5)'
                }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PART 4: Philosophy ── */}
      <div style={{
        padding: '100px 60px',
        background: 'var(--dark)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.08)'
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '700px', margin: '0 auto', textAlign: 'center'
        }}>
          <div style={{
            fontSize: '4rem', color: 'var(--gold)',
            fontFamily: 'Cormorant Garamond, serif',
            opacity: 0.3, lineHeight: 1, marginBottom: '8px'
          }}>"</div>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontStyle: 'italic', fontWeight: 300,
            lineHeight: 1.7, color: 'var(--cream)',
            marginBottom: '32px'
          }}>
            Great cooking is not about recipes. It is about understanding
            the soul of an ingredient and allowing it to speak for itself —
            with reverence, with restraint, and with love.
          </p>
          <div style={{
            fontSize: '0.65rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)'
          }}>— Chef Étienne Moreau, Founder</div>
        </div>
      </div>

    </section>
  )
}