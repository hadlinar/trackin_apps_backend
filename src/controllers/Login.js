const db = require( '../config/database.js')

class Login {
    async login(username) {
        let result = await db.query(`SELECT u.id, u.username, u.role_id, u.branch_id, u.password, u.nama
        FROM public.mst_user as u, public.loper as l
        WHERE u.username = l.nik AND u.username=$1;`, [username])

        return result;
    }

    async createUser([id, username, password, role_id, branch_id, is_active, nama]){
        let results = await db.query(`INSERT INTO public.mst_user(
            id, username, password, role_id, branch_id, is_active, nama)
            VALUES ('$1', '$2', '$3', '$4', '$5', '$6', '$7');`, [
                id, username, password, role_id, branch_id, is_active, nama
            ]).catch(console.log);
        return;
    };
}

module.exports = Login;