

let fs = require('fs')

//common.js  CMD
function req(moduleName){
    let content = fs.readFileSync(moduleName,'utf8');
    let fn = new Function('exports','module','require','__dirname','__filename',content+'\n return module.exports');

    let module = {
        exports:{}
    }
    return fn(module.exports,module,req,__dirname,__filename);
}

let str = require('./a.js');
console.log(str)

//require.js AMD
