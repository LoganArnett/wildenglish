'use strict';

angular.module('wildenglish', ['ngAnimate', 'ngTouch', 'restangular', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com');

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
                googleCalEvents: function(Restangular){
                    return Restangular.one('events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU&callback=JSON').get();
                }
            }
      })
      .otherwise({
        redirectTo: '/'
      });


  })
;
/*resolve: {
                resolvedData: function(Restangular){
                    return Restangular.one('Items').get();
                }
            }
            */