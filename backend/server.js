const mariadb = require('mariadb');
const express = require('express');

const app = express();
const port = 3000; // El puerto en el que se ejecutará tu servidor Express.

// Crear un pool de conexiones para manejar múltiples conexiones de manera eficiente.
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'jesus',
  password: 'imperator2971',
  database: 'dialca',
  port: 3310,
  connectionLimit: 5 // Limita el número de conexiones a crear.
});

// Middleware para parsear el cuerpo de las solicitudes en JSON
app.use(express.json());

// Endpoint de ejemplo para probar la conexión a la base de datos.
app.get('/test-db', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT 1 as val');
    res.json(rows); // Envía la respuesta de la consulta como JSON.
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al conectar a la base de datos');
  } finally {
    if (conn) conn.end(); // Siempre cierra la conexión cuando termines.
  }
});

// Iniciar el servidor para escuchar por peticiones.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
