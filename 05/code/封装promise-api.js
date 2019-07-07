var fs = require('fs')

// 创建 Promise 容器

function pReadFile (filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

pReadFile('./data/a.txt').then(function (data) {
    console.log(data)
    return pReadFile('./data/b.txt')
}).then(function (data) {
    console.log(data)
    return pReadFile('./data/c.txt')
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})