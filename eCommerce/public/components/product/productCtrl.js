angular.module("eCommerceApp")
  .controller("productCtrl", function($scope, productService){

    $scope.showProducts = function() {
      productService.getData().then(function(resp){
        $scope.productList = resp;
      });
    };

    $scope.showProducts();
    $scope.newProduct = {};
    $scope.update = {};
    $scope.shoppingCart = [];

    $scope.postProducts = function(product) {
      productService.postData().then(function(){
        $scope.showProducts();
        $scope.newProduct = {};
      });
    };

    $scope.updateProduct = function(product) {
      productService.updateData().then(function(){
        $scope.showProducts();
        $scope.update = {};
      });
    };

    $scope.removeProduct = function(product) {
      productService.removeData(product).then(function(){
        $scope.showProducts();
        $scope.existingProduct = {};
      });
    };

//ADMIN
$scope.addNewProduct = function(newProduct) {
  productService.postData(newProduct).then(function(){
    $scope.showProducts();
    $scope.newProduct = {};
  });
};

//CONSUMER
$scope.addToCart = function(product) {
  $scope.shoppingCart.push(product);
};




  });
