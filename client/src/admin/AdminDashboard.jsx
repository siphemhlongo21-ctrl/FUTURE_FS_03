import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AdminDashboard() {
  const [tab, setTab]                   = useState('reservations')
  const [reservations, setReservations] = useState([])
  const [menuItems, setMenuItems]       = useState([])
  const [loading, setLoading]           = useState(true)
  const [newItem, setNewItem]           = useState({
    name: '', description: '', price: '', category: 'Starters', image_url: ''
  })
  const navigate = useNavigate()
  const token    = localStorage.getItem('token')
  const admin    = localStorage.getItem('admin')

  useEffect(() => {
    if (!token) { navigate('/admin'); return }
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` }
      const [res, menu] = await Promise.all([
        axios.get('/api/reservations', { headers }),
        axios.get('/api/menu')
      ])
      setReservations(res.data)
      setMenuItems(menu.data)
    } catch { toast.error('Session expired'); navigate('/admin') }
    setLoading(false)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    navigate('/admin')
  }

  const addItem = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/menu', newItem, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Menu item added!')
      setNewItem({ name: '', description: '', price: '', category: 'Starters', image_url: '' })
      fetchData()
    } catch { toast.error('Failed to add item') }
  }

  const deleteItem = async id => {
    if (!window.confirm('Delete this item?')) return
    try {
      await axios.delete(`/api/menu/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Item deleted!')
      fetchData()
    } catch { toast.error('Failed to delete') }
  }

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/reservations/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      toast.success('Status updated!')
      fetchData()
    } catch { toast.error('Failed to update') }
  }

  const inputStyle = {
    background: '#1A1A1A', border: '1px solid rgba(201,168,76,0.2)',
    color: '#F5F0E8', padding: '12px 16px',
    fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem',
    outline: 'none', width: '100%'
  }

  if (loading) return (
    <div style={{
      minHeight: '100vh', background: '#0A0A0A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#C9A84C', fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '0.2em', fontSize: '0.8rem'
    }}>Loading...</div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>

      {/* Header */}
      <div style={{
        background: '#111', borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '20px 40px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.4rem', color: '#C9A84C', letterSpacing: '0.15em'
        }}>Maison Dorée <span style={{ color: '#888', fontSize: '0.9rem' }}>· Admin</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '0.1em' }}>
            Welcome, {admin}
          </span>
          <button onClick={logout} style={{
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C', padding: '8px 20px',
            fontSize: '0.6rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif'
          }}>Logout</button>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: '2px', padding: '2px', background: '#0A0A0A'
      }}>
        {[
          { label: 'Total Reservations', value: reservations.length },
          { label: 'Pending',            value: reservations.filter(r => r.status === 'Pending').length },
          { label: 'Menu Items',         value: menuItems.length }
        ].map(s => (
          <div key={s.label} style={{
            background: '#111', padding: '28px 32px',
            borderBottom: '2px solid rgba(201,168,76,0.1)'
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem', color: '#C9A84C', lineHeight: 1
            }}>{s.value}</div>
            <div style={{
              fontSize: '0.6rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#888', marginTop: '8px'
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '0 40px', background: '#111'
      }}>
        {['reservations', 'menu', 'add-item'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '16px 28px', background: 'transparent', border: 'none',
            color: tab === t ? '#C9A84C' : '#888',
            borderBottom: tab === t ? '2px solid #C9A84C' : '2px solid transparent',
            fontSize: '0.65rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif', marginBottom: '-1px'
          }}>
            {t === 'add-item' ? 'Add Item' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '40px' }}>

        {/* RESERVATIONS TAB */}
        {tab === 'reservations' && (
          <div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', color: '#F5F0E8',
              marginBottom: '24px', fontWeight: 300
            }}>All Reservations</h3>
            {reservations.length === 0 ? (
              <p style={{ color: '#888', fontSize: '0.8rem' }}>No reservations yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {reservations.map(r => (
                  <div key={r.id} style={{
                    background: '#111', padding: '24px 28px',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                    gap: '16px', alignItems: 'center',
                    borderLeft: '2px solid rgba(201,168,76,0.1)'
                  }}>
                    <div>
                      <div style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.1rem', color: '#F5F0E8'
                      }}>{r.customer_name}</div>
                      <div style={{ fontSize: '0.65rem', color: '#888', marginTop: '4px' }}>
                        {r.email}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#C9A84C' }}>
                      {new Date(r.reservation_date).toLocaleDateString()}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#F5F0E8' }}>
                      {r.reservation_time} · {r.guests} guests
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#888' }}>
                      {r.occasion || 'Regular Dining'}
                    </div>
                    <select
                      value={r.status}
                      onChange={e => updateStatus(r.id, e.target.value)}
                      style={{
                        ...inputStyle, padding: '8px 12px',
                        color: r.status === 'Confirmed' ? '#C9A84C' :
                               r.status === 'Cancelled' ? '#ff4444' : '#F5F0E8'
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MENU TAB */}
        {tab === 'menu' && (
          <div>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', color: '#F5F0E8',
              marginBottom: '24px', fontWeight: 300
            }}>Menu Items</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: '2px'
            }}>
              {menuItems.map(item => (
                <div key={item.id} style={{
                  background: '#111', padding: '24px',
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderLeft: '2px solid rgba(201,168,76,0.1)'
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.1rem', color: '#F5F0E8', marginBottom: '6px'
                    }}>{item.name}</div>
                    <div style={{
                      fontSize: '0.65rem', color: '#888',
                      marginBottom: '8px', lineHeight: 1.6
                    }}>{item.description}</div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ color: '#C9A84C', fontSize: '0.85rem' }}>
                        R{Number(item.price).toFixed(2)}
                      </span>
                      <span style={{
                        fontSize: '0.55rem', letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: '#888',
                        padding: '2px 8px',
                        border: '1px solid rgba(201,168,76,0.2)'
                      }}>{item.category}</span>
                    </div>
                  </div>
                  <button onClick={() => deleteItem(item.id)} style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,68,68,0.3)',
                    color: '#ff4444', padding: '8px 16px',
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', cursor: 'pointer',
                    fontFamily: 'Montserrat, sans-serif', flexShrink: 0
                  }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD ITEM TAB */}
        {tab === 'add-item' && (
          <div style={{ maxWidth: '600px' }}>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', color: '#F5F0E8',
              marginBottom: '32px', fontWeight: 300
            }}>Add Menu Item</h3>
            <form onSubmit={addItem} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'
            }}>
              {[
                { label: 'Item Name',    name: 'name',        placeholder: 'Wagyu Filet Mignon', full: false },
                { label: 'Price (R)',    name: 'price',       placeholder: '695.00', full: false },
                { label: 'Description', name: 'description', placeholder: 'Describe the dish...', full: true },
                { label: 'Image URL',   name: 'image_url',   placeholder: 'https://...', full: true }
              ].map(f => (
                <div key={f.name} style={{ gridColumn: f.full ? '1 / -1' : 'auto' }}>
                  <label style={{
                    fontSize: '0.6rem', letterSpacing: '0.25em',
                    textTransform: 'uppercase', color: '#C9A84C',
                    display: 'block', marginBottom: '10px'
                  }}>{f.label}</label>
                  {f.name === 'description' ? (
                    <textarea style={{ ...inputStyle, height: '100px', resize: 'none' }}
                      name={f.name} placeholder={f.placeholder} required={f.name !== 'image_url'}
                      value={newItem[f.name]}
                      onChange={e => setNewItem({ ...newItem, [f.name]: e.target.value })}
                    />
                  ) : (
                    <input style={inputStyle}
                      name={f.name} placeholder={f.placeholder}
                      required={f.name !== 'image_url'}
                      value={newItem[f.name]}
                      onChange={e => setNewItem({ ...newItem, [f.name]: e.target.value })}
                    />
                  )}
                </div>
              ))}

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{
                  fontSize: '0.6rem', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: '#C9A84C',
                  display: 'block', marginBottom: '10px'
                }}>Category</label>
                <select style={inputStyle} name="category"
                  value={newItem.category}
                  onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                >
                  {['Starters','Mains','Desserts','Drinks'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit" style={{
                  width: '100%', background: '#C9A84C',
                  color: '#0A0A0A', border: 'none', padding: '18px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.7rem', letterSpacing: '0.25em',
                  textTransform: 'uppercase', cursor: 'pointer'
                }}>Add to Menu</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}