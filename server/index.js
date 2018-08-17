const express = require('express')
const session = require('express-session')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'upload/' })
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded())

const board = require('./core/board')
const member = require('./core/member')

app.get('/', member.test)

app.listen('4000', () => { console.log('4000 port') })