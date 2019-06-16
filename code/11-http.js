var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('hello 世界')

    var url = req.url
    
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hello 世界')
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p>hello html<a href="">点我</a></p>')
    }
})

server.listen(3000, function () {
    console.log('Server is running.')
})