var app = angular.module('gw2', []);
app.config(function ($routeProvider){
    $routeProvider
        .when('/',
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