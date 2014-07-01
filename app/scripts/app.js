'use strict';

angular.module('angularDjangoRegistrationAuthApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
      })
      .when('/passwordReset', {
        templateUrl: 'views/passwordreset.html',
      })
      .when('/passwordResetConfirm/:firstToken/:passwordResetToken', {
        templateUrl: 'views/passwordresetconfirm.html',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
      })
      .when('/verifyEmail/:emailVerificationToken', {
        templateUrl: 'views/verifyemail.html',
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
      })
      .when('/userProfile', {
        templateUrl: 'views/userprofile.html',
      })
      .when('/passwordChange', {
        templateUrl: 'views/passwordchange.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
