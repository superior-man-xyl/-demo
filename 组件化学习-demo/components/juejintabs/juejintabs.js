// components/juejintabs/juejintabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTab(e){
      console.log(e);
      const {index}=e.currentTarget.dataset;
      //触发父组件（页面）中的自定义事件，同时传递数据给父组件（页面）
      this.triggerEvent("itemChange",{index});
    }
  }
})
