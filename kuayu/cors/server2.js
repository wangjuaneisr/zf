let express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];

app.use(function(req,res,next){
    let origin = req.headers.origin;
    if(whiteList.includes(origin)){
        console.log("origin",origin)
        //s设置可以访问的源
        // res.setHeader('Access-Control-Allow-Origin',origin)
    }
    next();
})
app.get('/getData',function(req,res){
    res.end("我不爱你")
})
app.use(express.static(__dirname))
app.listen(4000)