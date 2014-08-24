'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('LogoutCtrl', function ($scope, $location, djangoAuth) {
    djangoAuth.logout();
  });
