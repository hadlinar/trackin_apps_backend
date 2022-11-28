import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const User = db.define('mst_user', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.TINYINT
    },
    branch_id: {
        type: DataTypes.TINYINT
    },
    is_active: {
        type: DataTypes.TINYINT
    },
    nama: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default User