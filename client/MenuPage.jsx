import { useState, useEffect } from 'react'
import api from '../api'

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const res = await api.get('/menu')
      setMenuItems(res.data)
      console.log('Menu loaded from API:', res.data)
    } catch (error) {
      console.error('Error fetching menu, using sample data:', error)
      // Sample data to show when backend is down
      setMenuItems([
        {
          id: 1,
          name: "Wagyu Filet Mignon",
          description: "Grade A5 Japanese Wagyu, seasonal vegetables, red wine jus",
          price: 695.00,
          category: "Mains"
        },
        {
          id: 2,
          name: "Oyster Starter",
          description: "Fresh oysters, champagne mignonette, caviar",
          price: 180.00,
          category: "Starters"
        },
        {
          id: 3,
          name: "Dark Chocolate Soufflé",
          description: "Valrhona chocolate, vanilla bean ice cream",
          price: 145.00,
          category: "Desserts"
        },
        {
          id: 4,
          name: "Mediterranean Pasta",
          description: "Fresh house-made pasta, seafood, garlic, white wine sauce",
          price: 295.00,
          category: "Mains"
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <section id="menu-page" style={{
      padding: '140px 60px',
      background: 'var(--black)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Culinary Excellence</span>
          <h2 className="section-title">Our <em>Menu</em></h2>
          <div className="gold-line" />
          <p style={{
            fontSize: '0.78rem',
            color: 'rgba(245,240,232,0.55)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            A carefully curated selection of dishes crafted with the finest ingredients,
            inspired by classical techniques and modern innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '60px',
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
                padding: '12px 30px',
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
            gap: '40px'
          }}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                style={{
                  padding: '35px',
                  background: '#111',
                  borderLeft: '2px solid rgba(201,168,76,0.15)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    color: '#F5F0E8'
                  }}>
                    {item.name}
                  </h3>
                  <span style={{
                    color: '#C9A84C',
                    fontSize: '1.3rem',
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
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'rgba(201,168,76,0.1)',
                  padding: '4px 12px',
                  borderRadius: '20px'
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