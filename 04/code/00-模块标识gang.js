var fs = require('fs')

// 所有文件操作的API都是异步的
// 文件操作中的路径可以省略 ./
// fs.readFile('data/a.txt', function (err, data) {
//     if (err) {
//         return console.log('读取失败')
//     }
//     console.log(data.toString())
// })

// 在模块加载中，相对路径中的./不能省略
// Error: Cannot find module 'data/foo.js'
// require('./data/foo.js')('hello world')

fs.readFile('/data/a.txt', function (err, data) {
    if (err) {
        console.log(err)
        return console.log('读取失败')
    }
    console.log(data.toString())
})