import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

const db = mysql.createPool({
    host: '.',
    user: 'back',
    password: '.',
    database: 'app_db',
    port: '3306'
})

export default db
