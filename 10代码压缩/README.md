# CSS资源压缩

[css-minimizer-webpack-plugin](https://www.npmjs.com/package/css-minimizer-webpack-plugin) CSS压缩

## 代码

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
