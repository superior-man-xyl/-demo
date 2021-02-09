// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      tabs:[
      {
        id:0,
        name:"要闻",
        isActive:true
      },
      {
        id:1,
        name:"推荐",
        isActive:false
      },{
        id:2,
        name:"原创",
        isActive:false
      },{
        id:3,
        name:"热点",
        isActive:false
      }
    ]
    // tabs:[
    //   {
    //     id:0,
    //     name:"更换一",
    //     isActive:true
    //   },{
    //     id:1,
    //     name:"更换二",
    //     isActive:true
    //   },{
    //     id:2,
    //     name:"更换三",
    //     isActive:true
    //   },
    // ]
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
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
