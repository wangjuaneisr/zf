/** 
 * 1、选取基准值a
 * 2、排序数组：把比a大的放后面 比a小的放前面
 * 3、递归1、2步骤
*/
let arr = [20,2,3,65,7,9,1,23,90,100];

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

/** 
 * 冒泡排序
*/
function popSort(b){
    let temp,a = b,len = a.length;
    if(a.length <= 1)return a;
    for(let i = 0 ; i < a.length; i++){
        for(let j = 0;j < len; j++){
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }else{
                temp = a[j+1];
            }
        }
        
    }
    console.log(a)
    temp = null;
    return a;
    
}
popSort(arr);
// console.log(popSort(arr));