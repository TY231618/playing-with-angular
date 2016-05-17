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
