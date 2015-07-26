'use strict';

angular.module('angularDjangoRegistrationAuthApp')
    .controller('VerifyemailCtrl', function ($scope, $stateParams, djangoAuth) {
        djangoAuth.verify($stateParams["emailVerificationToken"]).then(function (data) {
            $scope.success = true;
        }, function (data) {
            $scope.failure = false;
        });
    });
