'use strict';

describe('Controller: LogoutCtrl', function () {

    // load the controller's module
    beforeEach(module('angularDjangoRegistrationAuthApp'));

    var LogoutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LogoutCtrl = $controller('LogoutCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
    });
});
