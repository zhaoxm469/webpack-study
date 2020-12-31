# 说明

把CSS单独抽离出来, 主要用到的是这个插件[mini-css-extract-plugin](https://www.webpackjs.com/plugins/extract-text-webpack-plugin/).  

## 代码  

首先安装

``` bash
npm install -D mini-css-extract-plugin
```

webpack.config.js 配置

> 使用 mini-css-extract-plugin 插件, 可以去掉style-loader 了, 因为style-loader 是把样式追加到html页面中去

``` js
module: {
    rules: [{
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }]
}
```

plugins配置

``` js
plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.css',
    }),
]
```

## 注意事项

在使用的过程中直接看的webpack文档提供的css抽离插件 【extract-text-webpack-plugin】插件  , 但是TM的 运行不起来, 最后发现是版本太老了.  作者宣布已经废弃了!!!
