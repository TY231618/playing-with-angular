var app = angular.module('myPractise', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    template: "hello mate"
  })
  .when('/another', {
    template: 'What you doing here?'
  })
  .otherwise({
    redirectTo: '/'
  });
});
