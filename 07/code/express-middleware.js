var express = require('express')

var app = express()

// 中间件：处理请求的，本质就是个函数
// 在 Express 中，对中间件有几种分类
// 不关心请求路径和请求方法的中间件
// 也就是说任何覃塘区都会进入这个中间件
// 中间件本身是一个方法，该方法接收三个参数
// Request 请求对象
// Response 相应对象
// next 下一个中间件
// 当一个请求进入一个中间件之后，如果不调用next，是不会进入下一个中间件
// 所有next是一个方法，用来调用下一个中间件

// app.use(function(req, res, next) {
//     console.log('请求进来了1')
//     next()
// })

// app.use(function(req, res, next) {
//     console.log('请求进来了2')
//     next()
// })

// app.use(function(req, res, next) {
//     console.log('请求进来了3')
//     res.send('333 end')
// })

app.use(function(req, res, next) {
    console.log('请求进来了1')
    next()
})

// 以 /xxx 开头的路径中间件
app.use('/a', function (req,res,next) {
    console.log(req.url)
})

app.use('/b', function (req,res,next) {
    console.log(req.url)
})

app.listen(3000, function () {
    console.log('running...')
})