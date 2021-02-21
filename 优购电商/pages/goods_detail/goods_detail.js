// pages/goods_detail/goods_detail.js
import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品详情对象
    goodsObj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options;
    // console.log(goods_id);
    // 调用获取数据的函数
    this.getGoodsDetail(goods_id);
  },
// 获取商品详情数据
  async getGoodsDetail(goods_id){
    const res=await request({url:"/goods/detail",data:{goods_id}});
    // console.log(res);
    this.setData({
      goodsObj:res
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