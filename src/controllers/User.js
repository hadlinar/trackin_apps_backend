import pool from '../config/database.js'

class User{
  async getAllUser() {
    let results = await pool.query(`SELECT * FROM public.mst_user`).catch(console.log);
    return results.rows;
  }

  async getUserById(username) {
    let results = await pool.query(`SELECT u.id, u.username, u.role_id, u.branch_id, f_branch_name(u.branch_id) branch, u.is_active, u.nama
        FROM public.mst_user as u, public.loper as l
        WHERE u.username = l.nik AND u.username=$1;`, [username]).catch(console.log);
        return results.rows[0];
  }
}

export default User