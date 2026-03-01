const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const menuRoutes        = require('./routes/menu');
const reservationRoutes = require('./routes/reservations');
const authRoutes        = require('./routes/auth');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/menu',         menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/auth',         authRoutes);

app.get('/', (req, res) => {
  res.json({ message: '🍽️ Maison Dorée API Running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});