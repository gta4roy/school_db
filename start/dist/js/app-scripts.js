var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
   $http.get("../../school_app/api/test_medo.php")
   .then(function (response) {$scope.names = response.data.records;});
});
