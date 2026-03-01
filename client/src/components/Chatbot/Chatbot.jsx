import { useState, useRef, useEffect } from 'react'

const KNOWLEDGE = {
  hours: 'We are open Tuesday to Saturday: 18:00 – 23:00, and Sunday Brunch: 11:00 – 15:00. We are closed on Mondays.',
  location: 'We are located at 12 Marine Parade, Florida Road, Durban, KwaZulu-Natal, 4001.',
  phone: 'You can reach us at +27 31 456 7890 or email reservations@maisondoree.co.za',
  reservation: 'You can reserve a table by scrolling to our Reservations section, or call us at +27 31 456 7890. We recommend booking at least 48 hours in advance.',
  parking: 'We offer complimentary valet parking for all guests from 17:30 onwards.',
  dress: 'We maintain a smart casual to formal dress code. We kindly ask guests to avoid shorts, flip flops and sportswear.',
  menu: 'Our menu features Breakfast, Starters, Tapas, Mains, Grills, Pasta, Pizza, Sushi and Desserts. We also have an extensive Drinks Menu with cocktails, champagne, wines, whiskey and cognac.',
  price: 'Our menu ranges from R50 for sides to R695 for premium mains. Sushi platters from R330. Champagne from R690 to R16 100. Whiskey from R1 140 to R30 475.',
  private: 'We offer private dining for up to 24 guests with full menu customisation. Contact reservations@maisondoree.co.za for enquiries.',
  events: 'We host Wine & Dine evenings, Chef\'s Table experiences, Jazz & Champagne nights, and Seasonal Harvest dinners. Check our Events section for upcoming dates.',
  wifi: 'Complimentary Wi-Fi is available for all dining guests. Ask your waiter for the password.',
  allergy: 'Please inform your waiter of any allergies or dietary requirements. Our kitchen will do its utmost to accommodate you.',
  vegan: 'We have vegetarian and vegan options available. Please inform your waiter and we will guide you through suitable dishes.',
  halal: 'Please note that Maison Dorée is a non-Halal venue.',
  payment: 'We accept all major credit and debit cards, as well as cash. We do not accept cheques.',
  children: 'Children are welcome at Maison Dorée. We have a limited children\'s menu available on request.',
  gift: 'Gift vouchers are available in any denomination. Please contact reservations@maisondoree.co.za to arrange.',
  careers: 'We are always looking for passionate hospitality professionals. Visit our Careers page or email careers@maisondoree.co.za',
  sushi: 'Our sushi menu includes rolls, sashimi, and platters. Prices range from R90 to R1100 for the Maison Platter.',
  wine: 'Our wine cellar features over 200 South African and French vintages. Our Head Sommelier Marco Ferreira will be happy to guide your selection.',
  cocktails: 'Our signature cocktails include Maison Rouge (R750), Maison Blanc (R690), Purple Haze (R135), and many summer specials.',
}

const QUICK = [
  'Opening hours?',
  'Make a reservation',
  'Where are you located?',
  'Menu & prices',
  'Dress code',
  'Private dining',
]

function getReply(msg) {
  const m = msg.toLowerCase()
  if (m.match(/hour|open|clos|time|when/))        return KNOWLEDGE.hours
  if (m.match(/locat|address|where|find|direc/))  return KNOWLEDGE.location
  if (m.match(/phone|call|email|contact/))        return KNOWLEDGE.phone
  if (m.match(/reserv|book|table|seat/))          return KNOWLEDGE.reservation
  if (m.match(/park/))                            return KNOWLEDGE.parking
  if (m.match(/dress|wear|attire|cloth/))         return KNOWLEDGE.dress
  if (m.match(/sushi|roll|sashimi/))              return KNOWLEDGE.sushi
  if (m.match(/wine|cellar|vintage|sommelier/))   return KNOWLEDGE.wine
  if (m.match(/cocktail|drink|bar|spirits/))      return KNOWLEDGE.cocktails
  if (m.match(/menu|food|eat|dish|cuisine/))      return KNOWLEDGE.menu
  if (m.match(/price|cost|much|afford|expens/))   return KNOWLEDGE.price
  if (m.match(/private|function|hire|exclusive/)) return KNOWLEDGE.private
  if (m.match(/event|jazz|champagne|harvest/))    return KNOWLEDGE.events
  if (m.match(/wifi|internet|connect/))           return KNOWLEDGE.wifi
  if (m.match(/allerg|intoleran|celiac|gluten/))  return KNOWLEDGE.allergy
  if (m.match(/vegan|vegetar|plant/))             return KNOWLEDGE.vegan
  if (m.match(/halal|muslim|pork/))               return KNOWLEDGE.halal
  if (m.match(/pay|card|cash|payment/))           return KNOWLEDGE.payment
  if (m.match(/child|kid|baby|famil/))            return KNOWLEDGE.children
  if (m.match(/gift|voucher/))                    return KNOWLEDGE.gift
  if (m.match(/career|job|work|employ|hiring/))   return KNOWLEDGE.careers
  if (m.match(/hello|hi|hey|good evening|good morning/))
    return 'Good evening! Welcome to Maison Dorée. How may I assist you tonight? 🥂'
  if (m.match(/thank/))
    return 'You are most welcome. It is our pleasure to assist you. Is there anything else I can help you with?'
  return 'Thank you for your question. For personalised assistance, please call us at +27 31 456 7890 or email reservations@maisondoree.co.za — our team will be delighted to help.'
}

export default function Chatbot() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Good evening! I am Dorée, your virtual concierge at Maison Dorée. How may I assist you tonight? 🥂'
    }
  ])
  const [input, setInput]   = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef           = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getReply(msg) }])
    }, 900)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        title="Chat with Dorée"
        style={{
          position: 'fixed', bottom: '32px', right: '32px',
          zIndex: 1000,
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--gold), #8B6914)',
          border: '2px solid rgba(201,168,76,0.4)',
          cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(201,168,76,0.5)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          transition: 'all 0.3s'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(201,168,76,0.7)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(201,168,76,0.5)'
        }}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Pulse ring */}
      {!open && (
        <div style={{
          position: 'fixed', bottom: '32px', right: '32px',
          zIndex: 999,
          width: '64px', height: '64px', borderRadius: '50%',
          border: '2px solid var(--gold)',
          animation: 'pulse 2s infinite',
          pointerEvents: 'none'
        }} />
      )}

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '112px', right: '32px',
          zIndex: 1000,
          width: '370px',
          background: 'var(--dark)',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease'
        }}>

          {/* Header */}
          <div style={{
            padding: '18px 20px',
            background: 'linear-gradient(135deg, var(--dark2), #0f0f0f)',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold), #8B6914)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '1.3rem',
              border: '2px solid rgba(201,168,76,0.3)',
              flexShrink: 0
            }}>👩‍🍳</div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.15rem', color: 'var(--gold)', lineHeight: 1.2
              }}>Dorée</div>
              <div style={{
                fontSize: '0.58rem', color: 'rgba(245,240,232,0.4)',
                letterSpacing: '0.1em', marginTop: '2px'
              }}>Virtual Concierge · Always Available</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '7px', height: '7px',
                borderRadius: '50%', background: '#44ff88',
                boxShadow: '0 0 6px #44ff88'
              }} />
              <span style={{
                fontSize: '0.55rem', color: '#44ff88',
                letterSpacing: '0.1em'
              }}>Online</span>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            height: '340px', overflowY: 'auto',
            padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(201,168,76,0.2) transparent'
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start',
                gap: '8px', alignItems: 'flex-end'
              }}>
                {m.from === 'bot' && (
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'var(--gold)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', flexShrink: 0
                  }}>👩‍🍳</div>
                )}
                <div style={{
                  maxWidth: '75%',
                  padding: '10px 14px',
                  background: m.from === 'user'
                    ? 'linear-gradient(135deg, var(--gold), #a07830)'
                    : 'var(--dark2)',
                  color: m.from === 'user' ? 'var(--black)' : 'var(--cream)',
                  fontSize: '0.75rem', lineHeight: 1.7,
                  border: m.from === 'bot'
                    ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  fontWeight: m.from === 'user' ? 400 : 300
                }}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'var(--gold)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem'
                }}>👩‍🍳</div>
                <div style={{
                  padding: '10px 16px', background: 'var(--dark2)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  display: 'flex', gap: '4px', alignItems: 'center'
                }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%', background: 'var(--gold)',
                      animation: `bounce 1s ${i * 0.2}s infinite`
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div style={{
            padding: '8px 12px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
            display: 'flex', flexWrap: 'wrap', gap: '5px',
            background: 'rgba(0,0,0,0.2)'
          }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => send(q)} style={{
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--gold)', padding: '5px 10px',
                fontSize: '0.58rem', letterSpacing: '0.08em',
                cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
                transition: 'all 0.2s', borderRadius: '0'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--gold)'
                e.target.style.color = 'var(--black)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent'
                e.target.style.color = 'var(--gold)'
              }}
              >{q}</button>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 14px',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            display: 'flex', gap: '8px',
            background: 'var(--dark2)'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                color: 'var(--cream)', padding: '10px 14px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.75rem', outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.15)'}
            />
            <button onClick={() => send()} style={{
              background: 'var(--gold)', border: 'none',
              color: 'var(--black)', padding: '10px 16px',
              cursor: 'pointer', fontSize: '1.1rem',
              transition: 'background 0.3s', flexShrink: 0
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >➤</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}