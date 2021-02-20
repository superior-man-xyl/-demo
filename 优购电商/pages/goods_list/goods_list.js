// pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id:0,
      value:'综合',
      isActive:true
    }, {
      id:1,
      value:'价格',
      isActive:false
    },{
      id:0,
      value:'销量',
      isActive:false
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

handleTabsItemChange(e){
  // 获取被点击的标签索引
  const {index}=e.detail;
  // 修改原数组
  let {tabs}=this.data;
  // v是值，i是下标
  tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
  // 赋值到data中
  this.setData({
    tabs
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
  onShareAppMessage: function () {

  }
})