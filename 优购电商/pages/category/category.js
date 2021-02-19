// pages/category/category.js
import {
  request
} from "../../request/index.js";


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList:[],
    // 右侧的内容数据
    rightContentList:[],
    //被点击的左侧菜单
    currentIndex:0
  },
  //接口的返回数据
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },

  getCates(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    })
    .then(result=>{
      // console.log(result);
      this.Cates=result.data.message;
      // 构造左侧的菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
      //构造右侧内容商品数据
      let rightContentList=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContentList
      })
    });
  },

// 左侧菜单的点击事件
handleItemTap(e){
  console.log(e);
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