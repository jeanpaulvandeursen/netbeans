angular.module('AngularJSCursusDag4App.directives').directive('jp',function(carFactory) {
    return {
        restrict: 'E',
        template: '<div><H1>Hi there</H1>' +
                '<ul>' +
                '<li ng-repeat="auto in autootjes">{{auto.brand}}</li>' +
                '</ul></div>',
        scope: {},
        link: function(scope,iElement,iAttrs) {
            console.log('in de linkfunctie');
            scope.autootjes = carFactory.returnData();
        }        
    };
});

