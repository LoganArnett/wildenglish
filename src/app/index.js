'use strict';

angular.module('wildenglish', ['ngAnimate', 'ngTouch', 'restangular', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('https://www.googleapis.com/calendar/v3');

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


  })
;
