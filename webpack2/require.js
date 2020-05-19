let factories = {};
/** 
 * moduleName,
 * dependencies,
 * factory */
function define(moduleName,dependencies,factory){
    factory.dependencies = dependencies;//将依赖记到factory上
    factories[moduleName] = factory;
}
function require(mods,callback){
   let result =  mods.map((mod)=>{
        let factory = factories[mod];
        let exports;
        let dependencies = factory.dependencies;

        //递归
        require(dependencies,()=>{
            factory.apply(null,arguments)
        })

        exports = factory();
        return exports;
    })
    callback.apply(null,result)
}
define('name',[], function() {
    return 'wj';
    
});

define('age',['name'], function(name) {
    return name + 9
    
});

require(['name','age'],function(age){
    console.log(age)
})