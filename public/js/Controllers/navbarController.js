app.controller('navbarController', function ($scope, $location){
	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

	$scope.navs = [
		{
			name: 'Home',
			route: '/#/home'
		},
		{
			name: 'Worlds',
			route: '/#/worlds'
		}
	];
});