'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ngResource'));
  beforeEach(module('AngularJSCursusDag4App'));

  var MainCtrl,$controller,carFactory,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, $rootScope, _carFactory_) {
    scope = $rootScope.$new();
    $controller = _$controller_;
    carFactory = _carFactory_;
  }));

  it('should attach a list of autootjes to the scope', function () {
    expect(scope.autootjes).not.toBeNull();
  });
  
  it('should retrieve autootjes', function () {
     // arrange
        spyOn(carFactory, 'returnData');

        // act
        $controller('MainCtrl', {
            $scope: scope
        });

        // assert
        expect(carFactory.returnData).toHaveBeenCalledWith(jasmine.any(Function));
  });
  
});
