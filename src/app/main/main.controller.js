'use strict';

angular.module('wildenglish')
  .controller('MainCtrl', ['calendarEvents', function(calendarEvents) {
    var self = this,
    
    events = calendarEvents,
    items = events.items;
      
    console.log(items[0]);
      
//    items = events.items;
    var poo = [1,2,3,4];
    
    
    
    
  }]);
