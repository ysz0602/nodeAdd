// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

// fs 是 file.system 的简写， 就是文件系统的意思

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

//2.读取文件
// 第一个参数就是读取文件
// 第二个参数是一个回调函数
/**
 * 成功：
 *  data 数据
 *  error null
 * 失败：
 *  data null
 * error 错误对象
*/
fs.readFile('./hello.txt', function (error, data) {
    console.log(error, data.toString())
})