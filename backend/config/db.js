const { createPool } = require('mysql');

const pool = createPool({
	host: process.env.HOST,
	port: process.env.DB_PORT,
	password: process.env.DB_PWD,
	user: process.env.USER,
	database: process.env.DB_NAME,
	connectionLimit: 10
});

module.exports = pool;
