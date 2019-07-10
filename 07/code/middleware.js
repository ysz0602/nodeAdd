var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    // 解析表单 get 请求体
    // 解析表单 post 请求体
    // 解析 Cookie
    // 处理 Session
    // 使用模板引擎

    // 解析请求地址中的 get 参数
    var urlObj = url.parse(req.url, true)
    req.query = urlObj.query

    // 解析请求地址中的 post 参数
    req.body = {
        foo:'bar'
    }

    // 解析 Cookie
    req.cookies = {
        isLogin:true
    }

    // 配置 Session 
    req.session = {}

    // 配置模板引擎
    
})

server.listen(3000, function () {
    console.log('3000 running...')
})