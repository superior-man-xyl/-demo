const express = require('express');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const serverEntry = require('../dist/server-entry.js').default;

const template = fs.readFileSync(path(__dirname,'../dist/index.html'),'utf-8');

const app = express();

app.use('/public', express.static(path.join(__dirname,'../dist')))  // 与之前webpack里设置的/public对应上了

app.get("*",function(req,res){
   const appString = ReactSSR.renderToString(serverEntry); // 得到服务端内容
   res.send(template.replace('<app></app>',appString)); // 将其send到浏览器
});

app.listen(3333, function(){
    console.log('server is listening on 3333');
});