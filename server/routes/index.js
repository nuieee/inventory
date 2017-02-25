var express = require("express"),
    router = express.Router(),
    fs = require('fs'),
    moment = require("moment"),
    configs = require("../configs.json"),
    slack = require("slack"),
    Dictionary = require("../models/dictionary");

router.get("/", function (req, res) {
    
});

router.get("*", function (req, res) {
    res.redirect("/");
});

module.exports = router;