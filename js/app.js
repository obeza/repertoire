var app = angular.module('repertoire', []);

app.controller('RepController', function($scope, jsonService){
	
	$scope.loading =true;
	$scope.message = "Bonjour";
	
	jsonService.getjson().then(function(d) {
      $scope.services = d.services;
		$scope.contacts = d.contacts;
      console.log($scope.contacts[0].photo);
		if (!$scope.contacts[0].photo){
			console.log(" pas de photo");
		}
      $scope.loading =false;
   });
	
});