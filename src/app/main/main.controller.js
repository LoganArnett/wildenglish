'use strict';

angular.module('wildenglish')

   .controller('MainCtrl', function(Restangular, calendarEvents) {
    var self = this;
    
    this.events = calendarEvents;
    this.items = this.events.items;
    
    this.today = Date.now();
    
    
    console.log(this.today)
    
    
    
    
  });
