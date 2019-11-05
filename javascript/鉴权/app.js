const Koa = require('koa');
const Router = require('koa-router');
const body = require('koa-bodyparser');

let app = new Koa();
let router = new Router();

app.use(body());

router.post('/api/register',async ctx=>{
    ctx.body = '主页'；
} )

app.use(router.routes());
app.listen(3000)