'use strict';

describe('Service: Djangoauth', function () {

    // load the service's module
    beforeEach(module('angularDjangoRegistrationAuthApp'));

    // instantiate service
    var Djangoauth;
    beforeEach(inject(function (_djangoAuth_) {
        Djangoauth = _djangoAuth_;
    }));

    it('should do something', function () {
        expect(!!Djangoauth).toBe(true);
    });

});
