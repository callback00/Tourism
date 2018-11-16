// pages/preferential/preferential.js
Page({

  /**
   * 页面的初始数据
   */


  data: {

      area:[
          {

              areaID:"ycjd",
              Name:"怡程酒店",
              ImgSrc:"http://p0.meituan.net/tdchotel/1bc2d66d881096d207d2215b4bf24359388670.png",
              NameType:"高档型 2017年开业",
              Add:"金秀镇瓦厂小区（近幼儿园）",
              Phone:"0772-6210888",
              Price:"￥238",
              priceType:"起",

          },

          {

              areaID:"yddjd",
              Name:"瑶都大酒店",
              ImgSrc:"http://dimg13.c-ctrip.com/images/2008070000002rdmcA977_R_550_412.jpg",
              NameType:"舒适型 2011年开业",
              Add:"瑶都广场旁（近功德路）",
              Phone:"0772-5321888",
              Price:"￥158",
              priceType:"起",

          },
          {

              areaID:"tmkz",
              Name:"田米客栈",
              ImgSrc:"http://p1.meituan.net/tdchotel/751c76acd7978a77215a95d53fa151e185688.jpg",
              NameType:"经济型 2016年开业",
              Add:"秀园小区645县道旁（县检察院对面）",
              Phone:"0772-6217868 、185-7990-9868",
              Price:"￥96",
              priceType:"起",

          },
          {

              areaID:"hyhkkz",
              Name:"花语花开客栈",
              ImgSrc:"http://p0.meituan.net/tdchotel/75c747c94030e95fff14e4aa5cd92d52235001.jpg",
              NameType:"2017年开业",
              Add:"金秀镇解放路226号",
              Phone:"185-7990-9868",
              Price:"￥80",
              priceType:"起",

          },
          {

              areaID:"dmyckz",
              Name:"缔梦云裳居客栈",
              ImgSrc:"http://dimg11.c-ctrip.com/images/200i0k000000b6sp4E5DF_R_550_412.jpg",
              NameType:"经济型",
              Add:"金秀镇解放路254号",
              Phone:"0772-6161188",
              Price:"￥96",
              priceType:"起",

          },
          {

              areaID:"cxnz",
              Name:"茶香农庄 ",
              ImgSrc:"http://store.is.autonavi.com/showpic/2be8afc338618ed74e6f7d0a9b127d17",
              NameType:"10:30开始营业",
              Add:"金秀镇金田村委",
              Phone:"",
              Price:"9.5",
              priceType:"折",
          },
          {

              areaID:"xchnz",
              Name:"香草湖农庄",
              ImgSrc:"http://qcloud.dpfile.com/pc/iBkYKYDvn6LCCpfTxmXh5XIAaVxvuYj0zbdK-DNICErLDxm5NcAF2Zu8MKIp_K8hHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg",
              NameType:"10:30开始营业",
              Add:"645县道南50米",
              Phone:"180-7727-2233",
              Price:"9.5",
              priceType:"折",
          },
      ]
  },

  gotableinfo: function(e){
    //
    var index=parseInt(e.currentTarget.dataset.index);

    wx.navigateTo({
        url:'/pages/details/details?up_index='+index
    });

      },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function( res ){
      if(res.from==='botton'){
          console.log(res.target)
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