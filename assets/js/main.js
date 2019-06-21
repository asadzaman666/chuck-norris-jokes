(function(){
    'use strict'

var app = angular.module('chuckNorrisJokes', ['angularUtils.directives.dirPagination'])

app.controller('ChuckNorrisJokesController', function ($scope, $http) {

    var chuckNorrisJokesTruck = function () {
        $http.get('https://api.icndb.com/jokes/')
        .then( function (response) {
            
            $scope.unloadJokesTruck = response.data.value
            $scope.hideLoader = true
            $scope.showContent = true
            
        })
    }

    chuckNorrisJokesTruck()
    
})

})();