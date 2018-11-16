// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    ellipsis: true, // 文字是否收起，默认收起
    display:"flex",
    marginBottom:0,
    // height:0,
    areaData:[

    ],

    area:[
        {
            // num:[{
                areaID:"ycjd",
                Name:"怡程酒店",
                ImgSrc:"http://p0.meituan.net/tdchotel/1bc2d66d881096d207d2215b4bf24359388670.png",
                NameType:"高档型 2017年开业",
                Add:"金秀镇瓦厂小区（近幼儿园）",
                Phone:"0772-6210888",
                latitude:24.1419011577,
                longitude:110.1857332721,
                product:[
                    {
                      ProductName:"怡悦双床房",
                      ImgSrc:"https://p0.meituan.net/dnaimgdark/3a2cdf0e2b117f04ad46538ee57786a83118200.jpg",
                      ProductType:"51㎡ 双床 含早",
                      ProductPrice:"￥238",
                      MProductPrice:343,
                    },
                    {
                        ProductName:"怡悦大床房",
                        ImgSrc:"https://p0.meituan.net/dnaimgdark/a6b58a377080b2f4d72772b11a40b8e12961287.jpg",
                        ProductType:"40㎡ 大床 含早",
                        ProductPrice:"￥238",
                        MProductPrice:343,
                    },
                    {
                        ProductName:"怡馨大床房",
                        ImgSrc:"http://p1.meituan.net/dnaimgdark/fcce1d9d09748c37fe0638c058d495832965113.jpg",
                        ProductType:"27㎡ 大床 含早",
                        ProductPrice:"￥238",
                        MProductPrice:321,
                    },
                    {
                        ProductName:"怡然大床房",
                        ImgSrc:"https://p1.meituan.net/dnaimgdark/c4d58702e982dc079ed253ebbee9ddd62955086.jpg",
                        ProductType:"50㎡ 大床 含早",
                        ProductPrice:"￥328",
                        MProductPrice:421,
                    },

                ],
                policy:[
                    {
                    BodyHead:"入住时间",
                    BodyContent:"入住时间：12:00以后  离店时间：12:00以前",
                },{
                    BodyHead:"膳食安排",
                    BodyContent:"自助早餐 RMB 38",
                },{
                    BodyHead:"宠物",
                    BodyContent:"不可携带宠物",
                },{
                    BodyHead:"酒店接受的银行卡",
                    BodyContent:"国内发行的银联卡",
                },{
                    BodyHead:"儿童及加床",
                    BodyContent:"不接受16岁以下客人单独入住。不接受16岁以下客人无监护人陪同的情况下入住",
                }
                ]
            // }]
},
        {

                areaID:"yddjd",
                Name:"瑶都大酒店",
                ImgSrc:"http://dimg13.c-ctrip.com/images/2008070000002rdmcA977_R_550_412.jpg",
                NameType:"舒适型 2011年开业",
                Add:"瑶都广场旁（近功德路）",
                Phone:"0772-5321888",
                latitude:24.1375011577,
                longitude:110.1890832721,
                product:[
                    {
                        ProductName:"标准双人间",
                        ImgSrc:"http://dimg12.c-ctrip.com/images/200o0k000000b4av87E5B_R_300_225.jpg",
                        ProductType:"20-30㎡ 双床",
                        ProductPrice:"￥158",
                        MProductPrice:178,
                    },
                    {
                        ProductName:"豪华双人间",
                        ImgSrc:"http://dimg11.c-ctrip.com/images/20080k000000bvnda82BC_R_300_225.jpg",
                        ProductType:"20-30㎡ 双床",
                        ProductPrice:"￥168",
                        MProductPrice:188,
                    },
                    {
                        ProductName:"豪华单间",
                        ImgSrc:"http://dimg12.c-ctrip.com/images/hotel/135000/134527/3A44AF5909124BF1AD27DBBD17071D6B_R_300_225.Jpg",
                        ProductType:"25-35㎡ 大床",
                        ProductPrice:"￥168",
                        MProductPrice:188,
                    },
                    {
                        ProductName:"商务套房",
                        ImgSrc:"http://dimg11.c-ctrip.com/images/hotel/135000/134527/303b4aac1a60459a91a178b3ec4912f7_R_300_225.jpg",
                        ProductType:"35-55㎡ 大床",
                        ProductPrice:"￥278",
                        MProductPrice:278,
                    },

                ],
                policy:[
                    {
                        BodyHead:"入住时间",
                        BodyContent:"入住时间：14:00以后  离店时间：12:00以前",
                    },{
                        BodyHead:"膳食安排",
                        BodyContent:"自助早餐 RMB 28",
                    },{
                        BodyHead:"宠物",
                        BodyContent:"不可携带宠物",
                    },{
                        BodyHead:"酒店接受的银行卡",
                        BodyContent:"国内发行的银联卡",
                    },{
                        BodyHead:"儿童及加床",
                        BodyContent:"不接受16岁以下客人单独入住。不接受16岁以下客人无监护人陪同的情况下入住",
                    }
                ]
            // }]
        },
        {

                areaID:"tmkz",
                Name:"田米客栈",
                ImgSrc:"http://p0.meituan.net/tdchotel/fe0b55bf800bd9c30a6eaa9815248ab1118166.jpg",
                NameType:"经济型 2016年开业",
                Add:"秀园小区645县道旁（县检察院对面）",
                Phone:"0772-6217868",
                latitude:24.1432425693,
                longitude:110.1819254597,
                product:[
                    {
                        ProductName:"标准双人间",
                        ImgSrc:"https://p0.meituan.net/tdchotel/2f11879381b4266f412f9af3d5b1ed8284636.jpg",
                        ProductType:"15-20㎡ 双床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"单人间",
                        ImgSrc:"http://p1.meituan.net/tdchotel/a05e1aa950cf9f3cb56811a9feecf90e68674.jpg",
                        ProductType:"18㎡",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"亲子房",
                        ImgSrc:"https://p0.meituan.net/tdchotel/754558ddfc21ca40ddb407bc2c1db01673824.jpg",
                        ProductType:"20㎡ 双床",
                        ProductPrice:"￥126",
                        MProductPrice:128,
                    },
                    {
                        ProductName:"三人间",
                        ImgSrc:"http://p1.meituan.net/tdchotel/e07c30bd7dc2ef35ed448277a23c932175114.jpg",
                        ProductType:"15-20㎡ 多张床",
                        ProductPrice:"￥126",
                        MProductPrice:128,
                    },


                ],
                policy:[
                    {
                        BodyHead:"入住时间",
                        BodyContent:"入住时间：14:00以后  离店时间：15:00以前",
                    },{
                        BodyHead:"宠物",
                        BodyContent:"允许携带宠物，不收取额外费用",
                    },{
                        BodyHead:"酒店接受的银行卡",
                        BodyContent:"国内发行的银联卡",
                    },{
                        BodyHead:"儿童及加床",
                        BodyContent:"不接受16岁以下客人单独入住。不接受16岁以下客人无监护人陪同的情况下入住",
                    }
                ]
            // }]
        },
        {
            // num:[{
                areaID:"hyhkkz",
                Name:"花语花开客栈",
                ImgSrc:"http://p0.meituan.net/tdchotel/75c747c94030e95fff14e4aa5cd92d52235001.jpg",
                NameType:"2017年开业",
                Add:"金秀镇解放路226号",
                Phone:"185-7990-9868",
                latitude:24.1433925693,
                longitude:110.1815354597,
                product:[
                    {
                        ProductName:"标准双人间",
                        ImgSrc:"http://p1.meituan.net/tdchotel/d93c45d810a927687e928d33848c1eac92105.jpg",
                        ProductType:"20㎡ 双床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"豪华大床房",
                        ImgSrc:"https://p0.meituan.net/tdchotel/5ce464ef610815a6833eefc5cced7414103125.jpg",
                        ProductType:"20㎡ 大床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"普通大床房",
                        ImgSrc:"http://p0.meituan.net/tdchotel/470cdba9342771c26215c4ab6e8af3de94742.jpg",
                        ProductType:"15㎡ 大床",
                        ProductPrice:"￥80",
                        MProductPrice:88,
                    },

                ],
                policy:[
                    {
                        BodyHead:"入住时间",
                        BodyContent:"入住时间：14:00以后  离店时间：12:00以前",
                    }
                ]
            // }]
        },
        {
            // num:[{
                areaID:"dmyckz",
                Name:"缔梦云裳居客栈",
                ImgSrc:"http://dimg11.c-ctrip.com/images/200i0k000000b6sp4E5DF_R_550_412.jpg",
                NameType:"经济型",
                Add:"金秀镇解放路254号",
                Phone:"0772-6161188",
                latitude:24.1437625693,
                longitude:110.1807354597,
                product:[
                    {
                        ProductName:"标准双人间",
                        ImgSrc:"",
                        ProductType:"20㎡ 双床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"亲子房",
                        ImgSrc:"",
                        ProductType:"20㎡ 多张床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },
                    {
                        ProductName:"单人间",
                        ImgSrc:"",
                        ProductType:"20㎡ 大床",
                        ProductPrice:"￥96",
                        MProductPrice:98,
                    },

                ],
                policy:[
                    {
                        BodyHead:"入住时间",
                        BodyContent:"入住时间：14:00以后  离店时间：12:00以前",
                    },
                ]
            // }]
        },
        {
            // num:[{
                areaID:"cxnz",
                Name:"茶香农庄 ",
                ImgSrc:"http://store.is.autonavi.com/showpic/2be8afc338618ed74e6f7d0a9b127d17",
                NameType:"10:30开始营业",
                Add:"金秀镇金田村委",
                Phone:"",
                latitude:24.1349324447,
                longitude:110.1423171616,
                product:[
                    {
                        ProductName:"用餐",
                        ImgSrc:"http://store.is.autonavi.com/showpic/9dd395b043708f4c0a32aa0f0922e67f",
                        ProductType:"",
                        ProductPrice:"九点五折"
                    },

                ]
            // }]
        },
        {
            // num:[{
                areaID:"xchnz",
                Name:"香草湖农庄",
                ImgSrc:"http://qcloud.dpfile.com/pc/iBkYKYDvn6LCCpfTxmXh5XIAaVxvuYj0zbdK-DNICErLDxm5NcAF2Zu8MKIp_K8hHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg",
                NameType:"10:30开始营业",
                Add:"645县道南50米",
                Phone:"180-7727-2233",
                latitude:24.1397802771,
                longitude:110.1592195451,
                product:[
                    {
                        ProductName:"用餐",
                        ImgSrc:"http://qcloud.dpfile.com/pc/vwMAZ2R8-A1SSpBNjRcCTafeRo4KnP48a8x6khfnJ07_wlipspd6i4abcgepNMvBHB1FIzxqqv4y1DPjvSHfJsPMUtGpjXdtO1pf5OouG4AnY08TQIxe-DkxF3-YDtNHvJLBPMnbGaim65JmQfWVIQ.jpg",
                        ProductType:"",
                        ProductPrice:"九点五折"
                    },

                ]
            // }]
        },
    ]

  },

    /**
     * 收起/展开按钮点击事件
     */
    ellipsis: function () {
        var value = !this.data.ellipsis;
        this.setData({
            ellipsis: value
        });

    },
    tel:function(){
        wx.makePhoneCall({
            phoneNumber:this.data.areaData[0].Phone+"",
            success:function () {
                console.log("拨打电话成功")
            },
            fail:function () {
                console.log("拨打电话失败")

            }
        })
    },
    map:function(e){
        wx.openLocation({
            latitude:this.data.areaData[0].latitude,
            longitude:this.data.areaData[0].longitude,
            scale:16,
            title:this.data.areaData[0].Name,
            name:this.data.areaData[0].Name,
            address:this.data.areaData[0].Add,
            success:function () {
                console.log("调用地图成功")
            },
            fail:function () {
                console.log("调用地图失败")

            }
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
      var that=this;
      var idx=options.up_index;
      var areaData=that.data.area[idx];
      that.setData({
          "areaData[0]":areaData, // 数组赋值格式要一致，否则无法渲染，列如使用areaData:areaData无法赋值

      });
      wx.setNavigationBarTitle({
          title:that.data.area[idx].Name
      });
      // console.log(that.data.areaData);
      // console.log(that.data.area[idx]);
      wx.createSelectorQuery().select('.policy_body').boundingClientRect(function(rect){
          // console.log(rect.id);      // 节点的ID
          // console.log(rect.height);  // 节点的高度
          if(rect.height<222){
             that.setData({
                 display:"none",
                 "marginBottom":30,
             });
              // console.log(that.data.marginBottom);
          }else {

              that.setData({
                  // "height":445
              });
              // console.log(that.data.height);
          }
      }).exec();



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