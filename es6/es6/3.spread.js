//结构赋值 
//既能声明 又能赋值
// let [a,...b] = [1,2,3];
// let {b:c} = {a:1,b:2} //b重命名为a
// console.log(a);
// console.log(b);

//spread 拓展运算符 展开运算符
//深拷贝 （拷贝后与拷贝前无关）
// 浅拷贝 （有关） 引用原来的命名空间

// let obj = {name:1,function(){},n:undefined,d:new RegExp()};
// let arr = [obj,1,2,3];
// let newArr = arr.slice(0);//浅拷贝
// let eArr = {...obj};//浅拷贝


//如何实现深拷贝
// JSON.parse(JSON.stringify(obj)) //不能带函数

function deepClone(obj,hash = new WeakMap) {
    //先把特殊情况过滤 null undefined date reg

    if(obj == null ) return obj;
    if(typeof obj !=='object' ) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);

    // 判断是数组还是对象
    //判断类型 typeof instanceof Object.getPrototypeOf constructor
    if(hash.has(obj)){//解决循环引用的问题
        return hash.get(obj);
    }
    let ins = new obj.constructor;//new 的实现原理 
    hash.set(obj,ins)
    //把实例上的属性拷贝到对象身上 把原型链指向到原型对象上
    for(let key in obj){//递归拷贝
        if(obj.hasOwnProperty(key)){//不拷贝原型链伤的属性
            ins[key] = deepClone(obj[key],hash);
        }
    }
    return  ins;
}
let obj = {};
obj.a = obj;
let a = {name:1,age:{name:2}};

//重名
console.log(deepClone(obj))


