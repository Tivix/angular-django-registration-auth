'use strict';

angular.module('angularDjangoRegistrationAuthApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'views/register.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('passwordReset', {
                    url: '/passwordReset',
                    templateUrl: 'views/passwordreset.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('passwordResetConfirm', {
                    url: '/passwordResetConfirm/:firstToken/:passwordResetToken',
                    templateUrl: 'views/passwordresetconfirm.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('verifyEmail', {
                    url: '/verifyEmail/:emailVerificationToken',
                    templateUrl: 'views/verifyemail.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('logout', {
                    url: '/logout',
                    templateUrl: 'views/logout.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('userProfile', {
                    url: '/userProfile',
                    templateUrl: 'views/userprofile.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('passwordChange', {
                    url: '/passwordChange',
                    templateUrl: 'views/passwordchange.html',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('restricted', {
                    url: 'restricted',
                    templateUrl: 'views/restricted.html',
                    controller: 'RestrictedCtrl',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }],
                    }
                })
                .state('authRequired', {
                    url: '/authRequired',
                    templateUrl: 'views/authrequired.html',
                    controller: 'AuthrequiredCtrl',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus(true);
                        }],
                    }
                });
        }])
    .run(function (djangoAuth) {
        djangoAuth.initialize('//localhost:9050/api/v1/auth', false);
    });
