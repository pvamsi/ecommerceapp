/*Get the objects from json to display the category page*/

carouselApp.controller('categoryPageController',function($scope,$rootScope,$routeParams,commonService) {

	var myProduct=$routeParams.category;

	$scope.categoryDescription=[];
	$scope.categoryItems = $rootScope.products;

	for(var i=0;i<$scope.products.length;i++)
		{
			
			if($scope.categoryItems[i].category === myProduct)
			$scope.categoryDescription.push($scope.categoryItems[i]);
		}
		
	$scope.save = function(){
	  $scope.albumNameArray = [];
	  alert($scope.albumNameArray);
	  angular.forEach($scope.albums, function(item){
	  	
	    if (!!item.selected) $scope.albumNameArray.push(item.company);
	  })
	}


	});
  