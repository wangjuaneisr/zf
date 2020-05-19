// string number boolean null undefined Symbol
//Symbol 独一无二 永远不相等

let s1 = Symbol('wj');//Symbol的标识 一般放number string
let s2 = Symbol('wj');
// console.log(s1 === s2);//false 

//类中可以放私有属性

let obj = { // es6 
    [s1]:1
}//声明的symbol属性不可以枚举的
// console.log(obj[s1])
//只能通过[]取值 ,如： for in 无法取值
//console.log(Object.getOwnPropertySymbols(obj))

let s5 = Symbol.for('wj');
let s6 = Symbol.for('wj');
// console.log(Symbol.keyFor(s5))

// Symbol内置对象  Symbol.iterator 实现对象的遍历
// 元编程 可以去对原生js的方法操作进行修改 改写原生方法
// let instance = {
//     [Symbol.hasInstance](value){
//         return 'a' in value
//     }
// };
// console.log({a:1} instanceof instance);



