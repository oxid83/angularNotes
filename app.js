
var app = angular.module('MyApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/view1', {
        templateUrl: 'views/view1.html',
        controller: 'View1Ctrl'
    });
    $routeProvider.when('/view2', {
        templateUrl: 'views/view2.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});

}]);
