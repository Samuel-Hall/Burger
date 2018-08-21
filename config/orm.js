var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, tableCol, colValue) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";

    console.log(queryString);

    connection.query(queryString, [tableInput, tableCol, colValue], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, tableCol, colValue, whereTableCol, whereColValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, tableCol, colValue, whereTableCol, whereColValue], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;