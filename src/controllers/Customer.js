const pool = require( '../config/database.js')

class Customer{
    async getCustomer(branchId){
        let results = await pool.query(`SELECT cust_id, cust_name, address, branch_id
        FROM public.mst_customer
        WHERE branch_id=$1;`, [branchId]).catch(console.log);
        return results.rows;
    };
}

module.exports = Customer;