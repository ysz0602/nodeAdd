var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'D:/workspace'

server.on('request', function (req, res) {
    fs.readFile('./template.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        // 1.如何得到 wwwDir 目录列表中的文件名和目录名
        // fs.readdir
        // 2. 如何将得到的文件名和目录名替换到 template.html 中
        //  2.1 在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的）
        //  2.2 根据 files 生成需要的 HTML 内容
        // 只要你做了这两件事儿，那这个问题就解决了
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www Dir.')
            }
            // 这里只需要使用模块引擎解析替换 data 中的模板字符串就可以了
            console.log(files)
            var htmlStr = template.render(data.toString(), {
                title: '哈哈哈',
                files: files
            })
            
            res.end(htmlStr)
        })
    })
})
server.listen(3000, function () {
    console.log(`服务启动了`)
})