app.factory('mapsFactory', function ($http) {
    var eventsFactory = {
        getMaps: function () {
            var promise = $http.get('https://api.guildwars2.com/v1/map_names.json')
                .then(function (response) {
                    return response.data.events;
                });
            return promise;
        }
    };
    return eventsFactory;
});