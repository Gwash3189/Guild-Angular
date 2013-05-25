app.controller('eventsController', function ($scope, eventsFactory, $routeParams, $q) {
    function init(events) {
        var id = $routeParams.id;
        var events = eventsFactory.getEvents(id);
        var eventNames = eventsFactory.getEventNames();
        $q.all([events, eventNames]).then(function (arrayOfResults) {
            //arrayOfResults[0] = events
            //arrayOfResults[1] = eventsNames
            var events = arrayOfResults[0];
            var results1 = getKeys(events);
            console.log(results1);

            events = arrayOfResults[1];
            var results2 = getKeys(events);
            console.log(results2);
            for (var i = 0; i < results2.length; i++) {


                if(results2[1][i].id == results1[0][i].event_id){
                    console.log(results2[1][i].id + " DERP " + results1[0][i].event_id);
                }
            }

        });
    };

    function getKeys(obj) {
        var event_id = "event_id";
        var id = "id";
        var keys = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].hasOwnProperty(event_id) || obj[i].hasOwnProperty(id)) {
                keys.push(obj[i]);
            }

        }
        return keys.sort();
    };
    init();
});