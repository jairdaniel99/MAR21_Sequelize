// import express
const express = require("express");

// create an instance of express server
const app = express();

app.get("/welcome", function (req, res) {
  res.send("Welcome to express server!");
});

// listen for requests on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
