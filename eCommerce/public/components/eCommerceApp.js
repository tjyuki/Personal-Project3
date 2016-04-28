angular.module("eCommerceApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
      .otherwise("/home");

      $stateProvider
        .state("admin", {
          url: "/admin",
          templateUrl: "components/admin/adminTmpl.html"
        })

        .state("product", {
          url: "/product",
          templateUrl: "components/product/productTmpl.html"
        })

        .state("home", {
          url: "/home",
          templateUrl: "components/home/homeTmpl.html"
        });

  });
