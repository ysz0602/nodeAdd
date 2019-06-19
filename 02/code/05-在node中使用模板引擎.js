// 1.安装 art-template
// 2.在需要使用的文件模块中加载 art-template
// 3.看文档，使用模块引擎 API

var artTemplate = require('art-template')

var ret = artTemplate.render('hello {{ name }}', {
    name: 'Jack'
})
console.log(ret)