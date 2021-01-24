// pages/start/start.js
const WXAPI = require('apifm-wxapi');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
gotoindex:function(event){
wx.switchTab({//注意跳转方式，navigateto不能跳进tabbar页面，其带回退，要用不带回退的另外方法才能跳转
  url: '../index/index',
})
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
  onLoad: function () {
    // 启动滑屏效果
    // 图片数据的来源?
    WXAPI.banners({
      //头部图 banner 位
      //app:表示获取整个应用的，刚开始的
      // https://api.it120.cc/tz/banner/list?type=app//type=app接口
      type:'app'
    })
    // 一个promise
    .then(res=>{
      this.setData({
        banners:res.data})
    })
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
  onShareAppMessage: function () {

  }
})