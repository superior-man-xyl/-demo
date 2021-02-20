//引入request方法，该方法在外部定义好了
import {
  request
} from "../../request/index.js";

//Page Object
Page({
  data: {
    // 初始化轮播图的数组
    swiperList: [],
    //分类导航的数组
    catesList:[],
    //楼层数组
    floorList:[],
  },
  //options(Object)
  onLoad: function (options) {
    // 发送异步请求数据，以获取轮播图数据
    //未优化方法
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     // console.log(result);
    //     //将请求到数据赋值到data中
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });

    //对数据请求进行一些优化，使用promise，以免掉入回调地狱
    //使用promise优化后
    // request({
    //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    //   })
    //   .then(result => {
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   })

    // 再优化，为了这里面代码简洁，将功能单独写成函数放外面，然后调用
    this.getswiperList();
    this.getcatesList();
    this.getfloorList();
  },
  // 获取轮播图数据
  getswiperList() {
    request({
        url: '/home/swiperdata'
      })
      .then(result => {
        this.setData({
          swiperList: result//result是优化后的结果
        })
      })
  },
// 获取分类导航栏的数据
getcatesList() {
  request({
      url: '/home/catitems'
    })
    .then(result => {
      this.setData({
        catesList: result
      })
    })
},
// 获取三个楼层的数据
getfloorList() {
  request({
      url: '/home/floordata'
    })
    .then(result => {
      this.setData({
        floorList: result
      })
    })
},
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});