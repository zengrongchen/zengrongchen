/**
 * Created by Administrator on 2017/9/24.
 */
(function (){

  'use strict';
  angular.module('starter.services')
    .controller('HomeCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state){
      $scope.$on('$ionicView.beforeEnter',function (){
        var user=localStorageService.get('User');
        if(user.isLogin==false);
        $state('login')

      });
    }])
})();
