const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'',
    database: 'ascegym',
});

db.connect((err) => {
    if(err){
        console.error("Mysql connection error: ", err);
        return;
    }
    console.log("Mysql is connected");
});

module.exports = db;