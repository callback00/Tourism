//index.js
//获取应用实例
const app = getApp()
import QRCode from '../../utils/qrCode' // 这个可以生成非小程序本身的二维码
const tools = require('../../utils/tools')

Page({
    data: {
        mobile: '',
        province: '',
        city: '',
        imageUrl: '',
        haveLogined: true
    },

    // 小程序的tabar切换页面时不会再次出发onLoad,所以只能用onShow
    onShow: function (options) {
        const userInfoStr = wx.getStorageSync('userInfo')

        if (userInfoStr) {
            const userInfo = JSON.parse(userInfoStr)

            this.setData({
                mobile: userInfo.mobile,
                province: userInfo.province,
                city: userInfo.city
            })

            tools.post('/wxapp/member/QRInfo', (error, success) => {

                if (error) {
                    if (error === 'loginTimeOut') {
                        this.setData({
                            haveLogined: false
                        })
                    } else {
                        wx.showModal({
                            title: '错误提示',
                            content: error,
                            showCancel: false
                        })

                        wx.clearStorage()
                    }
                } else {
                    const imageUrl = success.imageUrl
                    this.setData({
                        imageUrl,
                        haveLogined: true
                    })
                }
            }, {}, false)

            // 生成非小程序本身的二维码，建议保留该部分代码，以后可能用到
            // const qrcode = new QRCode('canvas', {
            //     text: 'http://www.w3cschool.cc/',
            //     width: 150,
            //     height: 150,
            //     colorDark: '#000000',
            //     colorLight: '#ffffff',
            //     correctLevel: QRCode.correctLevel.H
            // });
        } else {
            // wx.navigateTo({
            //     url: '../login/index'
            // })
            this.setData({
                haveLogined: false
            })
        }
    },

    loginHandle: function (e) {
        wx.navigateTo({
            url: '../login/index'
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (res) {
        if (res.from === 'botton') {
            console.log(res.target)
        }
        return {
            title: '',
            imageUrl: 'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/shengtangshan.jpeg',
            success: function () {
                wx.showShareMenu({
                    withShareTicket: ture
                });
            },
            fail: function () {

            },
            complete: function () {

            },
        }
    },

})
