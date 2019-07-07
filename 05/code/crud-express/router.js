/**
 * router.js 模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函
 * 模块职责要单一，不要乱写
 */

// var fs = require('fs')
var Student = require('./student')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1.创建一个路由容器
var router = express.Router()

// 2.把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中可以持久化
    // 3. 发送相应
    new Student(req.body).save(function (err) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    // 1.在客户端的列表页中处理链接问题(需要有 id 参数)
    // 2.获取要编辑的学生 id
    // 3.渲染编辑页面
    //  根据 id 把学生信息查出来
    //  使用模板引擎渲染页面
    Student.findById(req.query.id, function (err, student) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        // console.log(student)
        res.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    // 1. 获取表单数据
    // req.body
    // 2. 保存更新
    // Student.update()
    // 3. 发送相应
    Student.findByIdAndUpdate(req.body.id, req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据
    Student.findByIdAndRemove(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        res.redirect('/students')
    })
})

// 3. 把 router 导出
module.exports = router
