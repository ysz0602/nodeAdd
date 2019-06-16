
var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    // console.log(`收到客户端的请求了, 请求路径是 ${req.url}`)
   
    // 根据不同请求路径发送不同的相应结果
    // 1. 获取url
    // 2. 判断路径处理相应
    var url = req.url
    // if (url === '/') {
    //     res.end('index page')
    // } else if (url === '/login') {
    //     res.end('login page')
    // } else {
    //     res.end('404 Not Found')
    // }
    
    if (url === '/products') {
        var products = [
            {
                name: '苹果 X',
                price: 8888
            },
            {
                name: '菠萝 X',
                price: 5000
            },
            {
                name: '小辣椒 X',
                price: 1999
            }
        ]
        // 相应内容只能只能是二进制数据或者字符串
        res.end(JSON.stringify(products))
    }
})


server.listen(3000, function () {
    console.log(`服务器启动成功了， 可以通过 http://127.0.0.1:3000 来进行访问`)
})