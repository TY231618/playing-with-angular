var app = angular.module('myPractise', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'hello.html'
  })
  .when('/helloUser', {
    templateUrl: 'user.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.controller('animal', function($scope) {
  $scope.favAnimal = 'None Selected';

  $scope.dog = function() {
    $scope.favAnimal = 'Dog';
  };

  $scope.cat = function() {
    $scope.favAnimal = 'Cat';
  };

  $scope.rabbit = function() {
    $scope.favAnimal = 'Rabbit';
  };

  $scope.lion = function() {
    $scope.favAnimal = 'Lion';
  };
});
