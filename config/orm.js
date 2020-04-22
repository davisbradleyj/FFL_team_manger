var connection = require("../config/connection.js");

function printQuestionMark(num) {
    var arr = [];
    for (Var i=0;i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for  (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value "'";
            }
            arr.push(key +"="+ value);
        }
    }
    return arr.toString();
}
