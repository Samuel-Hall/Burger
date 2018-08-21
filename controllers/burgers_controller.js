var express = require("express");
var burger = require("../models/burger.js");

var express = require("express");

var router = express.Router();

// HTML and API routes
router.get("/", function(req, res) {
  // var hbsObject = {};
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    // res.render("index");
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("Burger name is: " + req.body.burger_name);
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // res.json(result);
  });
  res.redirect("/");
  
});

router.put("/api/devour", function(req, res) {
  var id = req.body.id;

  burger.update(true, "id", id,  function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;