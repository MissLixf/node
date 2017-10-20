var http = require("http");
var server = http.createServer(function(req,res){
	console.log("客户端和服务器建立通讯"+req.url);
	//设置响应信息的响应头,状态码200,返回数据类型
	res.writeHead(200,{"content-type":"text/plain"});
	//响应信息
	res.end("hey node");
});
//监听端口号,服务器的ip
server.listen(3000,"127.0.0.1");
console.log("server is running ...");

// 1.引入系统模块
// 2.创建server对象
// 监听服务器端口,在浏览器输入127.0.0.1:3000后触发server对象回调函数
// req:客户端对象
// res:服务器返回的对象