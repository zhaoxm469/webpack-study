# 注意事项

这里记录了学习过程中的一些注意事项

## 依赖使用  

所有二级目录使用的nodemoduel依赖都在项目最外层  
例如:02webpack样式打包文件夹 所用到的webpack的命令都是执行的webpack学习目录下的nodemodule下  
这样避免在每一个目录都创建了一个nodemodule , 默认让他们共同引用一个父亲惜别的

## 打包命令

默认打包命令使用的是  

``` js
npx webpack
```
