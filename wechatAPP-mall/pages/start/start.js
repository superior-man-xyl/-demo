// pages/start/start.js
const WXAPI = require('apifm-wxapi');
WXAPI.init('gooking')
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
    WXAPI.banners().then(res => {
      if (res.code == 0) {
        this.setData({
          banners: res.data
        })
      }
    })
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
  onunLoad: function () {
    
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