const mysql = require('mysql2/promise')

const db = mysql.createPool({
    host: "localhost",
    port: '3380',
    user: "root",
    database: "kuningan_tour",
    password: "root",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})


module.exports = db