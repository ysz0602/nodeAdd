/**
 * 1.结合 fs 发送文件中的数据
 * 2. Content-Type
 * 图片不需要指定编码
 * 一般字符数据才指定编码
 *  *//
var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    // / index.html
    var url = req.url

    if (url === '/') {
        fs.readFile('./resource/index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;  charset=utf-8')
                res.end('文件读取失败， 请稍后重试')
            } else {
                // data 默认是二进制数据
                res.setHeader('Content-Type', 'text/html;  charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/a') {
        fs.readFile('./resource/a.png', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;  charset=utf-8')
                res.end('文件读取失败， 请稍后重试')
            } else {
                res.setHeader('Content-Type', 'image/png;')
                res.end(data)
            }
        })
    }
})

server.listen(3000, function () {
    console.log('Server is running.')
})