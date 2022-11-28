import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Gudang = db.define('trn_gudang', {
    no_faktur: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    branch_id: {
        type: DataTypes.STRING
    },
    cust_id: {
        type: DataTypes.STRING
    },
    status_proses: {
        type: DataTypes.TINYINT
    },
    sales_id: {
        type: DataTypes.STRING
    },
    invoice_date: {
        type: DataTypes.DATE
    },
    so_no: {
        type: DataTypes.STRING
    },
    so_date: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Gudang