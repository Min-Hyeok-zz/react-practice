//settings

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
// const cors = require('cors')
const Router =  require('koa-router')
const error = require('koa-error')
const mysql = require('koa-mysql')

//middleware used

const app = new koa()
app.use(bodyParser())
app.use(error())

//router define

const router = new Router()
router.use(function *(next){
    this.type = 'json'
    this.setHeader('content-type','application/json')
    yield next
})
const member = require('./core/member')
const board = require('./core/board')

router.get('/', (req,res) => {
    res.send('asdasoifujasifguh')
})

//database
const db = mysql.createPool({
    user: 'root',
    password: '',
    database: 'reactPractice',
    host: 'localhost'
})

//server started
app.use(router.routes())
app.listen('3001', () => { console.log('3001 port') })