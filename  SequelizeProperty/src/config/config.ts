// {
//   "development": {
//     "username": "postgres",
//     "password": "postgres",
//     "database": "mungo_park",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "postgres",
//     "password": "postgres",
//     "database": "mungo_park",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "postgres",
//     "password": "postgres",
//     "database": "mungo_park",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
const { Sequelize } = require("sequelize")

const db = new Sequelize('mungo_park', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: "postgres",
});

export default db;