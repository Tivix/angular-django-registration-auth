'use strict';

angular.module('angularDjangoRegistrationAuthApp')
  .controller('UserprofileCtrl', function ($scope, djangoAuth, Validate) {
    $scope.model = {'first_name':'','last_name':'','email':''};
  	$scope.complete = false;
  	djangoAuth.profile().then(function(data){
  		$scope.model = data.user;
  	});
    $scope.updateProfile = function(formData){
      $scope.errors = [];
      Validate.form_validation(formData,$scope.errors);
      if(!formData.$invalid){
        djangoAuth.updateProfile($scope.model)
        .then(function(data){
        	// success case
        	$scope.complete = true;
        },function(data){
        	// error case
        	$scope.error = data;
        });
      }
    }
  });
