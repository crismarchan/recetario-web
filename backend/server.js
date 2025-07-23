const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./src/config/db');

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Conexión exitosa: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la conexión con PostgreSQL');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
