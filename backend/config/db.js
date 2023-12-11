const mysql = require('mysql2/promise')
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.DB_HOST ?? "localhost",
    port: process.env.DB_PORT ?? '3380',
    user: process.env.DB_USER ?? "root",
    database: process.env.DB_NAME ?? "kuningan_tour",
    password: process.env.DB_PASSWORD ?? "root",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

async function dbExecute(query, value) {
    try {
      const [results] = await db.query(query, value ?? []);
      return results;
    } catch (error) {
      console.log(error);
    }
}
module.exports = dbExecute