const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'mypostgres',
  host: 'localhost',
  port: 5432,
  database: 'goatsapp'
}); 

module.exports = pool;