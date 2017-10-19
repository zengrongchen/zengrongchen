/**
 * Created by T on 2017/9/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService',
    function ($scope,CategoryService) {
    $scope.product={
      ID:0,
      Name:'',
      Barcode:'',
      SupplierID:0,
      Images:[],
      CategoryID:CategoryService.activeCategory.ID,
      Category:{
        ID:CategoryService.activeCategory.ID,
        Name:CategoryService.activeCategory.Name
      },
      Supplier:{
        ID:0,
        Name:''
      }
    };
$scope.$on('CategoryUpdate',function (event,data) {
  console.log(data);
  $scope.product.CategoryID=CategoryService.activeCategory.ID;
  $scope.product.Category.ID=CategoryService.activeCategory.ID;
  $scope.product.Category.Name=CategoryService.activeCategory.Name;
})
  }])
})();
