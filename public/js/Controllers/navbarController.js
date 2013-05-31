app.controller('navbarController', function ($scope, $location){
	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '';
        return page === currentRoute ? 'active' : '';
    };

	$scope.navs = [
		{
			name: 'Home',
			route: '#/',
			location: 'home'
		},
		{
			name: 'Worlds',
			route: '#/worlds',
			location: 'worlds'
		}
	];

});