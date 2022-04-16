import React from "react";
import ReactDOM from "react-dom"; //在这个入口文件下需要使用ReactDOM将react的组件渲染到DOM里面
import App from "./App.jsx";

ReactDOM.render(<App/>, document.body);// 官方不推荐这样做，官方推荐有一个root节点给使用挂载
// 这样就挂载完成了
