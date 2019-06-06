SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'

});

$(document).ready(function() {

  SC.stream('/tracks/603357162', function(sound) {
    $('#Start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/296676843', function(sound) {
    $('#Start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/326999078', function(sound) {
    $('#Start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/500641629', function(sound) {
    $('#Start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

});
