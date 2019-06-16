// require 是一个方法
// 它的作用就是用来加载模块的
// 在 Node 中，模块有三种：
// 具名的核心模块， 例如 fs、http
// 用户自己编写的文件模块
// 相对路径必须加 ./
// 在 Node 中， 没有全局作用域， 只有模块作用域
// 外部访问不到内部， 内部也访问不到外部
// 既然是模块作用域， 那如何让模块与模块之间进行通信

var foo = 'aaa'
console.log(' start a')
require('./b')
console.log('end a')
console.log(foo)