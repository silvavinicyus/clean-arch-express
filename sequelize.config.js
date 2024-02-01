require('dotenv').config()

/** @type {import ('sequelize').ConnectionOptions} */
const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3306,
  username: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || '12345',
  database: process.env.DB || 'database',
  dialect: 'postgres',
}

module.exports = config
