const { sql, poolPromise } = require('../config/db');

exports.createReservation = async (req, res) => {
  const { customer_name, email, phone, reservation_date,
          reservation_time, guests, occasion, special_requests } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('customer_name',    sql.NVarChar, customer_name)
      .input('email',            sql.NVarChar, email)
      .input('phone',            sql.NVarChar, phone)
      .input('reservation_date', sql.NVarChar, reservation_date)
      .input('reservation_time', sql.NVarChar, reservation_time)
      .input('guests',           sql.Int,      parseInt(guests))
      .input('occasion',         sql.NVarChar, occasion || '')
      .input('special_requests', sql.NVarChar, special_requests || '')
      .query(`INSERT INTO maison_reservations 
        (customer_name, email, phone, reservation_date, reservation_time, 
         guests, occasion, special_requests)
        VALUES (@customer_name, @email, @phone, @reservation_date, 
                @reservation_time, @guests, @occasion, @special_requests)`);
    res.json({ message: '✅ Reservation confirmed!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const pool   = await poolPromise;
    const result = await pool.request()
      .query('SELECT * FROM maison_reservations ORDER BY reservation_date DESC');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id',     sql.Int,      req.params.id)
      .input('status', sql.NVarChar, req.body.status)
      .query('UPDATE maison_reservations SET status=@status WHERE id=@id');
    res.json({ message: '✅ Status updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};