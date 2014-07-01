'use strict';

describe('Controller: MasterCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDjangoRegistrationAuthApp'));

  var MasterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MasterCtrl = $controller('MasterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
