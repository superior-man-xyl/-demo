# 不使用脚手架工具构建项目的过程

- npm init 初始化项目，生成 package.json 文件

- npm i webpack 安装 webpack

- npm i react 得到 node_modules 依赖文件，且记录到了 package.json 里

- 新键一个 build 文件 用于存放 webpack 的配置文件，工程里需要用到的脚本文件 等等

- 新键一个 client 文件 用于存放前端的一个目录，如 app.js

- 在 client 文件里加入 app.js App.jsx, 在 build 下面创建一个 webpack.config.js，并且为其进行配置书写

- 在 package 下进行命令的书写，才能使用 npm run start ，npm run build
  `"build": "webpack --config build/webpack.config.js"`表示指定 webpack 的配置文件，以用来打包

- 在入口文件下下载 react-dom，用于将 react 组件接入 DOM 中，使用命令 npm i react-dom -S
  - --save 安装到项目目录下，并在 package.json 文件的 dependencies 中写入依赖，简写为-S
  - --save-dev 安装到项目目录下，并在 package.json 文件的 devDependencies 中写入依赖，简写为-D

- 写 webpackloader，用于处理 jsx，使用 babel-loader，使用命令 npm i babel-loader -D，因为这个只用于开发环境，就使用-D

- 接着下载 babel-core，因为 babel-loader 只是一个插件，并不包括其核心的代码，使用命令 npm i babel-loader -D

- 接着对 babel 进行配置，因为要指定其对 jsx 进行编译，其配置文件为 .babelrc，建立到根目录下

- 对于presets，也要安装一些东西以支持我们的设定，npm i babel-preset-es2015 babel-preset-es2015-loose babel-preset-react -D,接着babelrc下的设定就能生效了

- 接着设置使用浏览器打开, npm i html-webpack-plugin -D, 下载html-webpack-plugin,该插件将为你生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包。

- 但是，上面的是旧版本的babel了要进行更新，npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime -D，使用新版本的babel
