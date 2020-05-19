//set map 去重

//set 放的是一个个的值 map放的是键值对
//Symbol.Identifier for of foreach

let set = new Set([1,2,3,1,2,3]);
// console.log(set)
set.add(5);
set.forEach(element=>{
    // console.log(element)
});
// console.log(set.entries());
// Object.entries()
// Object.keys()
// Object.values()

// console.log(set.values());

let arr1 = [1,2,3,4,1,2,3];
let arr2 = [4,5,6,7,1];

function union(arr1,arr2) {
    let s = new Set([...arr1,...arr2]);
    return [...s];
}
function intersection(arr1,arr2) {
    let s1 = new Set([...arr1]);
    let s2 = new Set([...arr2]);

    return [...s1].filter(item=>{//filter 保留返回真的项目
        return s2.has(item);
    })
}
function diff(arr1,arr2) {
    let s1 = new Set([...arr1]);
    let s2 = new Set([...arr2]);

    return [...s2].filter(item=>{//filter 保留返回真的项目
        return !s1.has(item);
    })
}
// console.log(union(arr1,arr2));
// console.log(intersection(arr1,arr2));
// console.log(diff(arr1,arr2));

let map = new Map(['a',1],['a',100],[b,2]);
let obj = {name:1};
map.set(obj,1);
obj = null;
