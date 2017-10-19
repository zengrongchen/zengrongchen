/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService','$state','$ionicHistory',function ($scope,$stateParams,localStorageService,$state,$ionicHistory) {
    $scope.title=$stateParams.title;
    $scope.property=$stateParams.property;
    $scope.shop=localStorageService.get('Shop',{
      phone:'123456789',
      createTime:'2017-9-28 10:10:10',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
      $ionicHistory.goBack();
    }
  }])
})();
