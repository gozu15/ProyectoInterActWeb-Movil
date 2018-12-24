"use strict"
const Sequelize = require('sequelize')

const sequelize = new Sequelize('colegiodb', 'root', '', {
  host: 'localhost',
  dialect:'mysql',
  operatorsAliases: false
})
module.exports =sequelize;