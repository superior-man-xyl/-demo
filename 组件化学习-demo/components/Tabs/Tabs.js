// components/Tabs/Tabs.js
Component({
  /**
   * 页面传给组件的属性列表properties
   */
  properties: {
    /**
     * 格式：
     * 要接收的属性名称:{
     *    type:数据类型，数字，字符串，数组等,
     *    value:默认值
     * }
    */
      tabs:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
  //   tabs:[
  //   {
  //     id:0,
  //     name:"要闻",
  //     isActive:true
  //   },
  //   {
  //     id:1,
  //     name:"推荐",
  //     isActive:false
  //   },{
  //     id:2,
  //     name:"原创",
  //     isActive:false
  //   },{
  //     id:3,
  //     name:"热点",
  //     isActive:false
  //   }
  // ]
  },

  /**
   * 组件的方法列表methods
   * 与page里页面不同，组件中的回调函数不是与data同层级的，
   * 而是放在methods，不然会找不到方法
   */
  methods: {
    handleItemTab(e){
      /**
       * 函数功能实现：
       * 1.获取被点击的索引index
       * 2.获取原数组
       * 3.对数组循环
       *    把每个成员的isActive改为false，只将被点击的哪个改为true
       */
      console.log(e);
      const {index}=e.currentTarget.dataset;
      //触发父组件（页面）中的自定义事件，同时传递数据给父组件（页面）
      this.triggerEvent("itemChange",{index});
      // let {tabs}=this.data;
      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
      // this.setData({
      //   tabs
      // })
    }
  }
})
