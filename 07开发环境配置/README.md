# 说明

开发环境得配置不考虑兼容性, 代码压缩等问题.  
主要是把前面学习得串联起来. 详细请看webpack.config.js 源码.  

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
module: {
    rules: [{
        exclude: /.(html|png|gif|jpg|jpeg|scs|css|js)$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath: 'fonts',
            },
        }],
    }]
}
```

如果js里引用css和scss 在loader里要把这两个规则单独配置一下.

``` js
module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    }]
}
```

注意一下配置url-loader 限制图片大小的配置写法

``` js
module: {
    rules: [{
        test: /\.(png|gif|jpeg|jpg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8 * 1000,
            },
        }],
    }]
}
```
