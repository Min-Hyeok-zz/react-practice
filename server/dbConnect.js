const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    database: 'react',
    user: 'root',
    password: ''
})
db.connect()