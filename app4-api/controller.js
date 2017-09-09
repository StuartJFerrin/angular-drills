angular.module('apiApp').controller('apiController', function ($scope, apiService) {

$scope.getType = function (type) {
    // console.log(type);

    apiService.getType(type).then(function (dataFromService) {
        console.log(dataFromService.name);
        $scope.pokeData = dataFromService;

    });
}
});
