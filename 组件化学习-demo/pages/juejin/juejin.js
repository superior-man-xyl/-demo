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
      fenlei0:[{
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
        },{
          id:12,
          name:"设计模式"
        }],
        fenlei1:[{
          id:0,
          name:"全部"
        },{
          id:1,
          name:"javascript"
        },{
          id:2,
          name:"前端"
        },{
          id:3,
          name:"vue.js"
        },{
          id:4,
          name:"react.js"
        },{
          id:5,
          name:"css"
        },{
          id:6,
          name:"Node.js"
        },{
          id:7,
          name:"Webpack"
        },{
          id:10,
          name:"面试"
        },{
          id:11,
          name:"微信小程序"
        },{
          id:12,
          name:"设计模式"
        }],
        fenlei2:[{
          id:0,
          name:"全部"
        },{
          id:1,
          name:"Android"
        },{
          id:2,
          name:"Flutter"
        },{
          id:3,
          name:"kotlin"
        },{
          id:4,
          name:"java"
        },{
          id:5,
          name:"源码"
        },{
          id:6,
          name:"gradle"
        },{
          id:7,
          name:"性能优化"
        },{
          id:10,
          name:"Github"
        },{
          id:11,
          name:"Google"
        },{
          id:12,
          name:"架构"
        }],
        fenlei3:[{
          id:0,
          name:"全部"
        },{
          id:1,
          name:"ios"
        },{
          id:2,
          name:"swift"
        },{
          id:3,
          name:"Objective-C"
        },{
          id:4,
          name:"Flutter"
        },{
          id:5,
          name:"openGl"
        },{
          id:6,
          name:"Apple"
        },{
          id:7,
          name:"Xcode"
        },{
          id:10,
          name:"面试"
        },{
          id:11,
          name:"算法"
        },{
          id:12,
          name:"设计模式"
        }]
  },
  handleItemChange(e){
    console.log(e);
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
    console.log(tabs);
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