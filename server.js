// ==== set dependencies ====
var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// === parse application body as JSON ===
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// === handlebars function ===
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// == import routes and permit server access ==
var routes = require("./controllers/tacoControl.js");
app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // === log when our server has started ===
  console.log("Server listening on: http://localhost:" + PORT);
});
