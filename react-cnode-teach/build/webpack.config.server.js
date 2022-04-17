const path = require("path"); //引入相对路径，防止出错

module.exports = {
   target: 'node', //表示其打包出来的内容是使用在node执行环境中，如果是web就是浏览器环境
  //模块输出
  entry: {
    //入口文件
    app: path.join(__dirname, "../client/server-entry.js"),
  },
  output: {
    // 输出文件
    filename: "server-entry.js", //因为在服务端没有缓存的概念，就不需要hash了，直接写死方便引用即可
    path: path.join(__dirname, "../dist"),
    publicPath: "/public",
    libraryTarget: 'commonjs2', // 表示打包出来的js使用的模块的方案
  },
  module: {
      rules: [ //用于配置，使其能识别jsx
        // {
        //     test: /.jsx$/, // 用个正则表达式
        //     loader: 'babel-loader' //babel的作用很多，es6->es5, react官方默认的编译工具就是babel，用于编译jsx
        // },
        // {
        //     test: /.js$/, // 给js专门立个
        //     loader: 'babel-loader',
        //     exclude: [
        //         path.join(__dirname, '../node_modules') //排除调node_modules,不去编译其下的js文件
        //     ]
        // }
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
      ]
  }
};
