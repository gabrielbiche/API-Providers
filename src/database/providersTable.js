import Sequelize from 'sequelize'

import instance from './index.js'

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('Portion', 'toys'),
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'providers',
  timesTamps: true
}

export default instance.define('providers', columns, options)
