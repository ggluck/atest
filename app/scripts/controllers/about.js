'use strict';

/**
 * @ngdoc function
 * @name componentTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the componentTestApp
 */
angular.module('componentTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
