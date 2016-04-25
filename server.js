var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongojs = require("mongojs");

var app = express();
app.use(bodyParser.json());

var db = mongojs("ecommerce");
var products = db.collection("products");

var port = 3000;

//Find a Product or Products
app.get("/api/products", function(req, res, next){
  var query = req.query;
  products.find({}, function(err, resp){
    if(err) {
      return res.status(500).json(err);
    } else {
      return res.json(resp);
    }
  });
});

app.get("/api/products/:id", function(req, res, next){
  products.find({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, resp){
        if(err) {
          return res.status(500).json(err);
      } else {
          return res.json(resp);
      }
  });
  // var objectId = {
  //   _id: req.params.id
  // };
  // products.findOne(objectId, function(err, resp, products){
  //   if(err) {
  //     return res.status(500).json(err);
  //   } else {
  //     return res.json(resp);
  //   }
  // });
});


//Add Products
app.post("/api/products", function(req, res, next){
  products.save(req.body, function(err, resp){
    if(err){
      return res.status(500).json(err);
    } else {
      return res.json(resp);
    }
  });
});


//Change a Product
app.put("/api/products/:id", function(req, res, next){
  if(!req.params.id){
    return res.status(400).send("Object ID needed");
  }
  var query = {
    _id: mongojs.ObjectId(req.params.id)
  };
  products.update(req.body, query, products, function(err, resp){
    if(err){
      return res.status(500).json(err);
    } else {
        return res.json(resp);
    }
  });
});


//Delete a Product
app.delete("/api/products/:id", function(req, res, next){
  if(!req.params.id){
    return res.status(400).send("Object ID needed");
  }
  var query = {
    _id: mongojs.ObjectId(req.params.id)
  };
  products.remove(query, function(err, resp){
    if(err) {
      return res.status(500).json(err);
    } else {
      return res.json(resp);
    }
  });
});


app.listen(port, function(){
  console.log("pika", port);
});
