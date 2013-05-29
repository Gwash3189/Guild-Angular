app.factory('mapsFactory', function ($http) {
    var eventsFactory = {
        getMaps: function () {
            var promise = $http.get('https://api.guildwars2.com/v1/map_names.json')
                .then(function (response) {
                    return response.data;
                });
            return promise;
        },
        getMapNames: function(mapsArray, id){
            for (var i = 0; i < mapsArray.length; i++) {
                if (mapsArray[i].hasOwnProperty('id')) {
                    if (id == mapsArray[i].id) {
                        return mapsArray[i].name;
                    }
                }
            }
            return null;
        },
        compareBasedUponId: function(a_id, b_id){
            if (a_id.hasOwnProperty('event_id')) {
                if (a_id.event_id < b_id.event_id) {
                    return -1
                }
                if (a_id.event_id > b_id.event_id) {
                    return 1
                }
                return 0;
            }
            if (a_id.hasOwnProperty('id')) {
                if (a_id.id < b_id.id) {
                    return -1
                }
                if (a_id.id > b_id.id) {
                    return 1
                }
                return 0;
            }
        },
        shortenedCompareBasedUponId: function(a_id, b_id){
            var substr_a = '' + a_id;
            substr_a = substr_a.substr(0,3);
            var substr_b = '' + b_id;
            substr_b = substr_b.substr(0,3);
            if (substr_a.hasOwnProperty('event_id')) {
                if (substr_a.event_id < substr_b.event_id) {
                    return -1
                }
                if (substr_a.event_id > substr_b.event_id) {
                    return 1
                }
                return 0;
            }
            if (substr_a.hasOwnProperty('id')) {
                if (substr_a.id < substr_b.id) {
                    return -1
                }
                if (substr_a.id > substr_b.id) {
                    return 1
                }
                return 0;
            }
        }


    };
    return eventsFactory;
});