// let c = 3;
// let obj = {
//     a:1,
//     b:2
// }
//es5 属性访问器 Object.defineProperty

// let obj = {
//     get a(){
//         return c === 3 ?3:0;
//     },
//     set a(value){
//         c = value;
//     }
// }

// let o = {name:1};//再取值 或者设置值的时候可以吊影对应的方法
// let val = '';
// Object.defineProperty(o,'name',{
//     enumerable:true,
//     configurable:true,
//     // writable:true,//对应set的特殊情况
//     // value:1,//对应get的特殊情况
//     get (){
//         return val;
//     },
//     set(value){
//         val = value;
//     }
// });
// console.log(o)


//实现对象的深度监控
let obj = {
    name:1
}
function update() {
    console.log('data uodate');
}
function obeserver(obj) {
    if (typeof obj === 'object' && obj != null) {
        for (let key in obj) {
            defineRactive(obj,key,obj[key]);
        }
        
    }
}
function defineRactive(obj,key,value) {
    obeserver();//多维对象
    Object.defineProperty(obj,key,{
        get(){
            return value;
        },
        set(val){
            update();
            value = val;
        }
    })
}
obeserver(obj);
obj.name = 1000;