var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(col, value, cb) {
      orm.insertOne("burgers", col, value, function(res) {
        cb(res);
      });
    },
    update: function(devouredBool, col, val, cb) {
      orm.updateOne("burgers", "devoured", devouredBool, col, val, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;