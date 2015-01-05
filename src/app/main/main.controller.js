'use strict';

angular.module('wildenglish')
  .controller('MainCtrl', function () {
    var self = this;
    self.sounds = [
    {track: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163232447&amp;color=1994aa&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
    description: 'Track 00', url: "https://soundcloud.com/wildenglish/turn-it-on-mast"},
    {track: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163232391&amp;color=1994aa&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
    description: 'Track 01', url: "https://soundcloud.com/wildenglish/no-way-mast"},
    {track: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163232342&amp;color=1994aa&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
    description: 'Track 02', url: "https://soundcloud.com/wildenglish/giving-up"},
    {track: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163232237&amp;color=1994aa&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
    description: 'Track 03', url: "https://soundcloud.com/wildenglish/keep-running-mast-81414"},
    ];
    console.log(this.sounds[0].track)
    this.direction = 'left';
    this.currentIndex = 0;


    this.next = function() {
      this.currentIndex < this.sounds.length - 1 ? this.currentIndex++ : this.currentIndex = 0;
    };

    this.prev = function() {
      this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.sounds.length - 1;
    };
    this.setCurrentSoundIndex = function (index) {
      this.direction = (index > this.currentIndex) ? 'left' : 'right';
      this.currentIndex = index;
    };

    this.isCurrentSoundIndex = function (index) {
      return this.currentIndex === index;
    };

  });
