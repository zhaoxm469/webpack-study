# 说明  

文件指纹就是打包完成以后文件引用的后缀
例如:index_sdj123.js -> sdj123就是文件指纹
通常可以用作版本管理

## 文件指纹如何生成  

* Hash
  + 和整个项目有关, 只要有项目文件修改, 就会发生改变  
* ChunkHash
  + 和webpack打包的chunk有关, 不同的entry会生成不同的chunk
* ContentHash
  + 根据文件内容定义, 文件不变的化, 则ContentHash也不变

## 代码  

``` js
    {
        output: {
            filename: '[name]_[hash:8].js',
            path: resolve(__dirname, 'dist'),
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpckPlugin({
                template: './src/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: '[name]_[contenthash:8].css',
            })
        ],
    }
```
