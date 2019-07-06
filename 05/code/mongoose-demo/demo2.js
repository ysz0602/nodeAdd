var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1.连接数据库
// 指定连接的数据库不需要存在，当插入第一条数据时会自动创建
mongoose.connect('mongodb://localhost/test')

// 2.设计文档结构（表结构）
// 字段名称就是表结构中的属性名
// 值
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String
    }
  });

// 3.将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//            moogoose 会自动将大写名词的字符串生成小写复数集合名称
//            例如 User 会变成 users 集合名称
// 返回值：模型构造函数
var User = mongoose.model('User', userSchema)

// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 User 集合中的数据为所欲为了
var admin = new User({
    username: '张三',
    password: '123456',
    email: 'admin@admin.com'
})

// 新增
// admin.save(function (err, res) {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(res)
//     }
// })

// 查询
User.find(function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

// 条件查询
// User.find({
//     username: '张三'
// }, function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

// 查询第一条
// User.findOne({
//     username: '张三',
//     password: '123456'
// }, function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

// 删除
// User.remove({
//     username: '张三'
// }, function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

// 更新
// User.findByIdAndUpdate('5d20cfc9976fc95684171436', {
//     password: '123'
// }, function (err, res) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })