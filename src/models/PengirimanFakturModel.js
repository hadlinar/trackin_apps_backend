import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const PengirimanFaktur = db.define('pengiriman_faktur', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    },
    no_faktur: {
        type: DataTypes.STRING
    },
    id_ref_pengiriman: {
        type: DataTypes.TINYINT
    },
    start_faktur: {
        type: DataTypes.DATE
    },
    finish_faktur: {
        type: DataTypes.DATE
    },
    check_faktur: {
        type: DataTypes.STRING
    },
    deskripsi: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default PengirimanFaktur