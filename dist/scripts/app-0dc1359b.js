"use strict";angular.module("wildenglish",["ngAnimate","ngTouch","restangular","ngRoute","ui.bootstrap"]).config(["$routeProvider","RestangularProvider",function(a,s){s.setBaseUrl("https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com"),a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl",controllerAs:"app",resolve:{calendarEvents:["Restangular",function(a){return a.one("events?key=AIzaSyAZgcdMkQSiU18Hx8sgSQCKZXxljAwMDGU").get()}]}}).otherwise({redirectTo:"/"})}]),angular.module("wildenglish").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("wildenglish").controller("MainCtrl",["Restangular","calendarEvents",function(a,s){this.events=s,this.items=this.events.items,this.today=Date.now(),console.log(this.today)}]),angular.module("wildenglish").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container-fluid" id="main"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center headline"><h1>Wild<br>English</h1><img class="mountains" src="assets/images/wildmtns.png" alt="mountains"></div><div id="music" class="soundcloud col-xs-12 col-md-6"><iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/69750426&amp;color=1994aa&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe></div><div id="shows" class="gigs col-xs-12 col-md-6"><h2>Our Shows</h2><section class="details" ng-repeat="item in app.items | orderBy: \'start.dateTime\'"><a href="https://www.google.com/maps/place/{{item.location}}" target="_blank"><p>{{item.summary}}</p><p><date ng-hide="item.start.dateTime < app.today">{{item.start.dateTime | date:\'EEEE, MM/d/y @ h:mm a\'}}</date></p></a></section></div><div id="meet-band" class="meet-us col-xs-12"><h3 class="meet-the-band">Meet The Band</h3><div class="band"><div class="nelson col-xs-12 col-md-6"><figure><img src="assets/images/wildthumb.jpg" alt="nelson"><figcaption>Nelson</figcaption><p class="playin">Bass & Vocals</p></figure></div><div class="elliot col-xs-12 col-md-6"><figure><img src="assets/images/wildthumb.jpg" alt="elliot"><figcaption>Elliot</figcaption><p class="playin">Guitar & Vocals</p></figure></div><div class="corey col-xs-12 col-md-6"><figure><img src="assets/images/wildthumb.jpg" alt="Corey"><figcaption>Corey</figcaption><p class="playin">Guitar & Vocals</p></figure></div><div class="jayson col-xs-12 col-md-6"><figure><img src="assets/images/wildthumb.jpg" alt="jayson"><figcaption>Jayson</figcaption><p class="playin">Drums</p></figure></div></div></div><div id="contact" class="contact col-xs-12"><h3 class="book-us">Get In Touch</h3><div class="col-xs-12"><p class="email col-xs-12 col-md-6"><a href="mailto:wildenglish@wildenglishmusic.com"><span class="fa fa-envelope"></span> Email Us</a></p><p class="call col-xs-12 col-md-6"><a href="tel:15617024002"><span class="fa fa-phone"></span> Call Us</a></p></div><div class="col-xs-12 social"><p class="facebook"><a href="https://www.facebook.com/wildenglishband"><span class="fa fa-facebook fa-5x"></span></a></p><p class="cloud"><a href="https://soundcloud.com/wildenglish/"><span class="fa fa-soundcloud fa-5x"></span></a></p></div></div><footer><p>&copy Wild English 2015</p></footer></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse navbar-fixed-top" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#wildnav"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#main"><span class="glyphicon glyphicon-home"></span> Wild English</a></div><div class="collapse navbar-collapse" id="wildnav"><ul class="nav navbar-nav"><li><a ng-href="#music">Music</a></li><li><a ng-href="#shows">Shows</a></li><li><a ng-href="#meet-band">Meet The Band</a></li><li><a ng-href="#contact">Contact</a></li></ul></div></div></nav>')}]);