app.config(function ($httpProvider){
   $httpProvider.responseInterceptors.push('spinner');
    var spinnerFunction = function (data){
        $('#spinner').show();
        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
}).factory('spinner', function ($q){
        return function (promise) {
            return promise.then(function (response){
                $('#spinner').hide();
                return response;
            }, function (response){
                $('#spinner').hide();
                return $q.reject(response);
            });
        };
    });