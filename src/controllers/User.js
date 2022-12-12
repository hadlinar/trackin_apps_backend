import pool from '../config/database.js'

class User{
  async getAllUser() {
    let results = await pool.query(`SELECT * FROM public.mst_user`).catch(console.log);
    return results.rows;
  }

  async getUserById(username) {
    let results = await db.query(`SELECT u.id, u.username, u.role_id, u.branch_id, u.password, u.is_active, u.nama
        FROM public.mst_user as u, public.loper as l
        WHERE u.username = l.nik AND u.username=$1;`, [username]).catch(console.log);
        return results;
  }
}

export default User