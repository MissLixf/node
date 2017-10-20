// var counter=function(arr){
// 	return `数组中右${arr.length}个元素`;
// }
// // console.log(counter(['a','b','c']));

// var adder=function(a,b){
// 	return `两个数的和是${a+b}`;
// }
// var pi=3.14;
// console.log(pi);
// module.exports.counter=counter;//只有使用了module.exports后其他文件才能引用
// module.exports.adder=adder;//只有使用了module.exports后其他文件才能引用
// module.exports.pi=pi;
// module.exports={
// 	counter:counter,
// 	adder:adder,
// }


var counter  = 0;     
module.exports = function(){    
    counter += 10;
    this.printNextCount = function()
    {
        console.log(counter);    
    }
    console.log('12');
}
var isEq = (exports === module.exports);
console.log(isEq);