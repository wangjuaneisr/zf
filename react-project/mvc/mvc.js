/**
 * 前端MVC基本实现：
 *  M数据模型
 *  V视图模型
 *  C控制器 用户调用的功能
*/
let box = document.getElementById('box');
let btn = document.getElementById('btn');
let M = V = C = {};

//数据模型Model
M.user = [
    {name:"zhangfei",age:18},
    {name:"guanyu",age:20},
    {name:"leubei",age:22}
]
//视图层,负责渲染数据
V.render = function(data){
    let html = '';
    data.forEach((v,i) => {
        html += `<h1>姓名：${v.name}</h1>`;//ES6反引号,模板语法
    })
    box.innerHTML = html;
}

//控制器
C.show = function(){
    V.render(M.user);
}

//
btn.onclick = function(){
    C.show();
}