'use strict';

describe('Controller: PasswordresetconfirmCtrl', function () {

    // load the controller's module
    beforeEach(module('angularDjangoRegistrationAuthApp'));

    var PasswordresetconfirmCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        PasswordresetconfirmCtrl = $controller('PasswordresetconfirmCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
    });
});
