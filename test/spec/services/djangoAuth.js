'use strict';

describe('djangoAuth service', function () {

  // instantiate service
  var djangoAuth;
  var $rootScope;
  var $httpBackend;
  var $http;
  var $cookies;

  // load the service's module
  beforeEach(function loadModules() {
    module('angularDjangoRegistrationAuthApp');
  });

  beforeEach(inject(function(_djangoAuth_, _$rootScope_, _$http_, _$httpBackend_, _$cookies_) {
    djangoAuth = _djangoAuth_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $http = _$http_;
    $cookies = _$cookies_;
    expect(djangoAuth).not.toBeNull();
    expect($rootScope).not.toBeNull();
    expect($httpBackend).not.toBeNull();

    $httpBackend.whenGET('//127.0.0.1:8000/rest-auth/user/')
      .respond(200, {
        'id': 1,
        'email': 'test@mail.com',
        'phone': '123456',
        'first_name': 'Test',
        'last_name': 'Anyway',
        'created_at': '2015-12-28T03:54:18.176451Z',
        'updated_at': '2015-12-28T03:54:18.176451Z',
        'role': 'USER'
      });

      $httpBackend.whenPOST('//127.0.0.1:8000/rest-auth/login/', {username: 'test@mail.com', password: 'testpwd'})
        .respond(200, {
          'key': 'TOK123456'
        });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be able to login', function() {    
    djangoAuth.login("test@mail.com", "testpwd");

    $httpBackend.flush();
    $rootScope.$apply();    

    expect(djangoAuth.authenticated).toBeTruthy();
    expect($cookies.token).toBe('TOK123456');
  });

});
