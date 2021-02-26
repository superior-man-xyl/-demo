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
//全局变量
GoodsInfo:{},
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
    this.GoodsInfo=res;
    // console.log(res);
    //做个优化，获取到的对象里有很多属性，我们应该只取我们要的
    this.setData({
      goodsObj:{
        goods_price:res.goods_price,
        //iphone部分手机不能识别webp格式图片（introduce里有），应该和后台沟通
        //这里先进行简单的替换，毕竟获得的数据里是有jpg格式图片的
        pics:res.pics,
        goods_name:res.goods_name,
        goods_introduce:res.goods_introduce.replace(/\.webp/g,'.jpg')
      }
    })
  },
//点击放大全屏预览图片，使用小程序的api---previewImage
  handlePreviewImage(e){
    //先构造一个要预览的图片数组，为此创建了给GoodsInfo
    const urls=this.GoodsInfo.pics.map(v=>v.pics_mid);
    //接收传递过来的图片url
    const current=e.currentTarget.dataset.url;
    wx.previewImage({
      // current: current,
      // urls: urls
      //或者使用解构写法
      current,
      urls
    });
      
  },
//加入购物车
// 1. 绑定点击事件
// 2. 获取缓存中的购物车数据，数组格式
// 3. 判断商品是否存在，在就修改商品数据，数量加一，将新数组填充回缓存中
// 4. 不在就给数组添加一个新元素，并且将新数组填充回缓存中
  handleCartAdd(){
    //1.获取缓存中的购物车 数组
    let cart =wx.getStorageSync("cart")||[];
    //2.判断对象是否存在购物车数组里
    let index=cart.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    // 当数组中的元素在测试条件时返回 true 时,
    //  findIndex() 返回符合条件的元素的索引位置，
    //  之后的值不会再调用执行函数。
    // 如果没有符合条件的元素返回 -1
    if(index===-1){
      //3.不存在 
    this.GoodsInfo.num=1;
    this.GoodsInfo.checked=true;
    cart.push(this.GoodsInfo);
    }else{
      //4. 已经存在购物车数据 执行数量加一
      cart[index].num++;
    }
    //5.把购物车重新添加回缓存
    wx.getStorageSync("cart",cart);
    //6.弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true//防止用户频繁点击，1.5秒后才能进行下一次添加
    });
      
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