angular.module("eCommerceApp")
  .directive("headerDir", function(){
    return {
      controller: "productCtrl",
      templateUrl: "components/header/headerTmpl.html"
    };


  });
