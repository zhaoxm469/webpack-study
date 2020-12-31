# 打包图片资源

需要准备的loader  

[url-loader](https://www.npmjs.com/package/url-loader)  
[file-loader](https://www.npmjs.com/package/file-loader)  
[html-loader](https://www.npmjs.com/package/html-loader)

把css背景图引用的图片资源转换成base64格式  
优点: 转换为base64以后, 会减少对服务器的http请求, 减少服务器压力  
缺点: 如果base64过大, js包的体积会变大, 会影响js文件加载速度  

## 代码

首先安装url-loader 和 file-loader , url-loader依赖于file-loader

``` base
 npm i url-loader file-loader -D, url-loader 是依赖于file-loader
```

在webpack.config.js 写入规则

``` js
{
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
            // 限制图片打小，超过8192b,使用base64 否则使用 图片引用
            // 优点：使用base64 能减少http请求，减少服务器压力
            // 缺点：如果base64过大 ， 请求js资源会变慢，因为js资源会变大
            limit: 8192,
        },
    }, ],
}
```

如果图片在html文件中引用, 需要安装html-loader, 负责引入img, 从而能北url-loader进行处理

``` js
{
    test: /\.html$/i,
    loader: 'html-loader',
}
```

## 注意事项

当我引入html-loader打包html中的图片资源的时候 报了错, 
Automatic publicPath is not supported in this browser -> (此浏览器不支持自动公共路径)  
解决办法:
在webpack.config.js output 增加 publicPath: './'

``` js
 output: {
     publicPath: './',
 },
```

如果css和html中 共同引用了一个图片资源, webpack会默认识别, 把他们的引用指向同一个地址, 不会创建两个图片资源.  
例如:  
如果css引用一个图片 webpack会把他默认转成base64的话, 如果再在html引用相同的图片.  
webpack打包完以后的文件 两个地方 引用的是同一个base64地址, 超过打小限制的图片也亦是如此.
