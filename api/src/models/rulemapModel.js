const sequelize = require('sequelize')
const DBconn = require('../common/DBconn')
const conn = DBconn.getConn()

const Rulemap = conn.define('sys_rulemap', {
  rmid: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },

  userid: { type: sequelize.INTEGER, allowNull: false, comment: '用户id' },
  ruleid: { type: sequelize.INTEGER, allowNull: false, comment: '权限id' },
}, {
  paranoid: true
})

module.exports = Rulemap
