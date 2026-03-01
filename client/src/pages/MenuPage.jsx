import { useState, useEffect } from 'react'
import api from '../api'

const TABS = ['Food Menu', 'Drinks Menu']

const FOOD_SECTIONS = [
  {
    title: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80',
    items: [
      { name: 'Muesli Bowl', desc: 'Toasted muesli with Greek yoghurt & honey', price: 'R85' },
      { name: 'Chicken Livers', desc: 'Creamy livers & toast', price: 'R85' },
      { name: 'Flapjacks', desc: 'Greek yoghurt, berries & honey', price: 'R85' },
      { name: 'Loaded Croissant', desc: 'Scrambled eggs, bacon, tomato & rocket', price: 'R110' },
      { name: 'No Fuss Breakfast', desc: 'Two eggs & bacon on toast', price: 'R60' },
      { name: 'Avo on Toast', desc: 'Smashed avocado, fried egg, chilli flakes', price: 'R90' },
      { name: 'Proper Breakfast', desc: 'Two eggs, bacon, grilled tomato, mushrooms, baked beans, pork sausage & toast', price: 'R135' },
      { name: 'Prosciutto & Avo Toast', desc: 'Avocado on toast topped with prosciutto & a boiled egg', price: 'R145' },
      { name: 'Eggs Benedict', desc: 'Poached eggs, bacon, English muffin, hollandaise sauce', price: 'R95' },
      { name: 'Shakshuka', desc: 'Spicy tomato, mince relish with eggs & avocado', price: 'R135' },
      { name: 'French Toast', desc: 'Challa toast, syrup, bacon & berry compote', price: 'R120' },
    ]
  },
  {
    title: 'Starters & Salads',
    img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&q=80',
    items: [
      { name: 'Fresh Oysters', desc: 'Ocean fresh oysters (6)', price: 'R195' },
      { name: 'Mussels', desc: 'Mussels in with marinara sauce', price: 'R110' },
      { name: 'Chicken Livers', desc: 'Chicken livers, chilli flakes & creamy marinara sauce', price: 'R95' },
      { name: 'Beef Relish', desc: 'Beef fillet strips, rich tomato relish', price: 'R165' },
      { name: 'Asian Dumplings', desc: 'Chicken or Pork', price: 'R90' },
      { name: 'Kingklip & Bulgar Wheat', desc: 'Pan fried kingklip, cherry tomatoes, red onion, chick peas', price: 'R165' },
      { name: 'Roast Chicken Salad', desc: 'Mixed greens, cucumber, cherry tomato, avocado & corn', price: 'R145' },
      { name: 'Oriental Beef Salad', desc: 'Sweet chilli beef strips, asian noodles and greens', price: 'R165' },
      { name: 'Lamb & Cous Cous Salad', desc: 'Garlic roasted lamb peppers, feta', price: 'R225' },
    ]
  },
  {
    title: 'Tapas',
    img: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
    items: [
      { name: 'Lamb Skewers', desc: 'Grilled lamb skewers', price: 'R240' },
      { name: 'Tempura Prawns', desc: 'Crispy tempura prawns', price: 'R240' },
      { name: 'Beef Fillet Skewers', desc: 'Tender beef fillet skewers', price: 'R220' },
      { name: 'Grilled Prawns', desc: 'Fresh grilled prawns', price: 'R240' },
      { name: 'Chicken Skewers', desc: 'Marinated chicken skewers', price: 'R95' },
      { name: 'Fillet Strips', desc: 'Tender fillet strips', price: 'R180' },
      { name: 'Chilli Chicken Wings', desc: 'Spicy chicken wings', price: 'R110' },
      { name: 'Tzatziki', desc: 'Greek yoghurt dip', price: 'R70' },
      { name: 'BBQ Riblets', desc: 'Slow cooked BBQ riblets', price: 'R180' },
      { name: 'Garlic Flat Bread', desc: 'Freshly baked garlic flatbread', price: 'R50' },
      { name: 'Maison Burgers', desc: 'Signature house burger', price: 'R160' },
      { name: 'Marinated Olives', desc: 'House marinated olives', price: 'R75' },
      { name: 'Grilled Lamb Chops', desc: 'French trimmed lamb chops', price: 'R290' },
      { name: 'Roasted Rosa Tomatoes', desc: 'Oven roasted rosa tomatoes', price: 'R60' },
    ]
  },
  {
    title: 'Mains',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
    items: [
      { name: 'La Chica Del Mar', desc: 'Crispy skin salmon, cherry tomato, spinach, mushrooms, creamy fish sauce with basil pesto oil', price: 'R330' },
      { name: 'Teriyaki Salmon', desc: 'Salmon, mushroom, peppers and asian noodles', price: 'R370' },
      { name: 'Petits Pois À La Française', desc: 'Linefish & prawns on a bed of creamy mash', price: 'R370' },
      { name: 'Roast Chicken & Couscous', desc: 'Roast Chicken Thighs, jeweled couscous', price: 'R260' },
      { name: 'Lamb Curry', desc: 'Lamb, tomato puree, coriander with rice', price: 'R295' },
      { name: 'Chicken & Prawn Curry', desc: 'Coconut milk, tomato sauce, rice', price: 'R295' },
      { name: 'Lamb Shank', desc: 'Braised Lamb Shank, parmesan samp, tender stem broccoli', price: 'R310' },
    ]
  },
  {
    title: 'Grills & Pasta',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    items: [
      { name: 'Herb Crusted Lamb Chops', desc: 'Grilled chops, green herbs, jus, chive mash', price: 'R330' },
      { name: 'Angus Ribeye', desc: 'Grilled 350g aged Angus', price: 'R450' },
      { name: 'Brisket Burger', desc: 'Flame grilled ground brisket, gerkin mayo, rocket, red onion', price: 'R330' },
      { name: 'Grilled Prawns', desc: 'Peri-peri grilled prawns, coconut rice', price: 'R360' },
      { name: 'Seafood Platter', desc: '1.5KG Whole fish, prawns, calamari, mussels, rice, vegetables & chips', price: 'SQ' },
      { name: 'Sea Food Pasta', desc: 'Prawns, calamari, mussels, kingklip & white wine cream', price: 'R330' },
      { name: 'Prawn O Pronto', desc: 'Prawns, mushroom, bell peppers, creamy pronto sauce', price: 'R280' },
      { name: 'Maison Signature Pasta', desc: 'Chorizo, prawns, creamy sauce', price: 'R240' },
      { name: 'Beef Bolognese', desc: 'Ground beef, bolognese sauce', price: 'R160' },
      { name: 'Creamy Garlic Chicken', desc: 'Roast chicken, garlic, bacon & peppers', price: 'R195' },
    ]
  },
  {
    title: 'Pizza',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    items: [
      { name: 'Chicken Delight', desc: 'Roast chicken, peppers, avocado, pepper dews', price: 'R210' },
      { name: 'Con Carne', desc: 'Short rib, goude cream sauce, red onions, peppers', price: 'R225' },
      { name: 'Sea Food', desc: 'Kingklip, mussels, calamari, peppers, spring onion', price: 'R260' },
      { name: 'Margherita', desc: 'Tomato, basil & mozzarella', price: 'R180' },
      { name: 'Mexicana', desc: 'Peri-peri ground beef or spicy cajun chicken with jalapeños, mushrooms, guacamole', price: 'R225' },
      { name: 'Durban Lamb Pizza', desc: 'Mozzarella, lamb jus & pronto, chilli crisps & salsa', price: 'R220' },
    ]
  },
  {
    title: 'Desserts',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    items: [
      { name: 'Strawberry Napolean', desc: 'Strawberry flavoured napoleon cream, crispy & sweet puff pastry and basil infused strawberry compote', price: 'R85' },
      { name: 'Coconut & Lime Panna Cotta', desc: 'A play on Piña Colada flavours served with a mild pineapple salsa, lime curd, chocolate crumbs & toasted coconut flakes', price: 'R95' },
      { name: 'Caramel Flan', desc: 'Orange flavoured shortbread, Chantilly cream, orange tuille & cranberry pearls', price: 'R105' },
      { name: 'Cake of the Day', desc: 'Ask your waiter for today\'s selection', price: 'SQ' },
    ]
  },
  {
    title: 'Sushi',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
    items: [
      { name: 'Hayashi Roll', desc: 'Sushi rice roll & seaweed nori with filling of Salmon, Tuna or Prawn Tempura', price: 'R140 (4) | R260 (8)' },
      { name: 'Strawberry Rainbow Roll', desc: 'California Roll (Salmon, Tuna or Prawn Tempura) opped with avo & strawberry', price: 'R130 (4) | R250 (8)' },
      { name: 'Hot Crunch', desc: 'Sushi rice roll inside out with filling of choice Salmon, Tuna or Prawn Tempura', price: 'R90 (4) | R167 (8)' },
      { name: 'Rainbow Roll', desc: 'Sushi rice roll inside out with filling of choice Salmon, Tuna, Prawn Tempura or Veg', price: 'R90 (4) | R167 (8)' },
      { name: 'Prawn Dunk', desc: 'Prawn California Roll topped with tempura prawn & sweet spicy mayo', price: 'R165 (4) | R290 (8)' },
      { name: 'Dragon Roll', desc: 'California Roll, Tempura prawn, avo & feta wrapped with salmon & Avo', price: 'R230 (8)' },
      { name: 'Platter for One', desc: 'Salmon California Rolls (4), Tuna Nigiri (2), Tuna Bean Curd (2)', price: 'R330' },
      { name: 'Salmon Platter', desc: 'Salmon Rainbow Rolls (4), Salmon Roses (4), Salmon Sashimi (4), Salmon Maki (4)', price: 'R515' },
      { name: 'Maison Platter', desc: 'Prawn Dunk (4), Deep Fried Tuna Roll (4), Salmon Roses (4), Spice Crunch Square (4), Cucumber Roll (4), Samurai Roll (4), Tuna Bean Curd (2)', price: 'R1100' },
    ]
  }
]

const DRINKS_SECTIONS = [
  {
    title: 'Summer Cocktails',
    img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
    items: [
      { name: 'Bartenders Coffee', desc: 'Espresso, coconut milk, Kahlua', price: 'R100' },
      { name: 'Purple Haze', desc: 'Gin, blueberries, red wine', price: 'R135' },
      { name: 'Le Dolce Vita', desc: 'Malfy Gin Rossa, grapefruit juice', price: 'R145' },
      { name: 'Summer Too Hot', desc: 'Glenlivet 12, pineapple juice, bitters, whey', price: 'R190' },
      { name: 'Warm Embrace', desc: 'Don julio blanco, grapefruit & fresh press apple juice', price: 'R145' },
      { name: 'Watermelon Basil Smash', desc: 'Vodka croc, watermelon, fresh basil and soda', price: 'R115' },
      { name: 'Flag of Maison', desc: 'Tequila blanco, Passionfruit', price: 'R140' },
      { name: 'Maison Rouge', desc: 'Rhubarb & Orange essence, topped with Moet & Chandon mini Bottle', price: 'R750' },
      { name: 'Maison Blanc', desc: 'Grey Goose le poire, Mint essence topped with a Moet & Chandon mini bottle', price: 'R690' },
      { name: 'Pornstar Martini', desc: 'Ciroc, passionfruit, bubbly', price: 'R165' },
      { name: 'Classic Margarita', desc: 'Classic tequila margarita', price: 'R190' },
      { name: 'Spicy Margarita', desc: 'With a fiery kick', price: 'R190' },
      { name: 'Aperol & Prosecco', desc: 'Classic Aperol spritz', price: 'R210' },
    ]
  },
  {
    title: 'Champagne',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    items: [
      { name: 'Armand De Brignac Brut', desc: 'Premium champagne', price: 'R11 500' },
      { name: 'Louise Roederer Cristal', desc: 'Prestigious cuvée', price: 'R14 375' },
      { name: 'Dom Perignon Brut', desc: 'Iconic prestige champagne', price: 'R8625' },
      { name: 'Veuve Clicquot La Grande Dame', desc: 'Exceptional vintage', price: 'R8050' },
      { name: 'Veuve Clicquot Extra Brut', desc: 'Crisp & elegant', price: 'R3450' },
      { name: 'Moët & Chandon Brut', desc: 'Classic celebration champagne', price: 'R2070' },
      { name: 'Moët & Chandon Brut Mini', desc: 'Personal celebration bottle', price: 'R690' },
      { name: 'Bollinger Special Cuvee Brut', desc: 'Rich & complex', price: 'R4140' },
    ]
  },
  {
    title: 'White Wine',
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',
    items: [
      { name: 'KWV Sauvignon Blanc', desc: 'Crisp & fresh', price: 'R195 | R65' },
      { name: 'Strandveld', desc: 'Elegant Sauvignon Blanc', price: 'R320' },
      { name: 'Springfield Life From Stone', desc: 'Complex Sauvignon Blanc', price: 'R450' },
      { name: 'Glen Carlou Unwooded Chardonnay', desc: 'Fresh & fruity', price: 'R390' },
      { name: 'Meerlust Chardonnay', desc: 'Rich & full-bodied', price: 'R750' },
      { name: 'KWV Moscato', desc: 'Sweet & aromatic', price: 'R400' },
      { name: 'Minuty M Rosé', desc: 'Elegant Provençal rosé', price: 'R550' },
      { name: 'Minuty Prestige Rosé', desc: 'Premium Provençal rosé', price: 'R750' },
    ]
  },
  {
    title: 'Red Wine',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    items: [
      { name: 'KWV Cabernet Sauvignon', desc: 'Bold & structured', price: 'R240 | R80' },
      { name: 'Warwick First Lady', desc: 'Elegant Cabernet', price: 'R345' },
      { name: 'Springfield Wholeberry Unfiltered', desc: 'Rich Cabernet Sauvignon', price: 'R450' },
      { name: 'Midnight By Paserene', desc: 'Premium Cabernet Sauvignon', price: 'R875' },
      { name: 'Glen Calou Merlot', desc: 'Smooth & fruity', price: 'R330' },
      { name: 'Vilafonte Series C', desc: 'Iconic South African red blend', price: 'R5052' },
      { name: 'Vilafonte Series M', desc: 'Premium Merlot blend', price: 'R2950' },
      { name: 'De Toren Fusion V', desc: 'Bordeaux style blend', price: 'R2105' },
    ]
  },
  {
    title: 'Whiskey',
    img: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80',
    items: [
      { name: 'Johnnie Walker Blue', desc: 'Ultra premium blend', price: 'R6900' },
      { name: 'Johnnie Walker 18', desc: 'Aged 18 years', price: 'R4025' },
      { name: 'Macallan 12', desc: 'Sherry oak matured', price: 'R3330 | R150' },
      { name: 'Macallan 18', desc: 'Exceptional single malt', price: 'R11 500 | R585' },
      { name: 'Glenfiddich 15', desc: 'Solera Reserve', price: 'R3105' },
      { name: 'Glenfiddich 18', desc: 'Small Batch Reserve', price: 'R4600' },
      { name: 'Glenlivet 12', desc: 'Classic Speyside', price: 'R1900' },
      { name: 'Glenlivet 18', desc: 'Premium aged expression', price: 'R6555 | R220' },
      { name: 'Lagavulin 16', desc: 'Peaty Islay malt', price: 'R5175' },
    ]
  },
  {
    title: 'Cognac',
    img: 'https://images.unsplash.com/photo-1548198471-e5a4b5b7a6b7?w=800&q=80',
    items: [
      { name: 'Hennessy Paradis', desc: 'Ultra-rare cognac', price: 'R30 475' },
      { name: 'Hennessy XO', desc: 'Extra Old premium cognac', price: 'R8050 | R335' },
      { name: 'Hennessy VSOP', desc: 'Very Superior Old Pale', price: 'R2760 | R105' },
      { name: 'Remy Martin 1738', desc: 'Accord Royal cognac', price: 'R4590 | R150' },
      { name: 'Remy Martin VSOP', desc: 'Fine Champagne cognac', price: 'R2875 | R100' },
      { name: 'Courvoisier VSOP', desc: 'Classic VSOP', price: 'R2415' },
      { name: 'Martel VSOP', desc: 'Elegant cognac', price: 'R2415' },
      { name: 'D\'Usse VSOP', desc: 'Premium cognac', price: 'R3220' },
    ]
  }
]

export default function MenuPage() {
  const [activeTab, setActiveTab]         = useState('Food Menu')
  const [activeSection, setActiveSection] = useState(0)
  const [lightbox, setLightbox]           = useState(null)
  const [apiItems, setApiItems]           = useState([])

  useEffect(() => {
    api.get('/menu')
      .then(r => setApiItems(r.data))
      .catch(() => {})
  }, [])

  const sections = activeTab === 'Food Menu' ? FOOD_SECTIONS : DRINKS_SECTIONS
  const current  = sections[activeSection]

  return (
    <section id="menu" style={{
      background: 'var(--black)', position: 'relative'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'
      }} />

      {/* Header */}
      <div className="reveal" style={{
        textAlign: 'center', padding: '80px 60px 0'
      }}>
        <span className="section-label">Culinary Journey</span>
        <h2 className="section-title">Our <em>Menu</em></h2>
        <div className="gold-line" />
      </div>

      {/* Food / Drinks Tab */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: '0', padding: '0 60px',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        marginBottom: '0'
      }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => { setActiveTab(tab); setActiveSection(0) }}
            style={{
              padding: '18px 48px',
              fontSize: '0.72rem', letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: activeTab === tab ? 'var(--gold)' : 'var(--text-muted)',
              background: 'transparent', border: 'none',
              borderBottom: activeTab === tab
                ? '2px solid var(--gold)' : '2px solid transparent',
              marginBottom: '-1px', cursor: 'pointer',
              fontFamily: 'Montserrat, sans-serif',
              transition: 'color 0.3s'
            }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Layout: sidebar + content */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '80vh' }}>

        {/* Sidebar sections */}
        <div style={{
          background: 'var(--dark2)',
          borderRight: '1px solid rgba(201,168,76,0.1)',
          padding: '32px 0'
        }}>
          {sections.map((sec, i) => (
            <button key={sec.title}
              onClick={() => setActiveSection(i)}
              style={{
                width: '100%', textAlign: 'left',
                padding: '16px 28px',
                background: activeSection === i
                  ? 'rgba(201,168,76,0.08)' : 'transparent',
                borderLeft: activeSection === i
                  ? '3px solid var(--gold)' : '3px solid transparent',
                border: 'none', cursor: 'pointer',
                color: activeSection === i ? 'var(--gold)' : 'rgba(245,240,232,0.5)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                if (activeSection !== i) e.target.style.color = 'var(--cream)'
              }}
              onMouseLeave={e => {
                if (activeSection !== i) e.target.style.color = 'rgba(245,240,232,0.5)'
              }}
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {/* Section image */}
          <div style={{
            height: '260px', overflow: 'hidden',
            position: 'relative', cursor: 'zoom-in'
          }}
            onClick={() => setLightbox(current.img)}
          >
            <img src={current.img} alt={current.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', filter: 'brightness(0.5)',
                transition: 'transform 0.6s'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)'
            }} />
            <div style={{
              position: 'absolute', bottom: '28px', left: '40px'
            }}>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.2rem', fontStyle: 'italic',
                color: 'var(--gold)', fontWeight: 300
              }}>{current.title}</h3>
            </div>
            {/* Click to enlarge hint */}
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '6px 12px',
              fontSize: '0.55rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--gold)'
            }}>Click to enlarge</div>
          </div>

          {/* Menu items grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(201,168,76,0.05)'
          }}>
            {current.items.map(item => (
              <div key={item.name}
                style={{
                  padding: '24px 32px',
                  background: 'var(--black)',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = 'var(--gold)'
                  e.currentTarget.style.background = 'var(--dark2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.background = 'var(--black)'
                }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', marginBottom: '8px', gap: '12px'
                }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem', fontWeight: 400,
                    color: 'var(--cream)'
                  }}>{item.name}</span>
                  <span style={{
                    color: 'var(--gold)', fontSize: '0.8rem',
                    whiteSpace: 'nowrap', flexShrink: 0
                  }}>{item.price}</span>
                </div>
                <p style={{
                  fontSize: '0.7rem', lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.45)'
                }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Nav between sections */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '24px 32px',
            borderTop: '1px solid rgba(201,168,76,0.1)'
          }}>
            <button
              onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0}
              style={{
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.2)',
                color: activeSection === 0 ? 'rgba(255,255,255,0.1)' : 'var(--gold)',
                padding: '10px 24px', cursor: activeSection === 0 ? 'not-allowed' : 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.6rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', transition: 'all 0.3s'
              }}>
              ← Previous
            </button>
            <span style={{
              fontSize: '0.6rem', color: 'var(--text-muted)',
              letterSpacing: '0.2em', alignSelf: 'center'
            }}>
              {activeSection + 1} / {sections.length}
            </span>
            <button
              onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
              disabled={activeSection === sections.length - 1}
              style={{
                background: activeSection === sections.length - 1
                  ? 'transparent' : 'var(--gold)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: activeSection === sections.length - 1
                  ? 'rgba(255,255,255,0.1)' : 'var(--black)',
                padding: '10px 24px',
                cursor: activeSection === sections.length - 1 ? 'not-allowed' : 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.6rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', transition: 'all 0.3s'
              }}>
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'zoom-out'
          }}>
          <img src={lightbox} alt="enlarged"
            style={{
              maxWidth: '90vw', maxHeight: '90vh',
              objectFit: 'contain',
              border: '1px solid rgba(201,168,76,0.2)'
            }}
          />
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: '24px', right: '32px',
            background: 'transparent', border: 'none',
            color: 'var(--gold)', fontSize: '2rem', cursor: 'pointer'
          }}>✕</button>
        </div>
      )}
    </section>
  )
}