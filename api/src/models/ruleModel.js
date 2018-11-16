const sequelize = require('sequelize')
const DBconn = require('../common/DBconn')
const conn = DBconn.getConn()

const Rule = conn.define('sys_rule', {
  ruleid: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },

  rulename: { type: sequelize.STRING, defaultValue: '', comment: '权限名称' },
  reveal: { type: sequelize.STRING, defaultValue: '', comment: '用户页面访问权限' },
  permission: { type: sequelize.STRING, defaultValue: '', comment: '用户api访问权限，用,分割' },
}, {
  paranoid: true
})

module.exports = Rule
