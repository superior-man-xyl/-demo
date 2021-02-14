// pages/juejin/juejin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"后端",
        isActive:true
      },{
        id:1,
        name:"前端",
        isActive:false
      },{
        id:2,
        name:"Android",
        isActive:false
      },{
        id:3,
        name:"ios",
        isActive:false
      },],
      fenlei:[
        [{
          id:0,
          name:"全部"
        },{
          id:1,
          name:"java"
        },{
          id:2,
          name:"后端"
        },{
          id:3,
          name:"spring boot"
        },{
          id:4,
          name:"Go"
        },{
          id:5,
          name:"python"
        },{
          id:6,
          name:"Mysql"
        },{
          id:7,
          name:"redis"
        },{
          id:10,
          name:"数据库"
        },{
          id:11,
          name:"JVM"
        },],[],[],
      ]
  },
  handleItemChange(e){
    console.log(e);
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
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
  onShareAppMessage: function () {

  }
})