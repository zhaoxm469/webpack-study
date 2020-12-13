# 其他资源打包

非html, css, js的资源都是其他资源, 类似iconfot字体的文件

需要用到的loader
[file-loader](https://www.npmjs.com/package/file-loader)  

其他引用
[iconfont.cn](https://www.iconfont.cn/) 用于下载iconfont字体等文件  

## 代码

首先安装 cnpm install -D file-loader

``` base
 npm install -D filte-loader
```

在webpack.config.js 写入规则

``` js
{
    exclude: /\.(html|js|css)$/,
    use: 'file-loader',
},
```
