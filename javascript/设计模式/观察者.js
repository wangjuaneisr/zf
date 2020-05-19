/**观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，
 * 所有依赖它的对象 Observer 都会得到通知。
*/

//优势：目标者与观察者，功能耦合度降低，专注自身功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态。

//缺点：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如 “筛选通知”，“指定主题事件通知” 。

//目标者类
class Subject{
    constructor(){
        this.observers = [];
    }

    //添加目标
    addObserver(observer){
        this.observers.push(observer);
    }

    //删除
    removeObserver(observer){
        let idx = this.observers.findIndex(item=>item === observer);
        idx > -1 &&
        this.observers.splice(idx,1);
    }

    //通知
    notify(){
        for(let observer of this.observers){
            observer.update();
        }
    }
}

//观察者
class Observer{
    constructor(name){
        this.name = name;//目标对象key值
    }
    update(){//目标对象更新时触发的回调
        console.log(`我更新了，我是：${this.name}`);
    }
}

let s = new Subject();
// let s = new Object();
// s._proto_ = Subject.prototype;
// subject.call(s);

let o = new Observer('前端开发');
let o1 = new Observer('前端开发1');


s.addObserver(o);//像目标类 添加观察者
s.addObserver(o1);//像目标类 添加观察者

s.notify();//向所有观察者通知更新！！！！！