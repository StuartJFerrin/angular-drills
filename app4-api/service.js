angular.module('apiApp').service('apiService', function ($http, $q) {

this.getType = function(type) {
    // var deferred = $q.defer();

return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/type/' + type
})
.then(function(response) {
    var results = response.data.pokemon;
    console.log(results);
    var newResults = [];
    function newResultsFormat(name) {
        this.name = name;
    }
    for (var i = 0; i < results.length; i++) {
newResults.push( new newResultsFormat(results[i].pokemon.name));

    }
    return newResults;
})
}

});