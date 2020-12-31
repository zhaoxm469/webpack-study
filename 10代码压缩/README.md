# 前言

在上线前我们要进行一些静态资源的打包压缩

[css-minimizer-webpack-plugin CSS压缩插件](https://www.npmjs.com/package/css-minimizer-webpack-plugin)  
[html-webpack-plugin HTML 处理插件](https://www.npmjs.com/package/html-webpack-plugin)  

## HTML资源压缩

如果引用html-webpack-plugin插件以后, 我们无需做其他处理.  
mode 为正式环境的时候, 插件会自动启动html压缩功能

``` js
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        minify: {
            // 去掉空格
            collapseInlineTagWhitespace: true,
            // 去掉注释
            removeComments: true,
        },
    }),
],
```

## JS资源压缩

我们无需处理.  
webpack 4.x版本以后 mode 为 production 以后 , webpack 会自动启动 UglifyJsPlugin 插件 .

## CSS资源压缩

首先安装

``` bash
npm install css-minimizer-webpack-plugin -D
```

webpack.config.js配置

``` js
optimization: {
    // true 默认开启生产环境，false 开启开发环境，不压缩css
    minimize: false,
    minimizer: [
        new CssMinimizerWebpackPlugin({
            // 启用/ 禁用多进程并行运行。
            parallel: true,
        }),
    ],
}
```

## 注意事项  

CSS打包的时候 如果引用图片资源 必须引用url-loader, 否儿打包不成功, 其他字体文件等资源引用file-loader

** 压缩HTML资源一直报错, 最后是因为HtmlWebpackPlugin template 引用的html模板 标签有些原因, 把mate 标签删除了就可以打包了
