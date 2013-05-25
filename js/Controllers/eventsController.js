app.controller('eventsController', function ($scope, eventsFactory, $routeParams, mapsFactory, $q) {
    function init(events) {
        var id = $routeParams.id;
        var events = eventsFactory.getEvents(id);
        var eventNames = eventsFactory.getEventNames();
        var mapsArray = getMapArray();
        $q.all([events, eventNames, mapsArray]).then(function (arrayOfResults) {
            var events_noNames = arrayOfResults[0];
            var events_withNames = arrayOfResults[1];
            events_noNames = sortArray(events_noNames, compareBasedUponId);
            events_withNames = sortArray(events_withNames, compareBasedUponId);
            $scope.events = combineEventArrays(events_noNames, events_withNames, mapsArray);
        });
    };

    function combineEventArrays(noNames, names, mapsArray) {
        var tmp = [];
        for (var i = 0; i < noNames.length; i++) {
            tmp.push({event_id: noNames[i].event_id, name: names[i].name, state: noNames[i].state, map_name: getMapNames(mapsArray, noNames[i].map_id)});
        }
        return tmp;
    }

    function getMapArray() {
        return mapsFactory.getMaps();
    }

    function getMapNames(mapsArray, id) {
        for (var i = 0; i < mapsArray.length; i++) {
            if (mapsArray[i].hasOwnProperty('id')) {
                if (id == mapsArray[i].map_id) {
                    return mapsArray.name;
                }
            }
        }
    }

    function compareBasedUponId(a_id, b_id) {
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
    }

    function sortArray(eventArray, callback) {
        return eventArray.sort(callback);
    }

    init();
    $scope.predicate = 'state';
});