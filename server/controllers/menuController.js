const { sql, poolPromise } = require('../config/db');

exports.getMenu = async (req, res) => {
  try {
    const pool   = await poolPromise;
    const result = await pool.request()
      .query('SELECT * FROM maison_menu_items WHERE is_available = 1 ORDER BY category');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMenuByCategory = async (req, res) => {
  try {
    const pool   = await poolPromise;
    const result = await pool.request()
      .input('category', sql.NVarChar, req.params.category)
      .query('SELECT * FROM maison_menu_items WHERE category = @category AND is_available = 1');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price, category, image_url } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('name',        sql.NVarChar, name)
      .input('description', sql.NVarChar, description)
      .input('price',       sql.Decimal,  price)
      .input('category',    sql.NVarChar, category)
      .input('image_url',   sql.NVarChar, image_url)
      .query(`INSERT INTO maison_menu_items 
              (name, description, price, category, image_url) 
              VALUES (@name, @description, @price, @category, @image_url)`);
    res.json({ message: '✅ Menu item added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  const { name, description, price, category, is_available } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id',           sql.Int,      req.params.id)
      .input('name',         sql.NVarChar, name)
      .input('description',  sql.NVarChar, description)
      .input('price',        sql.Decimal,  price)
      .input('category',     sql.NVarChar, category)
      .input('is_available', sql.Bit,      is_available)
      .query(`UPDATE maison_menu_items 
              SET name=@name, description=@description, price=@price,
                  category=@category, is_available=@is_available
              WHERE id=@id`);
    res.json({ message: '✅ Menu item updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, req.params.id)
      .query('DELETE FROM maison_menu_items WHERE id = @id');
    res.json({ message: '✅ Menu item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};