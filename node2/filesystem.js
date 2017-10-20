var fs=require("fs");
// 同步读取和写入
var read=fs.readFileSync("readMe.txt","utf8");
// console.log(read);
// fs.writeFileSync("writeMe.txt","hello"+read);//写入时会清空后写入

// 异步读取和写入
fs.readFile("readMe.txt","utf8",function(err,data){
	if(err) throw err;
	console.log(data);
});
// fs.writeFile("writeMe.txt","hello word!",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// })

//异步读取文件并将读取的内容写入文件
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data,function(err,data1){
// 		if(err) throw err;
// 		console.log(data1);
// 	})
// });
// fs.unlink("writeMe.txt",function(err,data){
// 	if(err) throw err;
// });

fs.mkdir("stuff",function(err){
	if(err) throw err;
});
fs.rmdir("stuff");
