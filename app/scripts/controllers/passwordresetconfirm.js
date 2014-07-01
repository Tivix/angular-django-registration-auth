'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('PasswordresetconfirmCtrl', function ($scope, $routeParams, djangoAuth, Validate) {
    $scope.model = {'new_password1':'','new_password2':''};
  	$scope.complete = false;
    $scope.confirmReset = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.confirmReset($routeParams['firstToken'], $routeParams['passwordResetToken'], $scope.model.new_password1, $scope.model.new_password2)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.errors = data;
        });
      }
    }
  });
