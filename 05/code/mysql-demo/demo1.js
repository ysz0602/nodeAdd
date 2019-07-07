var mysql      = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ysz1721871',
  database : 'users'
});
 
// 2.连接数据库
connection.connect();
 
// 3.执行数据操作
connection.query('SELECT * FROM `users`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// connection.query('INSERT INTO users VALUES(0, "admin", "123456")', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results);
// });

// 4.关闭连接
connection.end();
