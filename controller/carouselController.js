/*Getting The Data from json for displaying product pages*/

angular.module('carouselApp').controller('appController', function($scope,$rootScope,commonService) {

$scope.successCallback = function(data){

	$rootScope.products = data.products;

};


$scope.failureCallback = function(err){

                console.log(err);

};

commonService.getProducts().then($scope.successCallback, $scope.failureCallback);


/*Getting The Data from json to display the carousel */


$scope.successCallback = function(data){

	$rootScope.items = data.offerDetails;	

};


$scope.failureCallback = function(err){

    console.log(err);

};

commonService.getOffers().then($scope.successCallback, $scope.failureCallback);

});

