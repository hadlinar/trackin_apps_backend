const pool = require( '../config/database.js')

class Gudang{
    async getGudangById(branchId) {
        let results = await pool.query(`SELECT no_faktur, branch_id, status_proses, sales_id, invoice_date, so_no, so_date, sales_name
        FROM public.trn_gudang
        WHERE branch_id=$1;`, [branchId]).catch(console.log);
        return results.rows;
    }
}

module.exports = Gudang;