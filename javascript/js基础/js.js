/** 
 * 计算2的n次幂 n可输入 n为自然数
*/
function caln(n){
    if(n<1)return false;
    return (function(){
        let m=1;
        for(let i = 1;i < n+1; i ++){
            m *= 2;
        }
        return m;
    })();
}
// console.log(caln(10));

/** 
 * 输入456 输出654
*/
function reverse(number){



}

// reverse(456);

/** 
 * 斐波那契数列（Fibonacci sequence
*/
function Fibonacci(number){

    if(number < 3){
        return 1;
    }else{
        return Fibonacci(number-1) + Fibonacci(number-2);
    }

}
// console.log(Fibonacci(20));

function Fibonacci2(number){
    let fir = 1, sec = 1,thi;
    if(number > 2){
        for(let i = 0; i < number-2; i++){
            thi = fir + sec;
            fir = sec;
            sec = thi;
        }
        return thi;
    }else{
        return 1;
    }

    

    
}

// console.log(fFibonacci2(10));

/** 
 * n 内的质数
*/
function zhishu(n){
    let count = 0;
    for(let i = 1; i < n; i ++){

        for(var j = 1; j <= Math.floor(Math.sqrt(n)); j ++){
    
            if( i % j == 0){
                count ++ ;
            }
        }
        // console.log(i)
        if(i!=1 && count == 1){
            // console.log('zhisu',i)
        }

        count = 0;
    
    }
}
zhishu(5);



function sum(a,b){
    let sum = 0;
        for(let i = 0;i < arguments.length;i++){
            sum += arguments[i];
        }
        return sum;
}

// console.log(sum(1,2,3,4,5,6,7,8,9,10))
//阶乘
function mul(n){
    if(n==1) return 1;
    return n * mul(n-1)
}
// console.log(mul(5));

//斐波那契数列
function fbnq(n){
    if(n == 1 || n == 2) return 1;
    return fbnq(n-1) + fbnq(n-2)
}
// console.log(fbnq(3));

function nm(arr,sum){
    
}
nm([1,2,3,4,5,6,7,8,9],13)

