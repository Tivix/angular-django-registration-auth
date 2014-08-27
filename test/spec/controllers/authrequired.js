'use strict';

describe('Controller: AuthrequiredCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDjangoRegistrationAuthApp'));

  var AuthrequiredCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthrequiredCtrl = $controller('AuthrequiredCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
