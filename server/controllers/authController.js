const { sql, poolPromise } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const pool   = await poolPromise;
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM maison_admin_users WHERE username = @username');

    const admin = result.recordset[0];
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );
    res.json({ token, username: admin.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const pool   = await poolPromise;
    await pool.request()
      .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, hashed)
      .query('INSERT INTO maison_admin_users (username, password) VALUES (@username, @password)');
    res.json({ message: '✅ Admin created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};