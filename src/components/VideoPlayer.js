import React, {useEffect} from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';

function VideoPlayer({ videoUrl }) {

   useEffect(() => { 
      var video = document.getElementById('player');
      var source = videoUrl;
      const defaultOptions = {};
      if (Hls.isSupported()) {
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
            'fullscreen',
            'playsinline'
          ];

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
  }

}, [videoUrl])

    return (
      <div className='container'>
       <video
        id="player" playsinline controls
        muted
        preload="auto"
        autoPlay="true"
      >
      </video>
      </div>
    );
  }
  
  export default VideoPlayer;