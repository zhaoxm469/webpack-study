# 其他资源打包

非html, css, js 等资源文件, 都可以用[file-loader](https://www.npmjs.com/package/file-loader)  来处理.  

## 代码

首先安装 cnpm install -D file-loader

``` base
npm install -D filte-loader
```

在webpack.config.js 写入规则

``` js
 module: {
     rules: [{
         exclude: /\.(html|js|css)$/,
         use: 'file-loader',
     }]
 }
```
