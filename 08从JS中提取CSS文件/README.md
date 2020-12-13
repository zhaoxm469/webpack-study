# 从JS中提取CSS文件

[mini-css-extract-plugin](https://www.webpackjs.com/plugins/extract-text-webpack-plugin/)这个插件提取CSS到单独的文件中

## 代码  

首先安装
npm install --save-dev mini-css-extract-plugin

loader配置 , 使用插件 mini-css-extract-plugin 提供的loader 可以去掉 原来的style-loader.  
因为style-loader 是将css插入到html中, 现在我们是要将他抽离成一个文件.  

``` js
{
    test: /\.scss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
}
```

plugins配置

``` js
new MiniCssExtractPlugin({
    filename: 'style.css',
}),
```

## 注意事项

在使用的过程中直接看的webpack文档提供的css抽离插件 【extract-text-webpack-plugin】插件  , 但是TM的 运行不起来, 最后发现是版本太老了.  作者宣布已经废弃了!!!
