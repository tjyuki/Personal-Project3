var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var Product = require("./backend/Product");
var serverCtrl = require("./backend/serverCtrl");
// var mongojs = require("mongojs");


var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var port = 3000;

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/ecommerce");
var Schema = mongoose.Schema;


//Add Products
app.post("/api/products", serverCtrl.postProducts);
//Find a Product or Products
app.get("/api/products", serverCtrl.getProducts);
app.get("/api/products/:id", serverCtrl.getSingleProduct);

//Change a Product
app.put("/api/products/:id", serverCtrl.updateProduct);

//Delete a Product
app.delete("/api/products", serverCtrl.removeProduct);



app.listen(port, function(){
  console.log("pika", port);
});
