const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

// 使用 body-parser 中间件解析 POST 请求的表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',    // 数据库主机
  user: 'root',         // 数据库用户
  password: 'xiaomty',  // 数据库密码
  database: 'youngowl' // 你创建的数据库名
});

// 连接到数据库
connection.connect(err => {
  if (err) {
    console.error('数据库连接失败: ' + err.stack);
    return;
  }
  console.log('数据库连接成功，连接ID: ' + connection.threadId);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 查询数据库中的用户
  connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (error, results) => {
      if (error) {
        console.error('数据库查询失败: ' + error.stack);
        return res.send('发生错误，请重试.');
      }

      if (results.length > 0) {
        res.send('登录成功！');
      } else {
        res.send('用户名或密码错误，请重试。');
      }
    }
  );
});

// 启动服务器
app.listen(3000, () => {
  console.log('服务器在 http://localhost:3000 上运行');
});
