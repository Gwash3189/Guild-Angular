app.controller('navbarController', function ($scope, $location){
	$scope.navClass = function (page) {
		var currentRoute = $location.path().substring(1) || '';
		if(currentRoute.split("/").length > 1)// if the location has more than one '/' in it that means that it is sub-url.
		{
			if(currentRoute.indexOf(page) != -1){
				//If the sub url has the page varaible in it
				return 'active'; //return the class active
			}
		}
        return page === currentRoute ? 'active' : '';
    };

    // all of the nav elements in the nav bar.
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