const path = require("path"); //引入相对路径，防止出错
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
  //模块输出
  entry: {
    //入口文件
    app: path.join(__dirname, "../client/app.js"),
  },
  output: {
    // 输出文件
    filename: "[name].[hash].js", //中括号是变量的意思，name是entry下的变量名，加上hash是为了区分文件变化，当然filename也可以写死
    path: path.join(__dirname, "../dist"),
    publicPath: "/public", //静态资源引用时的路径，如果其为空，那么就是得到app.hash.js(按上面的filename得来)，如果为现在设置的这样(publicPath: "/public",)，就是public/app.hash.js，非常有利于对文件的区分，要区分放到cdn里的文件的话，就设置为/cdn
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
  },
  plugins: [ // 设置plugin
    new HTMLPlugin({
      template: path.join(__dirname,'../client/template.html') //以我们的模板html为模板
    }), //生成html文件
    new CleanWebpackPlugin() //每次打包前清除dist文件夹
  ]
};
