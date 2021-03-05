const Pool = require('pg').Pool;
const config = require('./config');

const pool = new Pool({
  // user: 'postgres',
  // password: 'mypostgres',
  // host: 'localhost',
  // port: 5432,
  // database: 'goatsapp'
  connectionString: config.DATABASE_URL,
}); 

module.exports = pool;