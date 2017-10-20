var fs=require("fs");
var myReadStream=fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);

// data不能改,必须是data
myReadStream.on("data",function(chunk){
	console.log("==========================接收chunk=======================")
	console.log(chunk);
})