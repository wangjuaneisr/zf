/** 
 * 工厂模式：提供创建对象的接口，封装一些公用的方法，如果实现具体的业务逻辑，可以放在子类重写父类的方法
 * 优点：弱化对象间的耦合，防止代码重复
 * 缺点：简单业务可以用，复杂的业务会导致代码维护性差，不易阅读
*/
//声明一个蛋糕店 负责做蛋糕 和 卖蛋糕
var CakeShop = function(){}

CakeShop.prototype = {
    sellCake: function(){

    },
    makeCake: function(type){
        console.log('aaa')
    }
}

//定义一个继承的方法
var Extend = function(desc, src){
    for(var property in src){
        desc[property] = src[property]//深拷贝
    }
    return desc;
}
Object.extend = function(obj){
    return Extend.apply(this,[this.obj])
}

 //声明一个水果蛋糕，从蛋糕店
var FruitCake = function(){}
Object.extend(FruitCake, CakeShop);

console.log(FruitCake.prototype)

FruitCake.prototype.makeCake = function(type){
    var cake;
    switch (type){
        case 'apple':
            cake = new AppleCake();break;
        case 'pear':
            cake = new Pear();break;
        default:
            cake = new Orange();break;
    }
    return cake;
}

var buyCake = new FruitCake();
var myCake = buyCake.sellCake('apple')
console.log(myCake)