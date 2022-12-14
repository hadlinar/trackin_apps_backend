const Pool = require('pg').Pool

const pool = new Pool({
  user: 'tekinfo',
  host: '170.1.70.67',
  database: 'tracking',
  password: 'apps2022!',
  port: 5432,
})

module.exports = pool;