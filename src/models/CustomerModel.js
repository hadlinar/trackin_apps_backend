import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Customer = db.define('mst_customer', {
    cust_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    cust_name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    branch_id: {
        type: DataTypes.STRING,
        primaryKey: true
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Customer