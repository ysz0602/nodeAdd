// 如果是非路径形式的模块标识
// 路径形式的模块
// ./
// ../
// /xxx
// 首位的/在这里表示的是当前文件模块所属磁盘根路径
require('./foo.js')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须用 npm 下载
// 使用的时候就可以通过 requrie('包名')的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样
// node_modules/art-template
// node_modules/art-template/package.json 文件
// node_modules/art-template/package.json 文件中的 main 属性
// main 属性中就记录了 art-template 的入口模块
var template = require('art-template')