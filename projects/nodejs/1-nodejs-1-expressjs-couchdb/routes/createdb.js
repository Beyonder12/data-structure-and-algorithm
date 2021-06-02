const nano = require("nano")

exports.create = function(req, res) {
  nano.db.create(req.body.dbname, function() {
    if(err) {
      res.send("Error creating the Database");
      console.log(err)
      return;
    }
    res.send("Database created successfully")
  })
}
