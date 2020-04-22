var express = require("express");
var router = express.Router();
// === import team model ===
var team = require("../models/team.js");
// === create get/post/put routes and set logic when required ===
router.get("/", function(req,res){
    team.all(function(data){
        var hbsObject = {
            players: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/api/players", function(req,res){
    team.create(["name","starting"],[ req.body.name, req.body.starting], function(result) {
        res.json({ id: result.insertId });
    });
});
router.put("/api/players/:id", function(req,res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({ starting: req.body.starting }, condition, function(result) {
        if (result.changedRows == 0) {
            // no changed rows means the ID does not exist
            return res.status(404).end();
        } else {
            res.status(200).end(;
        }
    });
});
router.delete("/api/players/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    team.delete(condition, function (result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else { 
            res.status(200).end();
        }
    });
});

module.exports = router;