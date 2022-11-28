import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Loper = db.define('loper', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    },
    nik: {
        type: DataTypes.TINYINT
    },
    branch_id: {
        type: DataTypes.STRING
    },
    nama_loper: {
        type: DataTypes.STRING
    },
    status_kerja: {
        type: DataTypes.TINYINT
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Loper