// app application 应用程序
// 把当前模块所有的依赖项都声明在文件模块最上面
// 为了让目录结果保持统一清晰， 所以把 所以HTML文件放到views目录中
// 为了方便的统一处理静态资源，所以我们约定吧所有的静态资源都存放在 public 目录
var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var comments = [
    {
        name: "张三",
        message: "今天天气不错！",
        dateTime: "2015-10-16"
    },
    {
        name: "张三2",
        message: "今天天气不错！",
        dateTime: "2015-10-16"
    },
    {
        name: "张三3",
        message: "今天天气不错！",
        dateTime: "2015-10-16"
    },
    {
        name: "张三4",
        message: "今天天气不错！",
        dateTime: "2015-10-16"
    },
    {
        name: "张三5",
        message: "今天天气不错！",
        dateTime: "2015-10-16"
    }
]

http
    .createServer(function (req, res) {
        var parseObj = url.parse(req.url, url)
        var pathname = parseObj.pathname
        if (pathname === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                var htmlStr = template.render(data.toString(), {
                    comments,
                })
                res.end(htmlStr)
            })
        } else if (pathname === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        } else if (pathname.indexOf('/public/') === 0) {
            // /public/css.main.css
            // /public/js/main.js
            // /public/lib/jquery.js
            // 统一处理
            // 如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
            // 所以就可以直接把请求中的路径当做文件路径来直接进行读取
            // console.log(url)
            fs.readFile('.' + pathname, function (err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        } else if (pathname === '/pinglun') {
            // console.log('收到表单请求了', parseObj.query)
            // res.end(JSON.stringify(parseObj.query))
            // 1.获取表单提交的数据 parseObj.query
            // 2.生成日期到数据对象中，然后存储到数组中
            // 3.让用户重定向跳转到首页 /
            //   当用户重新请求 / 的时候，数组中的数据发生了变化，所以用户看到的界面
            var comment = parseObj.query
            comment.dateTime = "2017-11-02 17:11:22"
            comments.unshift(comment)
            // 如何通过服务器让客户端重定向
            // 1.状态码设置为 302 临时重定向
            //   statusCode
            // 2.在响应头中通过 Location 告诉客户端往哪重定向
            //   setHeader
            // 如果客户端发现服务端的响应码是 302 ，就会自动去响应头中找到 Location
            // 所以你就能看到客户端自动跳转了
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        } else {
            fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function () {
        console.log('running...')
    })