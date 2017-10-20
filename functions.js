// 函数表达式



//函数表达式:右左法则
var sayhi=function(){
	console.log("hello word");
}

//正常函数:在调用时才会写入内存
function sayhi(){
	console.log('hello');
}
//sayhi();//hello word;函数表达式比函数执行快


var sayhi2=function(){
	console.log('hello');
}
function callfunction(fun){
	fun();
}
callfunction(sayhi2);//hello

// 函数声明 > 变量声明

// 　　4)变量和赋值语句一起书写，在js引擎解析时，会将其拆成声明和赋值2部分，声明置顶，赋值保留在原来位置

// 　　5)声明过的变量不会重复声明

// 　　同一个标识符的情况下，变量声明与函数声明都会提升；函数声明会覆盖变量声明，但不会覆盖变量赋值，即：如果声明变量的同时初始化或赋值，

// 　　那么变量优先级高于函数。