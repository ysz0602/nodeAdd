# Node.js 第1天

## 上午总结
- Node.js 是什么
  + JavaScript 运行时
  + 既不是语言，也不是矿建，它时一个平台
- Node.js 中的 JavaScript
  + 没有 BOM、DOM
  + EcmaScript 基本的 JavaScript 语言部分
  + 在 Node 中为JavaScript 提供了一些服务器级别的 API
    * 文件操作的能力
    * http 服务的能力

## 总结

- Node 中的 JavaScript
  + EcamScript
    * 变量
    * 方法
    * 数据类型
    * 内置对象
    * Array
    * Object
    * Date
    * Math
  + 模块系统
    * 在 Node 中没有全局作用域的概念
    * 在 Node 中，只能通过 require 方法来加载执行多个 JavaScript 脚本文件
    * require 加载只能是执行其中的代码， 文件与文件之间由于模块作用域，所以不会污染的问题
      - 模块完全是封闭的
      - 外部无法访问内容
      - 内部也无法访问外部
    * 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
    * 但是某些情况下，模块与模块是需要进行通信的
    * 在每个模块中， 都提供了一个对象： `exports`
    * 该对象默认是一个空对象
    * 你要做的就是把需要被外部访问使用的成员手动的挂载到 `exports` 接口对象中
    * 然后谁来 `require` 这个模块， 谁就可以得到模块内部的 `exports` 接口对象
  + 核心模块
    * 核心模块是由 Node 提供的一个个的具名的模块，它们都有自己特殊的名称标记，例如
      - fs 文件操作模块
      - http 网络服务构建模块
      - os 操作系统信息模块
      - path 路径处理模块
      - 。。。。
    * 所有核心模块在使用的时候都必须手动的先使用 `require` 方法来加载，然后才可以使用，例如
      - `var fs = require('fs')`
- http
  + require
  + 端口号
    * IP 地址定位计算机
    * 端口号定位具体的应用程序
  + Content-Type
    * 服务器最好把每次相应的数据是什么类型都告诉客户端，而且要正确的告诉
    * 不同的资源对象的 Content-Type 是不一样
    * 对于文本类型的数据，最好加上编码，以防乱码
  + 通过网络发送文件
    * 发送的并不是文件，本质上来讲发送的是文件的内容
    * 当浏览器收到服务器相应内容之后，就是根据 Content-Type 进行对于的解析处理

## 复习
## 上午总结

- 代码风格
- 无分号
  + `(`
  + `[`
  + `\``
  + 最好前面补分号， 避免一些问题
  + 《编写可维护的 JavaScript》
- 服务端渲染
  + 说白了就是在服务端使用模板引擎
  + 模板引擎最早诞生于服务端，后来才发展到了前端
- 服务端渲染和客户端渲染的区别
  + 客户端渲染不利于 SEO 搜索引擎优化
  + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  
## 下午总结

## 知识点

- 模块系统
  + 核心模块
  + 第三方模块
  + 自己写的模块
  + 加载规则以及加载机制
  + 循环加载
- npm
- package.json
- Express
  + 第三方 Web 开发框架
  + 高度封装了 http 模块
  + 更加专注于业务，而非底层细节
  + 知其所以然
- 增删改查

  + 使用文件来保存数据（锻炼异步编码）
- MongoDB
  + （所有方法都封装好了）

   - 如何在 Node 中实现服务器重定向
     + header(location)
       * 301 永久重定向 浏览器会记住
       * 302 临时重定向 浏览器不记忆



## Node中的模块系统

使用 Node 编写应用程序主要就是在使用：

- EcmaScript 语言
  + 和浏览器不一样， 在 Node 中没有 BOM 和 DOM
- 核心模块
     + 文件操作的fs
     + http 服务的 http
     + url 路径操作模块
     + path 路径处理模块
     + os 操作系统信息
- 第三方模块
     + art-template
- 自己写的模块
   + 自己创建的文件



### 6.1什么是模块化

- 文件作用域
- 通信规则
  + 加载 require
  + 导出

### 6.2CommonJS 模块规范

在 Node 中的 JavaScript 还有一个很重要的概念：

- 模块作用域

- 使用 require 方法用来加载模块

- 使用 exports 接口对象用来导出模块中的成员

  #### 6.2.1 加载 `require`

  语法：

  ```javascript
  var 自定义变量名称 = requrie('模块')
  ```

  两个作用：

  - 执行被加载模块中的代码
  - 得到被加载模块中的 `exports` 导出接口对象

  #### 6.2.2 导出 `exports`

  + Node 中是模块作用域，默认文件中所有的成员只在当前文件模块有效

  + 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到 `exports` 接口对象中就可以了

    导出多个成员（必须在对象中）：

    ```javascript
    exports.a = 123
    exports.b = 'hello'
    exports.c = function () {
        console.log('ccc')
    }
    exports.d = {
        foo: 'bar'
    }
    ```

    

    导出单个成员（函数、字符串）：

    ```javascript
    module.exports = 'hello'
    module.exports = function (x,y) {
        return x + y
    }
    ```

    #### 6.2.3 原理解析

    exports 和 module.exports 的一个引用：

    ```javascript
    exports.foo = 'bar'
    //等价于
    module.exports.foo = 'bar'
    
    ```

    ### 7.Express

    原生的 http 在某些方面表现不足以应对我们的开发需求， 所以我们就需要使用框架来加快我们的开发效率，框架的目的

    #### 7.1.3.基本路由

    路由器

    get:

    ```javascript
    // 当你以 GET 方法请求 / 的时候，执行对应的处理函数
    app.get('/', function (req, res) {
        res.send('hello world')
    })
    ```

    post:

    ```javascript
    // 当你以 POST 方法请求 / 的时候，指定对应的处理函数
    app.post('/', function (req, res) {
        res.send('Got a POST request')
    })
    ```

    #### 7.2.在express中配置使用`art-template`模板引擎

    安装：

    ```shell
    npm install --save art-template
    npm install --save express-art-template
    ```

    配置：

    ```javascript
    app.get('/', function (req, res) {
        res.render('index.html', {
            title: 'hello world'
        })
    })
    ```

    如果希望修改默认的`views` 视图渲染存储目录，可以：

    ```javascript
    app.set('views', 目录路径)
    ```

    ####  7.3.在 Express如何获取POST请求体数据

    在 Express 中没有内置获取表单 POST 请求体的 API，这里我们使用一个第三方包：`body-parser`。

    安装：

    ```shell
    npm install --save body-parser
    ```

    ```javascript
    var express = require('express')
    // 0.引包
    var bodyParser = require('body-parser')
     
    var app = express()
     
    // 配置 body-parser
    // 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
    // 也就是说你就可以配置通过 req.body 来获取表单 POST 请求数据
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
     
    // parse application/json
    app.use(bodyParser.json())
     
    app.use(function (req, res) {
      res.setHeader('Content-Type', 'text/plain')
      res.write('you posted:\n')
      // 可以通过 req.body 来获取表单 POST 请求体数据
      res.end(JSON.stringify(req.body, null, 2))
    })
    ```

    #### 7.5.5. 自己编写的步骤

    + 处理模板

    + 配置开放静态资源

    + 简单路由： /students 渲染静态页

    + 路由设计

    + 提取路由模块

    + 封装 student.js 

      - 查询所有学生列表的 API find

      - findById

      - save

      - updateById

      - deleteById

        

    + 实现具体细节
      - 通过路由收到请求
      - 接收请求中的数据（get，post）
        +  req.query
        + req.body
      - 调用数据操作 
      - 根据操作结果给客户发送响应

    

    ### 9.2.修改完代码自动重启

    使用第三方命令行工具:`nodemon`来帮助我们解决频繁修改代码重启服务器问题。

    `nodemon`是一个基于Nodejs开发的一个第三方命令行工具，使用的时候需要独立安装：

    ```she
    npm install --global nodemon
    ```

    安装完毕之后，使用：

    ```javascript
    node app.js
    
    # 使用 nodemon
    nodemon app.js
    ```

    只有通过 nodemon app.js 启动的服务，则它会监视你的文件变化，当文件变化的时候，自动重启服务器。

    