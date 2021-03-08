const Pool = require('pg').Pool;
const config = require('./config');

const pg = require('pg'); 

pg.defaults.ssl = process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false;

const pool = new Pool({
  connectionString: config.DATABASE_URL,
}); 

module.exports = pool;