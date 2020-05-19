function foo(){
    bar.apply(null,arguments)
}
function bar(){
    // console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
}
foo(1,2,3,4,5)

// console.log(parseInt(3,2));//NAN 2进制只有1和0 表示：2进制的3 变成10进制是多少
// console.log(parseInt(16,8));//3
// console.log(parseInt(3,0))//NAN

// console.log(parseInt(256,16))
let a = Symbol('1')
// console.log(typeof a)

// var x = 1;
// if(function f(){}){
//     x+=typeof f;//f没有定义 "undefined"
//     //typeof f = "undefined"

// }
// console.log(x)//1undefined





	let f = (
  	    function f(){
   	        return "1";
    	    },
   	    function g(){
    	        return 2;
   	    }
  	)();
    	let b = typeof f;
        // console.log(b)//number
        

// function isNaN(number){
//     let ret = Number(number)+"";
    
//     return ret == "NaN"?true:false;
// }
// console.log(isNaN(NaN))

//函数预编译的时候this指向window
function test(c){
    //new test的时候
    // var this = Object.create(test.prototype)
    // {
    //     __proto__:test.prototype
    // }
    var a = 123;
    function b(){

    }
}
test(1);
/**
 * AO{
    arguments:[1],
    this:window,
    c:1,
    a:undefined,
    b:function(){}

}
 * 
*/
// obj.func();//obj调用了func()方法 this指向obj






