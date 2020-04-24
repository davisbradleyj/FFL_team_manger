var express = require("express");
var router = express.Router();
// === import team model ===
var taco = require("../models/taco.js");
// === create get/post/put routes and set logic when required ===

// WORKING
router.get("/", function(req,res){
    taco.all(function(data){
        var hbsObject = {
            tacos: data
        };
        // console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/tacos", function(req,res){
    console.log(req.body)
    taco.create(
        ["filling","cost","ordered",],
        [req.body.filling,parseFloat(req.body.cost),req.body.ordered], 
        function(result) {
        res.json({ id: result.insertId });
        console.log("inside post test")
    });
});

router.put("/api/tacos/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    taco.update({ 
        ordered: req.body.ordered }, 
        condition, function(result) {
        if (result.changedRows === 0) {
            // no changed rows means the ID does not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("/api/tacos/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    taco.delete(condition, function (result){
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else { 
            res.status(200).end();
        }
    });
});

module.exports = router;