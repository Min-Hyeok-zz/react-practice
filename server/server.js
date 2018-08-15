//settings

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
// const cors = require('cors')
const Router =  require('koa-router')
const error = require('koa-error')
const mysql = require('koa-mysql')
const logger = require('koa-logger')
const passport = require('koa-passport')

//middleware used

const app = new koa()
app
.use(bodyParser())
.use(error())
.use(logger())
.use(passport.initialize())

//router define

const router = new Router()
// router.use(function *(next){
//     this.type = 'json'
//     this.setHeader('content-type','application/json')
//     // this.headers['accept'] = 'application/json'
//     yield next
// })

//database
const db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'reactPractice',
    host: 'localhost'
})
const member = require('./core/member')
const board = require('./core/board')

router.get('/', (ctx, next) => {
    ctx.body = '메인이다 짜시가'
})

router.get('/test/:idx', (ctx, next) => {
    const { idx } = ctx.params
    const sql = db.query(`select * from member where idx=${idx}`)
    let a = db.query(sql, [idx])
    ctx.body = `${a}`
})


//server started
app.use(router.routes()).use(router.allowedMethods())
app.listen('3001', () => { console.log('3001 port') })