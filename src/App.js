import React from 'react';
import Navbar from './components/Navbar';

function App() {

   
   return (
      <>
      <Navbar/>
      <div className="container col-md-8 col-md-offset-2 my-2">
   <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    data-setup="{}"
  >
    <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/x-mpegURL"></source>

    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a>
    </p>
  </video>
    </div>
    </>
  );
}

export default App;