/*Get theObject to display the products of perticular category*/
carouselApp.controller('productsController',function($scope,$rootScope,$routeParams,commonService) {
		
	var myProduct=$routeParams.company;
	$scope.productPartialDescription=[];
	$scope.products = $rootScope.products;
	for(var i=0;i<$scope.products.length;i++)
		{
			
			if($scope.products[i].company === myProduct)
			$scope.productPartialDescription.push($scope.products[i]);
		}
		
	});
  