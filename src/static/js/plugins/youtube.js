// YOUTUBE VIDEO

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('videoplayer', {
          videoId: 'rvgvoV21SZQ',
          playerVars: {
            controls: '0',
            playlist: 'rvgvoV21SZQ',
            loop: 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.setVolume(0);
        event.target.playVideo();
      }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
    //      setTimeout(stopVideo, 6000);
    done = true;
  }
  event.target.setVolume(0);
}

function vidRescale(){

  var w = $('.video-background').outerWidth()+200;
  var h = $('.video-background').outerHeight()+200;

  if (w/h > 16/9){
    $('.videoplayer').css({
      'width': w +'px',
      'height': w/16*9 +'px'
    })
    // $('.video-background .videoplayer').css({'left': '0px'});
  } else {
    $('.videoplayer').css({
      'width': h/9*16 +'px',
      'height': h +'px'
    })
    // $('.video-background .videoplayer').css({'left': -($('.video-background').outerWidth()-w)/2});
  }
}

vidRescale();

$( window ).resize(function() {
  vidRescale();
});