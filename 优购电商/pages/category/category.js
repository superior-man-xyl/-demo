// pages/category/category.js
import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

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
    currentIndex:0,
    // 右部内容区滚动条，距离顶部的距离
    scrollTop:0
  },
  //接口的返回数据
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用缓存技术
    // 1.判断本地储存是否有旧数据，有旧数据，且没有过期，就使用旧数据
    // 格式：{time:data.now(),data[.....]}
    // 2.没有旧数据，就发送请求，获取数据，避免了每次都请求数据，毕竟分类页东西太大

    // 获取本地存储中的数据
    const Cates=wx.setStorageSync("cates");
    // 判断
    if(!Cates){
      // 不存在  就请求
       this.getCates();
    }else{
      // 看旧数据是否过期 这里定义过期时间为五分钟
      if(Date.now()-Cates.time>10000){
        // 重新发送请求
        this.getCates();
      }else{
        // 使用旧数据
        this.Cates=cates.data;
        // 接着，赋值数据，使用上旧数据
        // 构造左侧的菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
      //构造右侧内容商品数据,初始化是默认第一个，所以是[0]
      let rightContentList=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContentList
      })
      }
    }
   
  },

 async getCates(){
    // request({
    //   url:"/categories"
    // })
    // .then(result=>{
    //   // console.log(result);
    //   this.Cates=result.data.message;

    //   // 把接口的数据存入本地存储中   cates
    //   wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
        

    //   // 构造左侧的菜单数据
    //   let leftMenuList=this.Cates.map(v=>v.cat_name);
    //   //构造右侧内容商品数据,初始化是默认第一个，所以是[0]
    //   let rightContentList=this.Cates[0].children;
    //   this.setData({
    //     leftMenuList,
    //     rightContentList
    //   })
    // });
    // 上面的是使用.then 我们使用await来优化，使其看上去更像同步的
    const result=await request({url:"/categories"})
    // this.Cates=result.data.message; 优化这个，在result/index.js中把result改为result.data.message;
    this.Cates=result;//更加简短了
      // 把接口的数据存入本地存储中   cates
      wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
      // 构造左侧的菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
      //构造右侧内容商品数据,初始化是默认第一个，所以是[0]
      let rightContentList=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContentList
      })

  },

// 左侧菜单的点击事件
handleItemTap(e){
  // console.log(e);
  const {index}=e.currentTarget.dataset;
  //点击后，内容商品随着菜单改变
  let rightContentList=this.Cates[index].children;
  this.setData({
    currentIndex:index,
    rightContentList,
    // 重新设置scroll-view的scroll-top的属性值
    scrollTop:0
  })
  // 总结过程：
  // 1.获取被点击菜单标题上的索引
  // 2.给currentIndex赋上新值
  // 3.按照不同的索引渲染右侧内容
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