const pool = require( '../config/database.js')

class Loper{
    async getAllLoper() {
        let results = await pool.query(`SELECT nik, branch_id, nama_loper, status_kerja FROM public.loper`).catch(console.log);
        return results.rows;
    }

    async getLoperById(nik) {
        let results = await pool.query(`SELECT id, nik, f_branch_name(branch_id) branch, nama_loper, status_kerja
            FROM public.loper
            WHERE nik=$1;`, [nik]).catch(console.log);
            return results.rows[0];
    }
}

module.exports = Loper;