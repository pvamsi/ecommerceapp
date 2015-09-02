/*Get the objects from json to display the category page*/
carouselApp.controller('productsPageController',function($scope,$rootScope,$routeParams,commonService) {
		
	var myProduct=$routeParams.product;
	$scope.categoryDescription=[];
	$scope.categoryItems = $rootScope.products;
	for(var i=0;i<$scope.products.length;i++)
		{
			
			if($scope.categoryItems[i].product === myProduct)
			$scope.categoryDescription.push($scope.categoryItems[i]);
		}
		
	});
  