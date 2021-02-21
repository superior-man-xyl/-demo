// pages/goods_list/goods_list.js
import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

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
    },],
    goodsList:[]
  },

// 接口要的参数
QueryParams:{
  query:"",
  cid:"",
  pagenum:1,
  pagesize:10
},
// 总页数
totalPages:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);//得到url传来的数据cid
    this.QueryParams.cid=options.cid;
    this.getGoodsList();//调用获取列表数据的函数
  },
 
  // 获取商品列表数据 使用async
  async getGoodsList(){
    const res=await request({url:"/goods/search",data:this.QueryParams});
    // console.log(res);
    // 获取总条数
    const total=res.total;
    // 计算总页数
    this.totalPages=Math.ceil(total/this.QueryParams.pagesize)
    this.setData({
      //拼接数组
      goodsList:[...this.data.goodsList,...res.goods]
    })

    // 关闭下拉刷新的窗口  没有调用下拉刷新效果时，也不会报错的
    wx.stopPullDownRefresh();
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

// 页面上滑，滚动条触底事件
onReachBottom(){
  // console.log("到底了");
  if(this.QueryParams.pagenum>=this.totalPages){
    //证明没有下一页数据
    wx.showToast({
      title: '已经到底了'
    });
  }else{
    //还有下一页数据 页码加一
    this.QueryParams.pagenum++;
    //重新请求数据
    this.getGoodsList();
  }
},
// 下滑触底，加载下一页，思路总结：
// 用户下滑页面，滚动条触底，开始加载下一页
//       使用onReachBottom事件
//       判断有没有下一页数据  有就加载，没就提醒
//           获取总页数，数据量除于单页面数据量
//           获取当前页码，比较是否到底
      // 重新加载下一页时
      //       页码++
      //       重新发送请求，请求数据回来，拼接到原数据后面，而不是直接赋新值



  /**
   * 页面相关事件处理函数--监听用户下拉动作,下拉刷新
   */
  onPullDownRefresh: function () {
    //1.重置数组
    this.setData({
      goodsList:[]
    })
    //2.重置页码
    this.QueryParams.pagenum=1;
    //3.重新发送请求
    this.getGoodsList();
    //4.关闭下拉刷新的窗口，数据请求来了后马上结束窗口，写到getGoodsList里
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})