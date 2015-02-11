angular.module('wildEnglish', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','restangular', 'plangular'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com');
    
  
    $stateProvider
     .state('main', {
        url: '/main',
        templateUrl: 'states/main.html',
        controller: 'MainCtrl',
        controllerAs: 'app',
        resolve: {
                calendarEvents: function(Restangular){
                    return Restangular.one('events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU').get();
                }
            }
      })
    /* Add New States Above */
    $urlRouterProvider.otherwise('/main');

})

.run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

