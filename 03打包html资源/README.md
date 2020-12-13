# 打包完以后自动创建html资源

需要准备的插件
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)  

## 代码

首先安装html-webpack-plugin

``` base
 npm i html-webpack-plugin -D
```

在webpack.config.js 引入插件

``` js
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
]
```

## 注意事项

模式默认使用的是development .  
如果模式使用的是正式的, html资源有些东西得注释掉, meta 标签信息.(暂时没有看原因, 学完后边的再回头看看查一下原因)
