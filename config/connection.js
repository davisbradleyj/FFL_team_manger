// establish MySQL connection
var mysql = require("mysql");
var connection;
// connection details
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "taqueria_db"
    });
    // confirm success or error in making conenctions
    connection.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });
};
// export for use by other files
module.exports = connection;
