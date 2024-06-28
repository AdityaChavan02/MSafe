const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

//Middleware to handle CORS policy requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection settings
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Alphacharlie2702',
  database: 'msafe'
});

// Checking Database Connection
db.connect((err) => {
  if (err) {
    console.error('Failed to connect to db:', err);
    return; // Return here to stop further execution in case of connection error
  }
  console.log('Connected to the database!');
});

// Handling Login request and validating email and passwords
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', req.body);

  // Checks if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const query = 'SELECT Email_Id, Password FROM User WHERE Email_Id = ?';
  console.log('Executing query:', query, 'with email:', email);

  db.query(query, [email], async (err, result) => {
    console.log('Query result:', result);
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send('Server error');
    }
    
    if (result.length > 0) {
      const user = result[0];
      console.log('User found:', user);
      if (password === user.Password) { // Ensure column name case matches
        res.json({ success: true, message: 'User Validated' }); // If credentials match
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' }); // If credentials do not match
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' }); // If no user found
    }
  });
});

//API Endpoint to access Safety Passport Data
app.get('/api/safety-passport', (req, res) => {
  const query = "SELECT * FROM safetypassport"; // Adjust table name as per your database
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data from safetypassport:', err);
          return res.status(500).json({ success: false, message: "Database query failed" });
      }
      res.json({ success: true, data: results });
  });
});

//API Endpoint to access Proactive Assist Data
app.get('/api/proactive-assist', (req, res) => {
  const query = "SELECT * FROM proactiveassist"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from proactive assist:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

//API Endpoint to access Safety Audit Data
app.get('/api/safety-audit-reporting', (req, res) => {
  const query = "SELECT * FROM safetyaudit"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from safety audit:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

//API Endpoint to access Safety Index Improvement Data
app.get('/api/safety-index-improvement', (req, res) => {
  const query = "SELECT * FROM safetyindeximprovement"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from safety audit:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

//API Endpoint to access Lessons Learnt Data
app.get('/api/lessons-learnt', (req, res) => {
  const query = "SELECT * FROM lessonslearnt"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from safety audit:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

//API Endpoint to access Notifications Data
app.get('/api/notifications', (req, res) => {
  const query = "SELECT * FROM notifications"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from safety audit:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

//API Endpoint to access Notifications Data
app.get('/api/User', (req, res) => {
  const query = "SELECT * FROM User"; // Adjust table name as per your database
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from safety audit:', err);
      return res.status(500).json({ success: false, message: "Database query failed" });
    }
    console.log('Fetched data:', results); // Log fetched data
    res.json({ success: true, data: results });
  });
});

// Middleware to Serve Static Files should be placed after API routes
app.use(express.static(path.join(__dirname, 'build')));

// Display Index Page - This catch-all route must be the last route defined
app.get('/', (req, res) => { //Changes made to root route
  res.sendFile(path.join(__dirname, '/build/index.html'),
    function(err){
      if(err){
        res.status(500).send(err);
      }
    }
);
});

// Checking Server Connection Settings
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
