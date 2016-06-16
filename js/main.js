/**
 * Main PhytoHealth AngularJs Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Route configuration
 */
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      // Home
      .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

      // About
      .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })

      // Database
      .when("/database", { templateUrl: "partials/database.html", controller: "PageCtrl" })

      // Phyto
      .when("/phyto", { templateUrl: "partials/phyto.html", controller: "PageCtrl" })

      // Flav
      .when("/flav", { templateUrl: "partials/flav.html", controller: "PageCtrl" })

      // Iso
      .when("/iso", { templateUrl: "partials/iso.html", controller: "PageCtrl" })

      // Pro
      .when("/pro", { templateUrl: "partials/pro.html", controller: "PageCtrl" })

      // Blog
      .when("/blog", { templateUrl: "partials/blog.html", controller: "BlogCtrl" })
      .when("/blog/post", { templateUrl: "partials/blog_item.html", controller: "BlogCtrl" })

      // else 404
      .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
}]);

/**
 * Controls the blog where new articles, recipes, research, etc are posted
 */
app.controller('BlogCtrl', function( /* $scope, $location, $http */ ) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other pages of the app
 */
app.controller('PageCtrl', function( /* $scope, $location, $http */ ) {
  console.log("Page Controller reporting for duty.");
});


