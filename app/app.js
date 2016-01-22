'use strict';

// Declare app level module which depends on views, and components
var bookmyshowApp = angular.module('bookmyshowApp',['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/callBack',
    {
        templateUrl:'/app/callBack/callBack.html',

    });
  $routeProvider.otherwise({redirectTo: '/callBack'});



}])