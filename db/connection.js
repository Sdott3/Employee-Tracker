const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: '',
  // Your MySQL password
  password: '',
  database: 'employee_db'
});

module.exports = db;
