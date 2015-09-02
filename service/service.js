
/* getting the json data*/
(function(){
	'use strict';

	angular.module('carouselApp').service('commonService', function($http, $q) {
		var self = this;
/* getting the json data from images.json*/
		self.getOffers = function(){
	
			var deferred = $q.defer();
            var config = {
                method: 'GET',
                url: "data/images.json",
               
            };

            $http(config)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
					
                })
                .error(function(data, status) {
                    var errorData={};
                     errorData.data=data;
                     errorData.errorCode= status;
                    deferred.reject(errorData);
                });

            return deferred.promise;
		
        };
/* getting the json data from products.json*/
        self.getProducts = function(){
        	var deferred = $q.defer();
            var config = {
                method: 'GET',
                url: "data/product.json",
               
            };

            $http(config)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
					
                })
                .error(function(data, status) {
                    var errorData={};
                     errorData.data=data;
                     errorData.errorCode= status;
                    deferred.reject(errorData);
                });

            return deferred.promise;
        };
	});

})();






