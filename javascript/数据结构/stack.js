/** 
 * @param {string} s
 * @return {boolean}
 * 利用栈 解决符号配对的问题
 * Example 1:Input: "()" Output: true
 * Example 2:Input: "()[]{}" output: true
 * Example 3:Input: "(]" Output: false
 * Example 4:Input: "([)]" Output: false
 * Example 5:Input: "{[]}"Output: true
*/
function matchCouple(s){
    let stack = [],
        map = {
            '(':-1,
            ')':1,
            '{':-2,
            '}':2,
            '[':-2,
            ']':2
        };
        
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] < 0){
            stack.push(s[i]);
        }else{//右边出栈
            if(map[stack.pop()] != s[i])return false;
        }
        if(stack.length > 0)return false;
        return true;
    }
}