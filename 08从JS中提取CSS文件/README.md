# 从JS中提取CSS文件

[ExtractTextWebpackPlugin](https://www.webpackjs.com/plugins/extract-text-webpack-plugin/)从 bundle 中提取文本(CSS)到单独的文件

## 代码  

首先安装
npm install --save-dev extract-text-webpack-plugin

loader配置 , 使用插件 extract-text-webpack-plugin 提供的loader 可以去掉 原来的style-loader.  
因为style-loader 是将css插入到html中, 现在我们是要将他抽离成一个文件.  

``` js
{
    test: /\.css$/,
    use: extractCSS.extract(['css-loader', 'postcss-loader'])
}, {
    test: /\.less$/i,
    use: extractLESS.extract(['css-loader', 'less-loader'])
},
```

plugins配置

``` js
plugins: [
    new ExtractTextPlugin('style.css')
    //如果想要传入选项，你可以这样做：
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
]
```
