import React, {useEffect} from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';

function VideoPlayer({ videoUrl }) {

   useEffect(() => { 
      var video = document.getElementById('player');
      var source = videoUrl;
      const defaultOptions = {};
      if (!Hls.isSupported()) {
        video.src = source;
      }
     else if (Hls.isSupported()) {
        const hls = new Hls();        
        hls.loadSource(source);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event,data) {
          const availableQualities = hls.levels.map((l) => l.height)
          availableQualities.unshift(0) //prepend 0 to quality array
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
            'airplay', 
            'fullscreen',
          ];
      

        	    // Add Auto Label 
		    defaultOptions.i18n = {
		    	qualityLabel: {
		    		0: 'Auto',
		    	},
		    }

          defaultOptions.quality = {
            default: 0, //Default - AUTO
              options: availableQualities,
              forced: true,        
              onChange: (e) => updateQuality(e),
          }

          hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
	          var span = document.querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span")
	          if (hls.autoLevelEnabled) {
	            span.innerHTML = `Auto`
	          } else {
	            span.innerHTML = `Auto`
	          }
	        })

          new Plyr(video, defaultOptions);
         
    })

    hls.attachMedia(video);
    window.hls = hls;
  }
}, [videoUrl])

function updateQuality(newQuality) {
  if (newQuality === 0) {
    window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
  } else {
    window.hls.levels.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        console.log("Found quality match with " + newQuality);
        window.hls.currentLevel = levelIndex;
      }
    });
  }
}

    return (
      <div className='container'>
      <video
        id="player"
        controls
        preload="auto"
      >
      </video>
      </div>
    );
  }
  
  export default VideoPlayer;