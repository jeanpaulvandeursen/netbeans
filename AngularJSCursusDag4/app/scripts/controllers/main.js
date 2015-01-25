'use strict';

angular.module('AngularJSCursusDag4App')
  .controller('MainCtrl', function ($scope,$resource,carFactory) {
      console.log($scope);
//    $scope.autootjes = [
//      'bmw',
//      'skoda',
//      'toyota'
//    ];
//    $scope.autootjes = $resource('autos.json').query();
    
//    $scope.autootjes = carFactory.returnData();
    
  });
