/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    var USER='user';
    $scope.user={
      oldPassword:'',
      password:'',
      confirmPassword:''
  };
    $scope.save=function () {
var user=localStorageService.get(USER);
      user.password=$scope.user.password;
      localStorageService.update(USER,user);
      $state.go('login')
    }
  }])
})();
