var app = angular.module('chuckNorrisJokes', ['angularUtils.directives.dirPagination'])

app.controller('ChuckNorrisJokesController', function ($scope, $http) {

    var chuckNorrisJokesTruck = function () {
        $http.get('http://api.icndb.com/jokes/')
        .then( function (response) {
            $scope.unloadJokesTruck = response.data.value
            
        })
    }

    chuckNorrisJokesTruck()
    
})