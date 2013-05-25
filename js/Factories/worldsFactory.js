app.factory('worldsFactory', function ($http) {
    var worldsFactory = {
        getWorlds: function () {
            var promise = $http.get('https://api.guildwars2.com/v1/world_names.json')
                .then(function (response) {
                    console.log('Then');
                    return response.data;
                });
            return promise;
        }
    };
    return worldsFactory;
});