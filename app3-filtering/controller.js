angular.module('filterApp').controller('filterController', function ($scope, filterService) {

$scope.myData = filterService.getData();
});