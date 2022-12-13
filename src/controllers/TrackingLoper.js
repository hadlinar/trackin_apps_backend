import pool from '../config/database.js'

class TrackingLoper{
    async getLoperById(idPengiriman) {
        let results = await pool.query(`SELECT id, id_pengiriman, id_loper, branch_id, start_loper, finish_loper, tanggal
        FROM public.tracking_loper
        WHERE id_loper=$1;`, [idPengiriman]).catch(console.log);
        return results.rows;
    }
}

export default TrackingLoper