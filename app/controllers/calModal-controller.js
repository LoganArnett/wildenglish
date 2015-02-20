'use strict';

angular.module('wildEnglish')

   .controller('ModalCtrl', function(Restangular, uiCalendarConfig, calendarEvents){
    var date = new Date(),
        d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
    
    this.calEvents = calendarEvents;
    
    
    /* event source that pulls from google.com */
    this.eventSource = {
            url: "https://www.google.com/calendar/feeds/5hdm5prrvpkfl6h749ptci39eg%40group.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
        
    /* event source that contains custom events on the scope */
    this.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
        
    /* event source that calls a function on every view switch */
    this.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    
   
    /* config object */
    this.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
      }
    };

    /* event sources array*/
    this.eventSources = [this.calEvents];
    
//    this.events, this.eventSource, this.eventsF
});