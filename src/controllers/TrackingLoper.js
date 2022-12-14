const pool = require( '../config/database.js')

class TrackingLoper{
    async getLoperById(idPengiriman) {
        let results = await pool.query(`
        SELECT 
        l.id, l.id_pengiriman, l.id_loper, l.branch_id, l.start_loper, l.finish_loper, l.tanggal,
        (
            SELECT count(id_ref_pengiriman)
            FROM pengiriman_faktur pf
            WHERE pf.id_ref_pengiriman = l.id
            GROUP BY pf.id_ref_pengiriman
        ) jumlah
        FROM public.tracking_loper l
        WHERE l.id_loper=$1 AND cast(start_loper as Date) = cast(Date(Now()) as Date);`, [idPengiriman]).catch(console.log);
        return results.rows;
    }

    // async getLoperById(idPengiriman) {
    //     let results = await pool.query(`
    //     SELECT 
    //     l.id, l.id_pengiriman, l.id_loper, l.branch_id, l.start_loper, l.finish_loper, l.tanggal,
    //     (
    //         SELECT count(id_ref_pengiriman)
    //         FROM pengiriman_faktur pf
    //         WHERE pf.id_ref_pengiriman = l.id
    //         GROUP BY pf.id_ref_pengiriman
    //     ) jumlah
    //     FROM public.tracking_loper l
    //     WHERE l.id_loper=$1;`, [idPengiriman]).catch(console.log);
    //     return results.rows;
    // }

    async history(idPengiriman) {
        let results = await pool.query(`
            SELECT 
            l.id, l.id_pengiriman, l.id_loper, l.branch_id, l.start_loper, l.finish_loper, l.tanggal,
            (
                SELECT count(id_ref_pengiriman)
                FROM pengiriman_faktur pf
                WHERE pf.id_ref_pengiriman = l.id
                GROUP BY pf.id_ref_pengiriman
            ) jumlah
            FROM public.tracking_loper l
            WHERE l.id_loper=$1 AND l.finish_loper IS NOT NULL;
        `, [idPengiriman]).catch(console.log);
        return results.rows;
    }
}

module.exports = TrackingLoper;