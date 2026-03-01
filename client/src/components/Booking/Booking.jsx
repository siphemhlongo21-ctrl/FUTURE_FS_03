import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Booking() {
  const [form, setForm] = useState({
    customer_name: '', email: '', phone: '',
    reservation_date: '', reservation_time: '',
    guests: '', occasion: '', special_requests: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/reservations', form)
      setSubmitted(true)
      toast.success('Reservation confirmed!')
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

const inputStyle = {
    background: 'rgba(10,10,10,0.75)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderBottom: '2px solid rgba(201,168,76,0.5)',
    color: 'var(--cream)',
    padding: '16px 20px',
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.05em',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s, background 0.3s',
    backdropFilter: 'blur(4px)'
  }

  const labelStyle = {
    fontSize: '0.55rem', letterSpacing: '0.35em',
    textTransform: 'uppercase', color: 'var(--gold)',
    display: 'block', marginBottom: '10px',
    fontFamily: 'Montserrat, sans-serif'
  }


  return (
    <section id="reservation" style={{
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.15)'
      }} />

      {/* Gold gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)'
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        padding: '120px 60px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-label">Book Your Evening</span>
            <h2 className="section-title">Reserve a <em>Table</em></h2>
            <div className="gold-line" />
            <p style={{
              fontSize: '0.78rem', color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.8, maxWidth: '500px', margin: '0 auto'
            }}>
              We recommend booking at least 48 hours in advance.
              For special occasions, include your request in the notes.
            </p>
          </div>

          {/* Success */}
          {submitted ? (
            <div className="reveal" style={{
              textAlign: 'center', padding: '80px 60px',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.2)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✨</div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem', color: 'var(--gold)',
                marginBottom: '16px', fontWeight: 300
              }}>Reservation Received</h3>
              <div style={{
                width: '60px', height: '1px',
                background: 'var(--gold)',
                margin: '0 auto 24px'
              }} />
              <p style={{
                fontSize: '0.78rem', color: 'var(--text-muted)',
                lineHeight: 2
              }}>
                Thank you for choosing Maison Dorée.<br />
                A confirmation will be sent to your email shortly.<br />
                We look forward to welcoming you.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="reveal">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {/* Name */}
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input style={inputStyle} name="customer_name"
                    placeholder="Jean Dupont" required
                    value={form.customer_name} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input style={inputStyle} name="email" type="email"
                    placeholder="your@email.com" required
                    value={form.email} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input style={inputStyle} name="phone"
                    placeholder="+27 31 000 0000" required
                    value={form.phone} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  />
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Date</label>
                  <input style={inputStyle} name="reservation_date"
                    type="date" required
                    value={form.reservation_date} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  />
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <select style={inputStyle} name="reservation_time"
                    required value={form.reservation_time} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  >
                    <option value="">Select time</option>
                    <option value="18:00">18:00 — First Seating</option>
                    <option value="19:00">19:00 — Second Seating</option>
                    <option value="19:30">19:30 — Prime Seating</option>
                    <option value="20:00">20:00 — Late Seating</option>
                    <option value="20:30">20:30 — Final Seating</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label style={labelStyle}>Number of Guests</label>
                  <select style={inputStyle} name="guests"
                    required value={form.guests} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  >
                    <option value="">Select guests</option>
                    {[1,2,3,4,5,6].map(n => (
                      <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                    ))}
                    <option value="7">Private Dining (7+)</option>
                  </select>
                </div>

                {/* Occasion */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Occasion</label>
                  <select style={inputStyle} name="occasion"
                    value={form.occasion} onChange={handle}>
                    <option value="">None / Regular Dining</option>
                    <option value="Birthday">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business Dinner</option>
                    <option value="Proposal">Proposal</option>
                    <option value="Other">Other Special Occasion</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea
                    style={{ ...inputStyle, height: '120px', resize: 'none' }}
                    name="special_requests"
                    placeholder="Allergies, dietary preferences, special arrangements..."
                    value={form.special_requests} onChange={handle}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--gold)'
                      e.target.style.background = 'rgba(201,168,76,0.05)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  />
                </div>

                {/* Submit */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn-gold"
                    disabled={loading}
                    style={{ width: '100%', padding: '22px', fontSize: '0.72rem' }}>
                    {loading ? 'Confirming Reservation...' : 'Confirm Reservation'}
                  </button>
                  <p style={{
                    textAlign: 'center', fontSize: '0.62rem',
                    color: 'var(--text-muted)', marginTop: '16px',
                    letterSpacing: '0.1em'
                  }}>
                    Confirmation email within 2 hours · Cancellations accepted up to 24 hours prior
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}