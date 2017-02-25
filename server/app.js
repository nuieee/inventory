var express     = require("express"),
    app         = express(),
    bodyParser = require("body-parser"),
    mongoose    = require("mongoose");

var port = 666;

mongoose.connect("mongodb://localhost/orgtools");

app.use(bodyParser.urlencoded({extended: true}));

var Routes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(Routes);

app.listen(port, function () {
    console.log("Server running on port " + port + "!");
});