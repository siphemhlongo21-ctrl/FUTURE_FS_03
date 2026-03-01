import { useState, useEffect } from 'react'
import axios from 'axios'

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

export default function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const res = await axios.get('/api/menu')
      setMenuItems(res.data)
    } catch (error) {
      console.error('Error fetching menu:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <section id="menu" style={{
      padding: '120px 60px',
      background: 'var(--black)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Culinary Excellence</span>
          <h2 className="section-title">Our <em>Menu</em></h2>
          <div className="gold-line" />
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '50px',
          flexWrap: 'wrap'
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#C9A84C' : 'transparent',
                color: selectedCategory === cat ? '#0A0A0A' : '#F5F0E8',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '10px 25px',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {loading ? (
          <div style={{ textAlign: 'center', color: '#888' }}>Loading menu...</div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="reveal"
                style={{
                  padding: '30px',
                  background: '#111',
                  borderLeft: '2px solid rgba(201,168,76,0.1)',
                  transition: 'transform 0.3s'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    color: '#F5F0E8'
                  }}>
                    {item.name}
                  </h3>
                  <span style={{
                    color: '#C9A84C',
                    fontSize: '1.2rem',
                    fontFamily: 'Cormorant Garamond, serif'
                  }}>
                    R{Number(item.price).toFixed(2)}
                  </span>
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#888',
                  lineHeight: 1.8,
                  marginBottom: '15px'
                }}>
                  {item.description}
                </p>
                <span style={{
                  fontSize: '0.6rem',
                  color: '#C9A84C',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}