const Koa = require('koa'); //call koa
const Router = require('koa-router');   //call koa router
const static = require('koa-static');   //call koa static router
const path = require('path');   //call path
const fs = require('fs');   //call fs
const app = new Koa();
const router = new Router();
const Staticpath = static(path.join(`${__dirname}/src/web`));

//main page
router.get('/', async(ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/index.html');
});

//activity page
router.get("/activity.html", async(ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/activity.html');
});

//concept page
router.get("/concept.html", async(ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/concept.html');
});

//culture page
router.get("/culture.html", async(ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/culture.html');
});

//fund page
router.get("/fund.html", async(ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/fund.html');
});

//unfound page
router.get("", async(ctx, next) => {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = fs.createReadStream('./src/web/html/index.html');
});

app.use(Staticpath);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000, '127.0.0.1', () => {
    console.log(`http://${'127.0.0.1'}:${5000}`);
});



//  async           => https://www.cnblogs.com/tugenhua0707/p/10188324.html
//  static          => https://github.com/koajs/static
//  route, koa, fs  => https://noob.tw/koa/


/*

need download : 

npm install --save koa
npm install --save koa-router
npm install koa-static
npm install --save koa-morgan

*/