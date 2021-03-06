var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, colName, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, colName, value], function (err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, updateCol, updateVal, identifyingCol, identifyingVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, updateCol, updateVal, identifyingCol, identifyingVal], function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, condCol, condVal, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, condCol, condVal], function(err, result) {
            if (err) throw err;
            cb(result);
        }); 
    }
};

module.exports = orm;