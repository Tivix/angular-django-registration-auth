'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('MasterCtrl', function ($scope, djangoAuth) {
    djangoAuth.initialize('//127.0.0.1:8000/rest-auth', false, $scope);
  });
