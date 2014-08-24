'use strict';

describe('Controller: RestrictedCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDjangoRegistrationAuthApp'));

  var RestrictedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestrictedCtrl = $controller('RestrictedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
