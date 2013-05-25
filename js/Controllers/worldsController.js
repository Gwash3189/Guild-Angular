app.controller('worldsController', function ($scope, worldsFactory) {
    function init() {
        var results = worldsFactory.getWorlds();
        $scope.worlds = results;
    };
    init();
    $scope.predicate = 'id';
});