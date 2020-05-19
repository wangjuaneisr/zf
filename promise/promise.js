// let  myPromise = new Promise(function(resolve,reject){
//     if(!hasReturnData){//
//         resolve();
//     }else{
//         reject();
//     }
// });
async function async1() {
    console.log("async1 start");//2
    await  async2();
    console.log("async1 end");//6

}
async  function async2() {
    console.log( 'async2');//5 --> 3
}
console.log("script start");//1

setTimeout(function () {
    console.log("settimeout");//8
},0);

async1();

new Promise(function (resolve) {
    console.log("promise1");//3 --> 4 
    resolve();
}).then(function () {
    console.log("promise2");//7
});

console.log('script end');//4 --> 5


let brr = [2,4,3,1,9,7,8,10,0];
quickSort(brr);

function quickSort(a){
    if(a.length <= 1){
        return a;
    }

    let lArr = [],rArr=[];

    let midOne = a.splice(Math.floor(a.length/2),1)[0];

    for (var i = 0; i < a.length; i++) {
        if (a[i] < midOne) {
            lArr.push(a[i]);
        } else {
            rArr.push(a[i]);
        }
      }

    //返回值为:lArr + midOne + rArr
    return quickSort(lArr).concat(midOne,quickSort(rArr))
    
} 