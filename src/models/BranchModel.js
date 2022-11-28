import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Branch = db.define('mst_branch', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    },
    branch_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    branch_name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    flg_used: {
        type: DataTypes.STRING
    },
    initial: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Branch