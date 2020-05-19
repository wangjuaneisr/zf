/**
 * 基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，
 * 被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象
 * 流行库的应用
 * jQuery 的 on 和 trigger，$.callback();
 * Vue 的双向数据绑定；
 * Vue 的父子组件通信 $on/$emit
 */

//事件中心
class  pubSub{
    constructor(){
        this.list = {};
    }
    //订阅
    subscribe(key,fn){
        if(!this.list[key]){
            this.list[key] = [];
        }
        this.list[key].push(fn);
    }
    //发布
    notify(key,...arg){
        for(let fn of this.list[key]){
            fn.call(this,...arg);
        }
    }
    //取消订阅
    unSubscribe(key,fn){
        let fnList = this.list[key];
        if(!fnList) return false;

        if(!fn){
            // 不传入指定取消的订阅方法，则清空所有key下的订阅
            fnList && (fnList.length = 0);
        }else{
            fnList.forEach((item,index) => {
                item === fn && fnList.splice(index,1);
            })
        }
    }

}

//订阅 
let s = new pubSub();
let s1 = new pubSub();
s.subscribe('onwork',time => {
    console.log(`上班了${time}`)
})
s1.subscribe('offwork',time => {
    console.log(`下班了${time}`)
})
// pubSub.subscribe(time,off);
//发布那个就 发布那个消息
s.notify('onwork','18:00:00');