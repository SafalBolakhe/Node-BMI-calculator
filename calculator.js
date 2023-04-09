const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname+"/index.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight / Math.pow(height, 2);
  res.send("This In your BMI " + result.toFixed(2) +" kg/m<sup>2</sup>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.....");
});
