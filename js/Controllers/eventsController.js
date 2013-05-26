app.controller('eventsController', function ($scope, eventsFactory, $routeParams, mapsFactory, $q) {
    function init(events) {
        var id = $routeParams.id;
        var events = eventsFactory.getEvents(id, 1);
        var eventNames = eventsFactory.getEventNames(1);
        var mapsArray = getMapArray();

        $q.all([events, eventNames, mapsArray]).then(function (arrayOfResults) {
            var events_noNames = arrayOfResults[0];
            var events_withNames = arrayOfResults[1];
            var mapsResults = arrayOfResults[2];
            events_noNames = sortArray(events_noNames, mapsFactory.shortenedCompareBasedUponId);
            events_withNames = sortArray(events_withNames, mapsFactory.shortenedCompareBasedUponId);
            $scope.events = combineEventArrays(events_noNames, events_withNames, mapsResults);
        });
    };

    function combineEventArrays(noNames, names, mapsArray) {
        var tmp = [];
        for (var i = 0; i < noNames.length; i++) {
            var mapName = mapsFactory.getMapNames(mapsArray, noNames[i].map_id);
            tmp.push({event_id: noNames[i].event_id, name: names[i].name, state: noNames[i].state, map_name: mapName});
        }
        console.log(tmp.length);
        return tmp;
    }

    function getMapArray() {
        return mapsFactory.getMaps();
    }

    function sortArray(eventArray, callback) {
        return eventArray.sort(callback);
    }

    init();
    $scope.predicate = 'map_name';
});