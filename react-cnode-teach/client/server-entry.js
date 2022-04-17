import React from 'react';
import App from './App.js'; //没有./ 其就会自动到node_modules里去找
// 这个文件会在服务端渲染时被使用，因为其不能直接在node.js里运行，也需要被打包，具体在webpack.config.server.js
export default <App/>;