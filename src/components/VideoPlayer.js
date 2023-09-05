import React, {useEffect} from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';

function VideoPlayer({ videoUrl }) {

   useEffect(() => { 
      var video = document.getElementById('player');
      var source = videoUrl;
      const defaultOptions = {};
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        //
        // If no native HLS support, check if HLS.js is supported
        //
      }
     else if (Hls.isSupported()) {
        const hls = new Hls();        
        hls.loadSource(source);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event,data) {
          const availableQualities = hls.levels.map((l) => l.height)
          defaultOptions.controls = 
          [
            'play-large',
            'play', 
            'progress', 
            'current-time',
            'duration', 
            'mute', 
            'volume', 
            'settings',
            'pip', 
            'airplay', 
            'fullscreen'
          ];
          defaultOptions.playsinline=true;
          defaultOptions.quality = {
            default: availableQualities[0],
            options: availableQualities,
            forced: true,
            onChange: (newQuality) => { console.log('Inside updateQuality',newQuality);
            window.hls.levels.forEach((level, levelIndex) => {
              if(level.height === newQuality){
                window.hls.currentLevel = levelIndex;
              }   
            });

            }
          }

          new Plyr(video, defaultOptions);
          
    })

    hls.attachMedia(video);
    window.hls = hls;
    
    const player = new Plyr(video, {fullscreen:{ enabled: true, fallback: true, iosNative: true, container: null },volume:'1'});
    player.muted=true;
    player.playsinline=true;
  //  player.fullscreen.enter();
    // player.on('ready', (event) => {
    //   const instance = event.detail.plyr;
    // });
    // Handle changing captions
		// player.on('languagechange', () => {
		// 	// Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
		// 	setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
		// });
	
	
	// Expose player so it can be used from the console
	window.player = player;
  }

}, [videoUrl])

    return (
      <div className='container'>
      {/* <video
        id="player" playsinline controls
        muted
        autoplay
        preload="auto"
        autoPlay="true"
      >
      </video> */}
      <video id="player" playsinline controls muted></video>
      </div>
    );
  }
  
  export default VideoPlayer;