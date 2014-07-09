'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .service('djangoAuth', function djangoAuth($q, $http, $cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        /* START CUSTOMIZATION HERE */
        // Change this to point to your Django REST Auth API
        // e.g. /api/rest-auth  (DO NOT INCLUDE ENDING SLASH)
        'API_URL': '',
        // Set use_session to true to use Django sessions to store security token.
        // Set use_session to false to store the security token locally and transmit it as a custom header.
        'use_session': true,
        /* END OF CUSTOMIZATION */
        'authenticated': null,
        'request': function(args) {
            // Let's retrieve the token from the cookie, if available
            if($cookies.token){
                $http.defaults.headers.common.Authorization = 'Token ' + $cookies.token;
            }
            // Continue
            params = args.params || {}
            args = args || {};
            var deferred = $q.defer(),
                url = this.API_URL + args.url,
                method = args.method || "GET",
                params = params,
                data = args.data || {};
            // Fire the request, as configured.
            $http({
                url: url,
                withCredentials: this.use_session,
                method: method.toUpperCase(),
                headers: {'X-CSRFToken': $cookies['csrftoken']},
                params: params,
                data: data
            })
            .success(angular.bind(this,function(data, status, headers, config) {
                deferred.resolve(data, status);
            }))
            .error(angular.bind(this,function(data, status, headers, config) {
                console.log("error syncing with: " + url);
                // Set request status
                if(data){
                    data.status = status;
                }
                if(status == 0){
                    if(data == ""){
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Could not connect. Please try again."];
                    }
                    // or if the data is null, then there was a timeout.
                    if(data == null){
                        // Inject a non field error alerting the user
                        // that there's been a timeout error.
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Server timed out. Please try again."];
                    }
                }
                deferred.reject(data, status, headers, config);
            }));
            return deferred.promise;
        },
        'register': function(username,password,email,more){
            var data = {
                'username':username,
                'password':password,
                'email':email
            }
            data = angular.extend(data,more);
            return this.request({
                'method': "POST",
                'url': "/register/",
                'data' :data
            });
        },
        'login': function(username,password){
            var djangoAuth = this;
            return this.request({
                'method': "POST",
                'url': "/login/",
                'data':{
                    'username':username,
                    'password':password
                }
            }).then(function(data){
                if(!djangoAuth.use_session){
                    $http.defaults.headers.common.Authorization = 'Token ' + data.key;
                    $cookies.token = data.key;
                }
            });
        },
        'logout': function(){
            return this.request({
                'method': "GET",
                'url': "/logout/"
            }).then(function(data){
                delete $http.defaults.headers.common.Authorization;
                delete $cookies.token;
            });
        },
        'changePassword': function(password1,password2){
            return this.request({
                'method': "POST",
                'url': "/password/change/",
                'data':{
                    'new_password1':password1,
                    'new_password2':password2
                }
            });
        },
        'resetPassword': function(email){
            return this.request({
                'method': "POST",
                'url': "/password/reset/",
                'data':{
                    'email':email
                }
            });
        },
        'profile': function(){
            return this.request({
                'method': "GET",
                'url': "/user/"
            }); 
        },
        'updateProfile': function(data){
            return this.request({
                'method': "POST",
                'url': "/user/",
                'data':{
                    'user':data
                }
            }); 
        },
        'verify': function(key){
            return this.request({
                'method': "GET",
                'url': "/verify-email/"+key+"/"
            });            
        },
        'confirmReset': function(code1,code2,password1,password2){
            return this.request({
                'method': "POST",
                'url': "/password/reset/confirm/"+code1+"/"+code2+"/",
                'data':{
                    'new_password1':password1,
                    'new_password2':password2
                }
            });
        },
        'initialize': function(url, sessions, model){
            this.API_URL = url;
            this.use_session = sessions;
            if(model){
                model.authenticated = null;
                if(this.authenticated == null){
                    var djangoAuth = this;
                    this.profile().then(function(){
                        djangoAuth.authenticated = true;
                        model.authenticated = true;
                    },function(){
                        djangoAuth.authenticated = false;
                        model.authenticated = false;
                    });
                }else{
                    model.authenticated = this.authenticated;
                }
                model.setAuth = function(auth){
                    model.authenticated = auth;
                }
            }
        }

    }
    return service;
  });
