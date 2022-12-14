import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: 'tekinfo',
  host: '170.1.70.67',
  database: 'tracking',
  password: 'apps2022!',
  port: 5432,
})

export default pool;