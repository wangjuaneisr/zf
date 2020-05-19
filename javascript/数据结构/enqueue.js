class Queue{
    constructor(){
        this.queue = [];
        this.head = null;
        this.length = 0;
    }

}

function theLastedLength(string){
    if(string.length == 0)return 0;
    if(string.length == 1)return string.length;
    let arr = string.split(' ');
    return arr[arr.length-1].length;
}
console.log(theLastedLength('XSUWHQ'))