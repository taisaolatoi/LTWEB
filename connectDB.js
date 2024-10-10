import mysql2 from 'mysql2'; // Sử dụng mysql2

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  database: 'btweb',
  password: '',
});

const connection = pool.promise(); // Sử dụng pool.promise()

export default connection;