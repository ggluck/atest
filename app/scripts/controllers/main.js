'use strict';

/**
 * @ngdoc function
 * @name componentTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the componentTestApp
 */
angular.module('componentTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
