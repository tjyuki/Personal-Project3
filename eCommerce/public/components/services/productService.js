angular.module("eCommerceApp")
  .service("productService", function($http){

    this.postData = function(products){
      return $http({
        method: "POST",
        url: "/api/products",
        data: products
      });
    };

    this.getData = function(){
      return $http({
        method: "GET",
        url: "/api/products"
      }).then(function(resp){
        return resp.data;
      });
    };

    this.getSingleData = function(product) {
      return $http({
        method: "GET",
        url: "/api/products/" + product._id
      });
    };

    this.updateData = function(product) {
      return $http({
        method: "PUT",
        url: "/api/products/" + product._id,
        data: product
      });
    };

    this.removeData = function(id) {
      return $http({
        method: "DELETE",
        url: "/api/products/" + product._id
      });
    };

  });
