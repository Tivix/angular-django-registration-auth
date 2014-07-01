'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('LoginCtrl', function ($scope, djangoAuth, Validate) {
    $scope.model = {'username':'','password':''};
  	$scope.complete = false;
    $scope.login = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.login($scope.model.username, $scope.model.password)
        .then(function(data){
        	// success case
        	$scope.complete = true;
          $scope.setAuth(true);
        },function(data){
        	// error case
        	$scope.error = data.error;
        });
      }
    }
  });
