/* Routing to load the partials*/
var carouselApp=angular.module("carouselApp",['ngRoute']);
carouselApp.config(['$routeProvider',function($routeProvider,$routeParams){

	$routeProvider
		.when('/',{
			templateUrl:'partials/carousel.html',
			controller:'appController'    
		})
		.when('/offerpage/:prodId',{	
			templateUrl:'partials/offerpage.html',
			controller:'offerController'
		})
		.when('/productsPage/:product',{	
			templateUrl:'partials/productsPage.html',
			controller:'productsPageController'
		})
		.when('/products/:company',{	
			templateUrl:'partials/products.html',
			controller:'productsController'
		})
		.when('/categoryPage/:category',{	
			templateUrl:'partials/categoryPage.html',
			controller:'categoryPageController'
		});
		
}]);
