/*Get theObject to display the products of offers in the carousel*/
carouselApp.controller('offerController',function($scope,$rootScope,$routeParams,commonService) {

	var myProduct=$routeParams.prodId;
	$scope.productDescription={};
	$scope.offerItems = $rootScope.items;
	for(var i=0;i<$scope.items.length;i++)
		{
			if($scope.offerItems[i].prodId === myProduct)
			$scope.productDescription = $scope.offerItems[i];
		}
	});
  