var express = require('express')
var fs = require('fs')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
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

app.listen(3000, function (req,res) {
    console.log(`running 3000 ...`)
})