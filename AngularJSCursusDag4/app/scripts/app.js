'use strict';

angular.module('AngularJSCursusDag4App', ['ngResource','AngularJSCursusDag4App.factories',
    'AngularJSCursusDag4App.directives'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  angular.module('AngularJSCursusDag4App.factories', []);
  
  angular.module('AngularJSCursusDag4App.directives', []);