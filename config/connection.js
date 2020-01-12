var mysql = require ("mysql");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("connection error: " + err);
        return;
    }else {
        console.log("Connected as id " + connection);
    }
});

module.exports = connection;