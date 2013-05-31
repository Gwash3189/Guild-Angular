var app = angular.module('gw2', []);
app.config(function ($routeProvider){
    $routeProvider
        .when('/home',
        {
            templateUrl: '../../partials/home.html'
        })
        .when('/worlds',
        {
            controller: 'worldsController',
            templateUrl: '../../partials/worlds.html'
        })
        .when('/worlds/details/:id',
        {
            controller: 'eventsController',
            templateUrl: '../../partials/events.html'
        })
        .otherwise({redirectTo: '/home'});
});