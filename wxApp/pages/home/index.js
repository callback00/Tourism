//index.js
//获取应用实例
const app = getApp();
const tools = require('../../utils/tools')

Page({

    data: {

        index:"",
        loginBtnShow: true,

        imgUrls: [
            'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/yinshangongyuan.jpg',
            'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/yinshangongyuan.jpg',
        ],

        scenicData: [
            {
                img: 'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/shengtangshan.jpeg',
                name: '圣堂山景区',
                openTime: '8:30-18:00',
                price: 65,
                priceYh: 32.5,
                level:"AAAA景区",
                latitude:23.9728766122,
                longitude:110.1194483904,
            },
            {
                img: 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/首页/山水瑶城.jpg',
                name: '山水瑶城',
                openTime: '24小时免费开放',
                price: 0,
                priceYh: 0,
                level:"AAAA景区",
                latitude:24.1451908757,
                longitude:110.1765434097,
            },
            {
                img: 'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/lianhuashan.jpg',
                name: '莲花山景区',
                openTime: '8:30-18:00',
                price: 65,
                priceYh: 65,
                level:"AAAA景区",
                latitude:24.1519946909,
                longitude:110.1133595037,
            },
            {
                img: 'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/shengtanghu.jpg',
                name: '圣堂湖景区',
                openTime: '8:30-18:00',
                price: 108,
                priceYh: 80,
                level:"AAAA景区",
                latitude:24.0237343585,
                longitude:110.0609996239,
            },
            {
                img: 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/首页/青山瀑布.jpg',
                name: '青山瀑布',
                openTime: '8:30-18:00',
                price: 50,
                priceYh: 25,
                level:"AAA景区",
                latitude:24.0025397499,
                longitude:110.1295666760,
            },
            {
                img: 'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/yinshangongyuan.jpg',
                name: '银杉公园',
                openTime: '8:30-18:00',
                price: 50,
                priceYh: 25,
                level:"AAAA景区",
                latitude:24.1712311368,
                longitude:110.2493474435,
            },
            {

                img:"cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/首页/巴勒01.jpg",
                name: '古沙沟',
                openTime: '8:30-18:00',
                price: 50,
                priceYh: 25,
                level:"AAA景区",
                latitude:24.2020670575,
                longitude:110.3581984248,
            },



        ],
        swiperImg: [
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/大瑶山/大瑶山02.jpg',
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/文化/文化01.jpg',
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/大瑶山/大瑶山18.jpg',
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/文化/文化02.jpg',
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/大瑶山/大瑶山19.jpg',
            'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/照片/文化/文化03.jpg',
        ],
        indicatorDots: true, //	是否显示面板指示点
        autoPlay: true, //是否自动切换
        circular: true, //是否采用衔接滑动
        vertical: false, //滑动方向是否为纵向
        interval: 3000, //自动切换时间间隔
        duration: 1000, //滑动动画时长
        bg:'#C79C77',
        Height:""  ,   //这是swiper要动态设置的高度属性
    },
    imgHeight:function(e){
        var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
        var imgh=e.detail.height;//图片高度
        var imgw=e.detail.width;//图片宽度
        var swiperH=winWid*imgh/imgw + "rem"; //等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.setData({
            Height:swiperH//设置高度
        })
    },
    map:function(e){
        var idx=parseInt(e.currentTarget.dataset.index);
        wx.openLocation({
            latitude:this.data.scenicData[idx].latitude,
            longitude:this.data.scenicData[idx].longitude,
            scale:16,
            title:this.data.scenicData[idx].name,
            name:this.data.scenicData[idx].name,
            address:this.data.scenicData[idx].name,
            success:function () {
                console.log("调用地图成功")
            },
            fail:function () {
                console.log("调用地图失败")

            }
        })
    },
    toScenic:function (e) {
        var idx=parseInt(e.currentTarget.dataset.index);
        var imgSrc=this.data.scenicData[idx].img;

        console.log(this.data.scenicData[idx].name);
        // console.log(imgSrc);
        wx.navigateTo({
            url: '../scenicDetails/scenicDetails?idx='+idx+'&imgSrc='+imgSrc
        })
    },

    onShow: function (e) {
        const userInfoStr = wx.getStorageSync('userInfo');

        if (userInfoStr) {
            this.setData({
                loginBtnShow: false
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
    onShareAppMessage: function( res ){
        if(res.from==='botton'){
            // console.log(res.target)
        }
        return{
            title:'',
            imageUrl:'http://mxlot.oss-cn-hangzhou.aliyuncs.com/mmryjx-images/scenic/shengtangshan.jpeg',
            success:function () {
                wx.showShareMenu({
                    withShareTicket:ture
                });
            },
            fail:function () {

            },
            complete:function(){

            },
        }
    },

})
