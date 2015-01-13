'use strict';

angular.module('wildenglish')
  .controller('MainCtrl', function (Restangular, googleCalEvents) {
    var self = this;
    self.events = googleCalEvents; 
    console.log(self.events)
    // var test = Restangular.one("calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com/events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU&callback=JSONp").getList();
    // console.log(test)
    //  console.log(Restangular.one("https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com/events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU").getList())
    // function($http, $templateCache) {
    //   this.method = 'GET';
    //   this.url = 'https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com/events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU';
    // };
  });
