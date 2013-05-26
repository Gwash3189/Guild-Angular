app.factory('eventsFactory', function ($http) {
    var eventsFactory = {
        getEvents: function (id, choice) {
            if (choice == 0) {
                var promise = $http.get('https://api.guildwars2.com/v1/events.json?world_id=' + id)
                    .then(function (response) {
                        if (response.data.hasOwnProperty('events')) {
                            return response.data.events;
                        }
                    });
                return promise;
            }
            else{
                var promise = $http.get('https://api.guildwars2.com/v1/events.json?world_id=' + id, {cache: true})
                    .then(function (response) {
                        if (response.data.hasOwnProperty('events')) {
                            return response.data.events;
                        }
                    });
                return promise;
            }
        },
        getEventNames: function (choice) {
            if (choice == 0) {
                var promise = $http.get('https://api.guildwars2.com/v1/event_names.json')
                    .then(function (response) {
                        return response.data;
                    });
                return promise;
            }
            else{
                var promise = $http.get('https://api.guildwars2.com/v1/event_names.json', {cache: true})
                    .then(function (response) {
                        return response.data;
                    });
                return promise;
            }
        }
    };
    return eventsFactory;
});