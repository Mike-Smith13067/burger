var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    console.log(burger);
    burger.all(function(result) {
        var burgersObj = {
            burgers: result
        };
        console.log (burgersObj);
        res.render("index", burgersObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert("burger_name", req.body.burger_name, function(result) {
        // res.json({id:result.insertId});
        res.status(200).end();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update("devoured", true, req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
router.delete("/api/burgers/:id", function(req, res) {
    burger.delete("id", req.params.id, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;