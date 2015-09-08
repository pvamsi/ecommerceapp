/*to display data on page*/

angular.module('carouselApp').controller('appController', function($scope,$rootScope,commonService) {

/*Getting The Data from json to display the carousel */


$scope.successCallback = function(response){

	$rootScope.items = response.data[0].offerDetails;
		//console.log(response.data[0].offerDetails);
};


$scope.failureCallback = function(err){

    console.log(err);

};

commonService.getOffers().then($scope.successCallback, $scope.failureCallback);

/*Getting The Data from json for displaying product pages*/

$scope.successCallback = function(response){

	$rootScope.products = response.data[0].products;
	//console.log(response.data[0].products);


};


$scope.failureCallback = function(err){

                console.log(err);

};

commonService.getProducts().then($scope.successCallback, $scope.failureCallback);




});

