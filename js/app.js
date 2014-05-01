var app = angular.module('repertoire', []);

app.controller('RepController', function($scope, jsonService){
	
	$scope.loading =true;
	$scope.message = "Bonjour";
	
	jsonService.getjson().then(function(d) {
      $scope.services = d.services;
		$scope.contacts = d.contacts;
      
      $scope.loading =false;
   });
	
});