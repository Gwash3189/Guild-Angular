app.controller('mapsController', function ($scope, mapsFactory){
	function getMapNames(){
		var promise = mapsFactory.getMaps();
		return promise;
	}

	function init(){
		$scope.maps = getMapNames();
	}
	init();
});