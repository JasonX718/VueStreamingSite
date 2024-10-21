let mysql = require('mysql')

let db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '20010718',
    database: 'myvideodata'
})

module.exports = db
