var app = angular.module('gw2', []);
app.config(function ($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: '../../partials/home.html'
        })
        .when('/worlds',
        {
            controller: 'worldsController',
            templateUrl: '../../partials/worlds.html'
        })
        .when('/details/:id',
        {
            controller: 'eventsController',
            templateUrl: '../../partials/events.html'
        })
        .otherwise({redirectTo: '/'});
});