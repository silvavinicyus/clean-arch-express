import { Sequelize, Options } from 'sequelize'
import sequelizeConfig from '../../../sequelize.config.js'

const connectionOptions: Options = {
  ...sequelizeConfig,
  define: { underscored: true, omitNull: false, raw: true },
  pool: {
    max: 2,
    min: 0,
    idle: 0,
    acquire: 3000,
    evict: 15000,
  },
  dialectOptions: {
    connectTimeout: 15000,
  },
}

export const sequelize = new Sequelize(connectionOptions)
