# 打包完以后自动创建html资源

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) 创建打包的html文件插件
[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) 删除dist目录插件

## 代码

首先安装html-webpack-plugin

``` base
npm i html-webpack-plugin clean-webpack-plugin -D
```

在webpack.config.js 引入插件

``` js
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
    new HtmlWebpackPlugin({
        title: '我titile',
        template: './index.html',
        name: '123',
        meta: {
            charset: {
                charset: 'utf-8'
            },
            viewport: 'width=device-width, initial-scale=1',
        },
    }),
    new CleanWebpackPlugin()
]
```

## 注意事项

模式默认使用的是development .  
如果模式使用的是正式的, html资源有些东西得注释掉, meta 标签信息.(暂时没有看原因, 学完后边的再回头看看查一下原因)

CleanWebpackPlugin 插件在新版引用 是 `const = { CleanWebpackPlugin }` 改为这样的了
