import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/login', form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('admin', res.data.username)
      toast.success('Welcome back!')
      navigate('/admin/dashboard')
    } catch {
      toast.error('Invalid credentials')
    }
    setLoading(false)
  }

  const inputStyle = {
    background: '#1A1A1A',
    border: '1px solid rgba(201,168,76,0.2)',
    color: '#F5F0E8', padding: '16px 20px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.8rem', outline: 'none',
    width: '100%', marginBottom: '20px',
    transition: 'border-color 0.3s'
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#0A0A0A',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        width: '100%', maxWidth: '420px',
        background: '#111', padding: '60px 50px',
        border: '1px solid rgba(201,168,76,0.15)'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem', color: '#C9A84C',
            letterSpacing: '0.2em', marginBottom: '8px'
          }}>Maison Dorée</div>
          <div style={{
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#888'
          }}>Admin Portal</div>
          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            margin: '20px auto 0'
          }} />
        </div>

        {/* Form */}
        <form onSubmit={submit}>
          <label style={{
            fontSize: '0.6rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#C9A84C',
            display: 'block', marginBottom: '10px'
          }}>Username</label>
          <input style={inputStyle} name="username"
            placeholder="admin" required
            value={form.username} onChange={handle}
            onFocus={e => e.target.style.borderColor = '#C9A84C'}
            onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
          />

          <label style={{
            fontSize: '0.6rem', letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#C9A84C',
            display: 'block', marginBottom: '10px'
          }}>Password</label>
          <input style={inputStyle} name="password"
            type="password" placeholder="••••••••" required
            value={form.password} onChange={handle}
            onFocus={e => e.target.style.borderColor = '#C9A84C'}
            onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
          />

          <button type="submit" disabled={loading}
            style={{
              width: '100%', background: '#C9A84C',
              color: '#0A0A0A', border: 'none',
              padding: '18px', marginTop: '8px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseEnter={e => e.target.style.background = '#E8D5A3'}
            onMouseLeave={e => e.target.style.background = '#C9A84C'}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{
          textAlign: 'center', marginTop: '32px'
        }}>
          <a href="/" style={{
            fontSize: '0.6rem', color: 'rgba(201,168,76,0.4)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none'
          }}
          onMouseEnter={e => e.target.style.color = '#C9A84C'}
          onMouseLeave={e => e.target.style.color = 'rgba(201,168,76,0.4)'}
          >← Back to Website</a>
        </div>
      </div>
    </div>
  )
}