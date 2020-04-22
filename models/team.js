var orm = require("../config/orm.js");

var team = {
    all: function(cb) {
        orm.all("players", function(res) {
            cb(res);
        })
    },
    create: function (cols,vals,cb) {
        orm.create("players",cols,vals,function(res){
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.update("players", objColsVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("players", condition, function(res){
            cb(res);
        });
    }
};

module.export = team;