import { Sequelize } from "sequelize"

const db = new Sequelize({
  dialect: 'postgres',
  host: '170.1.70.67',
  port: '5432',
  username: 'tekinfo',
  password: 'apps2022!',
  database: 'tracking'
});
 
// const db = new Sequelize({
//     dialect: 'postgres',
//     host: '170.1.70.54',
//     port: '5432',
//     username: 'postgres',
//     password: 'nusindodev2021**',
//     database: 'tracking_dev'
// });

export default db;