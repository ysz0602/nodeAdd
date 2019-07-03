var express = require('express')

var app = express()

app.use('/public/', express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template 
app.engine('html', require('express-art-template'))

// Express 为 Response 响应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

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

app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

app.get('/pinglun', function (req, res) {
    console.log(req.query)
    var comment = req.query
    comment.dateTime = '2019-07-03 10:58:51'
    comments.unshift(comment)
    res.redirect('/')
    // res.statusCode = 302
    // res.setHeader('Location', '/')
})


app.listen(3000, function () {
    console.log('running...')
})