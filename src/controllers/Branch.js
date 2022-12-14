const pool = require( '../config/database.js')

class Branch {
    async getBranch(){
        let results = await pool.query(`SELECT * FROM public.mst_branch ORDER BY branch_id ASC`).catch(console.log);
        return results.rows;
    }

    async getBranchById(id) {
        let results = await pool.query(`SELECT branch_id, branch_name, address, initial 
        FROM public.mst_branch
        WHERE branch_id=$1`, [id]).catch(console.log);
        return results.rows
    }
}

module.exports = Branch;