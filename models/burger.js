var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insert: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(result) {
            cb(result);
        });
    },
    update: function(col, val, id, cb) {
        orm.updateOne("burgers", col, val, "id", id, function (result) {
            cb(result);
        });
    },
    delete: function(condCol, condVal, cb) {
        orm.deleteOne("burgers", condCol, condVal, function (result) {
            cb(result);
        });
    }
}

module.exports = burger;