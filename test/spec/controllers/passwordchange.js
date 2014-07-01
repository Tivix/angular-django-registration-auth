'use strict';

describe('Controller: PasswordchangeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDjangoRegistrationAuthApp'));

  var PasswordchangeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasswordchangeCtrl = $controller('PasswordchangeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
