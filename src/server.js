// server.js
const express = require('express');
const mysql = require('mysql2/promise'); // Use the 'mysql2/promise' library for asynchronous operations
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Create a MySQL database connection (adjust the connection parameters)
const db = mysql.createPool({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(bodyParser.json());

// Authentication endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database to find a user with the provided username
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];

    // Compare the provided password with the stored password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Successful authentication
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
