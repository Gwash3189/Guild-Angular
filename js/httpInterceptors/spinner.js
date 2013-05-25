app.config(function ($httpProvider){
   $httpProvider.responseInterceptors.push('spinner');
    var spinnerFunction = function (data, headersGetter){
        console.log('start spinner');
        $('#spinner').show();
        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
}).factory('spinner', function ($q, $window){
        return function (promise) {
            return promise.then(function (response){
                console.log('Stopping Spinner');
                $('#spinner').hide();
                return response;
            }, function (response){
                console.log('Stopping Spinner');
                $('#spinner').hide();
                return $q.reject(response);
            });
        };
    });