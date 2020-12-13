# 开发环境配置

基本上就是把前面学习的东西, 全部串联起来  

## 命令

打包

``` bash
npx webpack
```

启动webpack-dev-server

``` bash
npx webpack-dev-server
```

## 注意事项

如果想输出的文件指定目录, 需要修改loader的outputPath

``` js
{
    exclude: /.(html|png|gif|jpg|jpeg|scs|css|js)$/,
    use: [{
        loader: 'file-loader',
        options: {
            outputPath: 'fonts',
        },
    }],
}
```

如果js里引用css和scss 在loader里要把这两个规则单独配置一下.

``` js
rules: [{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}]
```

注意一下配置url-loader 限制图片大小的配置写法

``` js
{
    test: /\.(png|gif|jpeg|jpg)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 8 * 1000,
        },
    }],
}
```
