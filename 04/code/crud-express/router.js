/**
 * router.js 模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函
 * 模块职责要单一，不要乱写
 */

var fs = require('fs')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1.创建一个路由容器
var router = express.Router()

// 2.把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if (err) {
            return res.status(500).send('Server error!')
        }
        // console.log(data)
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: JSON.parse(data).students
        })
    })
})

router.get('/students/new', function (req, res) {

})

router.get('/students/new', function (req, res) {
    
})

router.post('/students/new', function (req, res) {
    
})

router.get('/students/edit', function (req, res) {
    
})

router.post('/students/edit', function (req, res) {
    
})

router.get('/students/delete', function (req, res) {
    
})

// 3. 把 router 导出
module.exports = router


// 这样也不方便
// module.exports = function (app) {
//     app.get('/students', function (req, res) {
//         fs.readFile('./db.json', 'utf8', function(err, data) {
//             if (err) {
//                 return res.status(500).send('Server error!')
//             }
//             // console.log(data)
//             res.render('index.html', {
//                 fruits: [
//                     '苹果',
//                     '香蕉',
//                     '橘子'
//                 ],
//                 students: JSON.parse(data).students
//             })
//         })
//     })
    
//     app.get('/students/new', function (req, res) {
    
//     })
    
//     app.get('/students/new', function (req, res) {
        
//     })
    
//     app.get('/students/new', function (req, res) {
        
//     })
    
//     app.get('/students/new', function (req, res) {
        
//     })
    
//     app.get('/students/new', function (req, res) {
        
//     })
    
//     app.get('/students/new', function (req, res) {
        
//     })
// }
