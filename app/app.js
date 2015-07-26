'use strict';

angular.module('angularDjangoRegistrationAuthApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
])
    .config(function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/passwordReset', {
                templateUrl: 'views/passwordreset.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/passwordResetConfirm/:firstToken/:passwordResetToken', {
                templateUrl: 'views/passwordresetconfirm.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/verifyEmail/:emailVerificationToken', {
                templateUrl: 'views/verifyemail.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/logout', {
                templateUrl: 'views/logout.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/userProfile', {
                templateUrl: 'views/userprofile.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/passwordChange', {
                templateUrl: 'views/passwordchange.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/restricted', {
                templateUrl: 'views/restricted.html',
                controller: 'RestrictedCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }],
                }
            })
            .when('/authRequired', {
                templateUrl: 'views/authrequired.html',
                controller: 'AuthrequiredCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus(true);
                    }],
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function (djangoAuth) {
        djangoAuth.initialize('//localhost:9050/api/v1/auth', false);
    });
