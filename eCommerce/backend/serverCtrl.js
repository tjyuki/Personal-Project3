var Product = require("./Product")

module.exports = {
  postProducts: function(req, res, next){
    var newProduct = new Product(req.body);
    newProduct.save(function(err, resp){
      if(err){
        res.status(500).json(err);
      } else {
        res.send(resp);
      }
  });
},

getProducts: function(req, res, next){
  Product.find({}, function(err, resp){
    if(err){
      res.status(500).json(err);
    } else{
      res.send(resp);
    }
  });
},

getSingleProduct: function(req, res, next){
  Product.findbyId(req.params.id, function(err, resp){
    if(err){
      res.status(500).json(err);
    } else{
      res.send(resp);
    }
  });
},

updateProduct: function(req, res, next){
  Product.findbyIdandUpdate(req.params.id, req.body, function(err, resp){
    if(err){
      res.status(500).json(err);
    } else{
      res.send(resp);
    }
  });
},

removeProduct: function(req, res, next){
  Product.findbyIdandRemove(req.params.id, function(err, resp){
    if(err){
      res.status(500).json(err);
    } else{
      res.send(resp);
    }

  });
}



};
