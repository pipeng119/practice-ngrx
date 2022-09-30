let express = require('express');
let app = express();

class HttpClientBody {
  constructor(message, success, data) {
    this.message = message;
    this.success = success;
    this.data = data;
  }
}

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
});

let data = [{
  name: '唐伯虎',
  age: 35,
}];

let api = '/api';
app.get(`${api}/user`, (req, res) => {
  res.send(data);
});

app.get(`${api}/todoList`, (req, res) => {
  res.send(new HttpClientBody('请求成功', true, data));
});

//配置服务端口
var server = app.listen(9527, () => {
  console.log(`9527 port is listening~~~~~~~`);
});
