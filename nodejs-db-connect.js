const express = require('express');
const mysql = require('mysql');
const app = express();

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

// Define API endpoint for getting data from MySQL database
app.get('/data', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as ID ${connection.threadId}`);

    const query = 'SELECT * FROM table_name';
    connection.query(query, (err, rows) => {
      connection.release(); // release connection back to pool

      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      }

      res.json(rows); // send data as JSON response
    });
  });
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
