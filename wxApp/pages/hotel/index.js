//index.js
//获取应用实例
const app = getApp();
const tools = require('../../utils/tools')

Page({

    data: {
        hotelData: [
            {
                id:1,
                img: '../../images/scenic/1.jpg',
                name: '怡程大酒店',
                openTime: '8:30-16:00',
                price: 198
            },
            {
                id:2,
                img: '../../images/scenic/4.jpg',
                name: '瑶都大酒店',
                openTime: '8:30-16:00',
                price: 138
            },
            {
                id:3,
                img: '../../images/scenic/2.jpg',
                name: '田米客栈',
                openTime: '8:30-16:00',
                price: 96
            },
            {
                id:4,
                img: '../../images/scenic/3.jpeg',
                name: '花语花开客栈',
                openTime: '8:30-16:00',
                price: 80
            },
            {
                id:5,
                img: '../../images/scenic/3.jpeg',
                name: '缔梦云裳居客栈',
                openTime: '8:30-16:00',
                price: 96
            },
            {
                id:6,
                img: '../../images/scenic/3.jpeg',
                name: '茶香农庄',
                openTime: '8:30-16:00',
                price: 65
            },
            {
                id:7,
                img: '../../images/scenic/3.jpeg',
                name: '香草湖农庄',
                openTime: '8:30-16:00',
                price: '9折优惠'
            }
        ],
    },

    detailHandle: function (e) {
        // console.log(e)

        const dataset = e.currentTarget.dataset;
        const id = dataset.id
        wx.navigateTo({
            url: `../hotel/detail?id=${id}`
        })
    },
})
