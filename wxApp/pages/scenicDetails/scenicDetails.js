
const innerAudioContext = wx.createInnerAudioContext();
const backAudioManager = wx.getBackgroundAudioManager();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlay: true,//是否播放
        imgSrc: '',
        actionArr:[],
        title: '',
        duration:"",
        active:"",
        currentTime:'',
        durationTime:'',
        listArr: [
            {
                name: "圣堂山",
                content: "圣堂山景区位于金秀瑶族自治县西南部，离县城45公里，山峰巍峨林立，海拔均在1600米以上，主峰海拔1979米，山高险峻，是桂中第二峰。主要观赏点有：雾锁重山、双龙吐玉、石河奇观、神秘石墙等。圣堂山素有“人间仙境”之美誉，是大瑶山的主峰。万亩特有的千年高山变色杜鹃五月齐放，世界罕见，蔚为壮观。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/圣堂山景区.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山03.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山04.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山05.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山0601.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂山/圣堂山0701.jpg',
                ],
            },
            {
                name: "山水瑶城",
                content: "山水瑶城景区是国内首创将县城与瑶族文化相结合打造的首个4A级景区。山水瑶城坐落在大瑶山腹地的金秀河谷中，是一个神秘而又令人向往的世界瑶都，是弘扬世界瑶族文化的窗口，是展示瑶族文化艺术的中心。夏无酷暑、冬无严寒，是中国南方避暑胜地，瑶族文化研究中心，休闲健康养生之城，城即是景，景筑成城。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/山水瑶城景区.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/山水瑶城/山水瑶城01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/山水瑶城/山水瑶城02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/山水瑶城/山水瑶城03.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/山水瑶城/山水瑶城04.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/山水瑶城/山水瑶城05.jpg',
                ],
            },
            {
                name: "莲花山",
                content: "莲花山景区是国家级自然保护区，位于广西来宾市金秀瑶族自治县西北部16公里处，面积约23平方公里。主峰能多峰海拔1350米，因群峰耸立，远远望去，整座山体酷似一朵含苞欲放的莲花，因此而得名。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/莲花山景区.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/莲花山/莲花山01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/莲花山/莲花山02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/莲花山/莲花山03.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/莲花山/莲花山04.jpg',

                ],
            },
            {
                name: "圣堂湖",
                content: "圣堂湖位于圣堂山风景名胜区西北面，距县城金秀镇38公里。是以老虎潭峡谷为依托打造起来的生态旅游区。旅游区以老虎潭峡谷为主轴、以平娇为中心，全长约16公里。融赏山乐水、养生度假于一身，是个使人激情与柔情共生的浪漫处所。圣堂山脚下的圣堂湖恍若无暇碧玉镶嵌在群山之间，湖光山色相映成趣，可游湖漂流，可药浴养生，乐趣无穷。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/圣堂湖景区.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂湖/圣堂湖01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂湖/圣堂湖02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂湖/圣堂湖0301.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂湖/圣堂湖0401.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/圣堂湖/圣堂湖0501.jpg',

                ],
            },
            {
                name: "青山瀑布",
                content: "青山瀑布景区位于圣堂山脚下，距县城36公里。处于圣堂山景区与圣堂湖景区之间，金平二级公路、滴水河绕村而过，交通十分便利。青山瀑布群由石桥瀑布群和六立瀑布群组成，可开发面积达5平方公里。景区周边森林茂密，郁郁葱葱，生态环境保护完好。景区内曲径通幽，古树古藤虬蚺苍劲，森林遮天蔽日，空气清新，呈现出原始森林的古朴和神秘。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/青山瀑布景区.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/青山瀑布/青山瀑布01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/青山瀑布/青山瀑布02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/青山瀑布/青山瀑布03.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/青山瀑布/青山瀑布04.jpg',
                    // 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/青山瀑布/青山瀑布05.jpg',

                ],
            },
            {
                name: "银杉公园",
                content: "银杉公园位于金秀县城东北面16公里处的忠良乡与金秀镇交界处的土县山原始森林中。公园内有属于国家一级保护植物，被喻为“活化石”、“植物大熊猫”的银杉集中分布区。公园享高负氧离子环境，与群猴林间嬉戏，览大瑶山自然生态之大全，看世界银杉王与岁月比肩。告别城市繁忙，远离嘈杂喧嚣，感受宁静、享受健康、感受大自然的快乐旅行。",
                audioSrc: "cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/银杉公园.mp3",
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/银杉公园/银杉公园0101.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/银杉公园/银杉公园02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/银杉公园/银杉公园03.jpg',
                    // 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/银杉公园/银杉公园04.jpg',
                    // 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/银杉公园/银杉公园05.jpg',

                ],
            },
            {
                name: "古沙沟",
                content: "古沙沟景区是国家3A级生态旅游景区，距离桂林荔浦大约40公里，距离梧州蒙山大约30公里，这里风景优美，气候宜人，是夏天理想的旅游避暑圣地。景区由长六河峡谷漂流、牛岭顶红枫林、岭祖古村落、岭祖大峡谷、巴勒瑶寨高山部落、天岚山览胜等景点组成的。景区满目的原生态景色，处处山清水秀，奇峰林立，山泉清澈得像块水晶，碧绿得如同翡翠，水质柔软，清甜可口。",
                audioSrc: 'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区介绍音频/古沙沟景区.mp3',
                imgSrcArr:[
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/古沙沟01.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/巴勒02.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/巴勒03.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/巴勒04.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/巴勒05.jpg',
                    'cloud://mxlot-mmryjx-b61955.6d78-mxlot-mmryjx-b61955/景区/古沙沟/巴勒06.jpg',
                ],
            },
        ],

    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var idx = options.idx;
        var imgSrc = options.imgSrc;
        var imgSrcArr = options.imgSrcArr;
        // var duration = backAudioManager.duration
        // console.log(duration);
        this.setData({
            "actionArr[0]":this.data.listArr[idx],
            imgSrc:imgSrc,
            title:this.data.listArr[idx].name,


            // duration:duration,
        });
        console.log(this.data.actionArr);
        backAudioManager.src=this.data.listArr[idx].audioSrc;
        backAudioManager.title=this.data.listArr[idx].name;
    },

    play: function () {
        backAudioManager.play();
        // console.log(backAudioManager.duration);
        this.setData({
            isPlay: !this.data.isPlay,
        })
    },

    stop: function () {
        backAudioManager.pause();
        this.setData({
            isPlay: !this.data.isPlay,
        })

    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        backAudioManager.stop();
    },

    onShow:function () {
        // var currentTime= that.formatSeconds(this.data.active);
        var that = this;
        backAudioManager.play();
        backAudioManager.onTimeUpdate(function () {
            var duration = Math.ceil(backAudioManager.duration);
            var active = Math.ceil(backAudioManager.currentTime);
            // console.log("国庆十一"+duration,"国庆十一"+active,);
            that.setData({
                duration:duration,
                active:active,
            });

            var currentTime= that.formatSeconds(that.data.active);
            var durationTime = that.formatSeconds(that.data.duration);
                that.setData({
                    currentTime:currentTime,
                    durationTime:durationTime,
                });
            // console.log("国庆十一"+duration,"国庆十一"+active,"国庆十一"+durationTime, "国庆十一"+currentTime);
        });


    },

    onHide:function () {
        backAudioManager.stop();
    },

    formatSeconds:function (value) {
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    // var hourTime = 0;// 小时
    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if(minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            // hourTime = parseInt(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result = "" + (parseInt(secondTime)<10?'0'+parseInt(secondTime):parseInt(secondTime)) + "";

    if(minuteTime > 0) {
        result = "" + (parseInt(minuteTime)<10?'0'+parseInt(minuteTime):parseInt(minuteTime)) + ":" + result;
    }else {
        result = "00" + ":" + result;
    }
    return result;
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

