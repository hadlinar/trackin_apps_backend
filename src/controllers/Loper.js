import pool from '../config/database.js'

class Loper{
    async getAllLoper() {
        let results = await pool.query(`SELECT nik, branch_id, nama_loper, status_kerja FROM public.loper`).catch(console.log);
        return results.rows;
    }
}

export default Loper