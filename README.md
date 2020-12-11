# 注意事项

这里记录了webpack学习过程中的一些注意事项

## 依赖使用  

示例文件夹中所有引用的依赖都来自于 webpack-study/node_modules 文件夹下

例如: 【02webpack样式打包文件夹】 所用到的 依赖都来自于 webpack-study/node_modules 文件夹
这样的好处是: 避免在每一个目录都创建了一个nodemodule , 默认让他们共同引用一个父亲下的node_modules

## 打包命令

默认打包命令使用的是  

``` js
npx webpack
```
