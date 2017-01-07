var userFeed = new Instafeed({
  get: 'user',
  userId: '498858320',
  accessToken: '498858320.1677ed0.21aa5efd1c6b45a6bc86e0f1fb1653ff',
  template: '<a href="{{link}}" target="_blank" class="gallery__link"><img src="{{image}}" /></a>',
  resolution: 'standard_resolution',
  limit: '6',
  after: function(results) {
    var $feed = $('#instafeed');
    var offset = 200;
    $feed.find('.gallery__link').each(function() {
      var $link = $(this);
      setTimeout(function() {
        $link.addClass('animated-in');
      }, offset);
      offset = offset + 300;
    });
  }
});

userFeed.run();
