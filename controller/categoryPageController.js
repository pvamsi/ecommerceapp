/*Get the objects from json to display the category page*/

carouselApp.controller('categoryPageController',function($scope,$rootScope,$routeParams,commonService,$filter) {

	 
	var myProduct=$routeParams.category;

	$scope.categoryDescription=[];
	$scope.categorylist=[];
	$scope.categoryItems = $rootScope.products;

	for(var i=0;i<$scope.products.length;i++)
		{
			
			if($scope.categoryItems[i].category === myProduct)
			$scope.categoryDescription.push($scope.categoryItems[i]);

			if($scope.categoryItems[i].key === "true" && $scope.categoryItems[i].category === myProduct )
			$scope.categorylist.push($scope.categoryItems[i]);

		}


	});


carouselApp.controller('searchController',function($scope,$filter,searchFactory) {
	$scope.search = searchFactory;
	});



carouselApp.factory('searchFactory', function(){
	return { query: "" }
console.log($scope.search);
});


carouselApp.filter('filterByCategory', function() {
    return function(categoryDescription, categorylist) {
        console.log(categoryDescription, categorylist);
    
        var ret =[];
        for (var i in categoryDescription){
            var match = false;
            for (var j in categorylist){
               
                if (categorylist[j].selected && categorylist[j].company == categoryDescription[i].company){
                   ret.push(categoryDescription[i]);   
                    console.log(ret)
                }
            }
        }
        if (ret.length > 0){
            return ret;
        } else {
            return categoryDescription;
        }
    };
  })






		/*$scope.brand=[];

		$scope.getBrand = function(item){
			//$scope.brand.push(item.company);
			//console.log($scope.brand);
			
			
            var match = false;
			for(var j in $scope.categoryDescription){
					
				if ($scope.categoryDescription[j].selected && $scope.categoryDescription[j].company === item.company){
					console.log("hi");
			                   $scope.brand.push(item);  
			                   console.log($scope.categoryDescription[j].company);
			}
		}
	
	if ($scope.brand.length > 0){
            return $scope.brand;
        } else {
            return $scope.categoryDescription;
        }
	};

		});	
			/*$scope.i in $scope.categoryDescription[0];
			console.log($scope.i);
			for(var i=0;i<$scope.categoryDescription.length;i++)
				{
					
			
					if ($scope.categoryDescription[i].company == item.company){
			                   $scope.brand.push(item);   
			                }
				}
			       /* var ret =[];
			        for (var i in item){
			            var match = false;
			            for (var j in $scope.categoryDescription){
			            	console.log(j);
			                if ($scope.categoryDescription[j].selected && $scope.categoryDescription[j].company == item[i].company){
			                   ret.push(item[i]);   
			                }
			            }
			        }
			        if (ret.length > 0){
			            return ret;
			        } else {
		            return item;
			        }
			  
			/*$scope.brand=item.company;
			console.log(item.company);*/
		

	/*	
	$scope.save = function(){
	  $scope.albumNameArray = [];
	  alert($scope.albumNameArray);
	  angular.forEach($scope.albums, function(item){
	  	
	    if (!!item.selected) $scope.albumNameArray.push(item.company);
	  })
	}*/


	
/*carouselApp.filter('filterByCategory', function() {
  	alert("hi");
    return function(categoryDescription, categoryDescription) {
        console.log(categoryDescription, categoryDescription);
        var ret =[];
        for (var i in categoryDescription){
            var match = false;
            for (var j in categoryDescription){
                if (categoryDescription[j].selected && categoryDescription[j].company == categoryDescription[i].company){
                   ret.push(categoryDescription[i]);   
                }
            }
        }
        if (ret.length > 0){
            return ret;
        } else {
            return categoryDescription;
        }
    };
  })*/