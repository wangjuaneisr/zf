//修复bug：
//defineProperty 当对象属性不存在时无法触发

let obj = {
    name:1,
    age:{
        c:{
            c:1
        }
    }
}
function update() {
    console.log('data update');
}

let handler = {
    set(target,key,value){//reflect
        update(); 
        return Reflect.set(target,key,value);
        //  target[key] = value;
        //  return true;
    },
    get(target,key){
        // return target[key]
        if(typeof target[key] === 'object'){
            return new Proxy(target[key],handler)
        }
        return Reflect.get(target,key);
    }
}
let proxy = new Proxy(obj,handler)
proxy.name = 100;
console.log(obj);