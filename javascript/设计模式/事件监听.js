/** 
 * 
 * 在javascript中，这样的模式很常见，例如：
 * $("#div").addEventListener("click",function(event){});
 * 事件源：$("#div") 即id = div的html元素
 * 事件：click事件对应的对象
 * 事件监听器：function(event){ } 匿名函数
*/
let button = document.getElementById('button');
button.addEventListener('onclick',function(){
    console.log('clicked!!!')
},false);
