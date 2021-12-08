import Sequelize from 'sequelize'

import { database } from '../configuration'

const instance = new Sequelize(
  database.databaseName,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: 'mysql'
  }
)

export default instance
