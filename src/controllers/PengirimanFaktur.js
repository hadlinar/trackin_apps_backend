import pool from '../config/database.js'

class PengirimanFaktur{
    async getPengirimanFakturById(idPengiriman) {
        let results = await pool.query(`SELECT no_faktur, start_faktur, finish_faktur, check_faktur
        FROM public.pengiriman_faktur
        WHERE id_ref_pengiriman=$1;`, [idPengiriman]).catch(console.log);
        return results.rows;
    }
}

export default PengirimanFaktur