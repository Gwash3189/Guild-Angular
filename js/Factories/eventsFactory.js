app.factory('eventsFactory', function ($http) {
    var eventsFactory = {
        getEvents: function (id) {
            var promise = $http.get('https://api.guildwars2.com/v1/events.json?world_id=' + id)
                .then(function (response) {
                    if(response.data.hasOwnProperty('events')){
                        return response.data.events;
                    }
                });
            return promise;
        },
        getEventNames: function () {
            var promise = $http.get('https://api.guildwars2.com/v1/event_names.json')
                .then(function (response) {
                   return response.data;
                });
            return promise;
        }
    };
    return eventsFactory;
});