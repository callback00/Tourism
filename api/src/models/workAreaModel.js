const sequelize = require('sequelize')
const moment = require('moment')
const DBconn = require('../common/DBconn')
const conn = DBconn.getConn()

moment.locale('zh-cn')

// 会员分组表
const WorkArea = conn.define('workarea', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },

    name: { type: sequelize.STRING, allowNull: false, comment: '区域名称' },
    parentid: { type: sequelize.INTEGER, allowNull: false, comment: '父节点id' },
    treeid: { type: sequelize.STRING, allowNull: false, comment: '上层节点id,以,隔开' },
    isLeaf: { type: sequelize.BOOLEAN, allowNull: false, comment: '是否叶节点' },
    sort: { type: sequelize.INTEGER, defaultValue: null, comment: '排序' },

    remark: { type: sequelize.STRING, defaultValue: null, comment: '备注' },
    createdAt: {
        type: sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
}, {
        paranoid: true
    })

module.exports = WorkArea
