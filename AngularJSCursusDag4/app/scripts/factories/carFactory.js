angular.module('AngularJSCursusDag4App.factories').factory('carFactory',function($resource) {
    
    var carResource = $resource('autos.json');
    
    function returnData(successCallback) {
        return carResource.query();
    }
    
    return {
        returnData: returnData
    };
    
});

