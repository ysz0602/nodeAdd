// require 方法有两个作用：
// 1. 加载文件模块并执行里面的代码
// 2.拿到被加载文件模块被导出的接口对象
// 在每个文件模块中都提供一个对象：exports
// exports 默认是一个空对象
var res = require('./b')
console.log(res.foo)
console.log(res.add(10, 30))
console.log(res.age)