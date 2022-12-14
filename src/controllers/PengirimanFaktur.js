import pool from '../config/database.js'

class PengirimanFaktur{
    async getPengirimanFakturById(idPengiriman) {
        let results = await pool.query(`SELECT pf.no_faktur, start_faktur, finish_faktur, check_faktur, deskripsi, f_cust_id(pf.no_faktur) cust_id, 
        f_cust_name(cust_id) cust_name, f_cust_addr(cust_id) address
        FROM public.pengiriman_faktur as pf, public.trn_gudang as gd
        WHERE pf.no_faktur = gd.no_faktur AND id_ref_pengiriman=$1;`, [idPengiriman]).catch(console.log);
        return results.rows;
    }

    async getDetailFaktur(idLoper, idPengiriman, noFaktur) {
        let results = await pool.query(`SELECT 
            gd.sales_name,
            gd.invoice_date,
            check_faktur,
            deskripsi,
            f_cust_id(pf.no_faktur) cust_id,
            f_cust_name(cust_id) cust_name,
            f_cust_addr(cust_id) addr,
            f_loper_name($1) loper_name,
            pf.finish_faktur
        FROM public.pengiriman_faktur as pf, public.trn_gudang as gd
        WHERE pf.no_faktur = gd.no_faktur AND id_ref_pengiriman=$2 AND pf.no_faktur=$3;`, [idLoper, idPengiriman, noFaktur]).catch(console.log);
        return results.rows;
    }

    async rekapFaktur(idLoper, filtered) {
        let results = await pool.query(`
        SELECT COUNT(DISTINCT pf.id_ref_pengiriman) pengiriman, COUNT(DISTINCT pf.no_faktur) faktur
		FROM pengiriman_faktur pf, tracking_loper l
		WHERE pf.id_ref_pengiriman = l.id AND l.id_loper = $1 AND pf.start_faktur >= now() - $2::interval;`, [idLoper, filtered]).catch(console.log);
        return results.rows[0];
    }

    async updateFinishTime(idPengiriman, noFaktur, finishTime, deskripsi, check_faktur) {
        await pool.query(`
        UPDATE public.pengiriman_faktur
        SET finish_faktur = $3,  check_faktur = $5, deskripsi = $4
        WHERE id_ref_pengiriman = $1 AND no_faktur = $2`, [idPengiriman, noFaktur, finishTime, deskripsi, check_faktur]).catch(console.log);
        return
    }
}

export default PengirimanFaktur