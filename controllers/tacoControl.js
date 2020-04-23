var express = require("express");
var router = express.Router();
// === import team model ===
var taco = require("../models/taco.js");
// === create get/post/put routes and set logic when required ===
router.get("/", function(req,res){
    taco.all(function(data){
        var hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/api/tacos", function(req,res){
    taco.create(["name","starting"],[ req.body.name, req.body.starting], function(result) {
        res.json({ id: result.insertId });
    });
});
router.put("/api/tacos/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    taco.update({ starting: req.body.starting }, condition, function(result) {
        if (result.changedRows == 0) {
            // no changed rows means the ID does not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("/api/players/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    taco.delete(condition, function (result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else { 
            res.status(200).end();
        }
    });
});

module.exports = router;