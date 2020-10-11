const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'hans',
    password: '1234',
    database: 'olivia20_webtes'
});

// connect to database 
conn.connect((err) =>{
    if(err) throw err;
    console.log('Connected to database');
});

module.exports = conn;