import { Sequelize } from "sequelize"
import db from "../config/database.js"

const { DataTypes } = Sequelize

const TrackingLoper = db.define('tracking_loper', {
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true
    },
    id_pengiriman: {
        type: DataTypes.STRING
    },
    id_loper: {
        type: DataTypes.TINYINT
    },
    branch_id: {
        type: DataTypes.STRING
    },
    start_loper: {
        type: DataTypes.DATE
    },
    finish_loper: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default TrackingLoper