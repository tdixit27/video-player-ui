import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Navbar from './components/Navbar';

function App() {

   //const videoUrl = 'https://d2dj84mly4mfx8.cloudfront.net/video/DomesticViolence.m3u8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3MTSLC4PCLZK636H%2F20230911%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230911T102707Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCWV1LXdlc3QtMiJHMEUCIAj6EWe4Im39K8S6CspuhWOtKEHpAvbJbiQguakVR12nAiEA%2BHm%2BF6lBRWDcoKAB%2Fan7qKITqLwme%2FqqSPxvqoyoyLkqogMI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3ODI5OTc1OTE4MzgiDNlH8DF5D1jz0z4a1Cr2AjaR9TchZJ5Kr8fsJw4alLYbvMpkQAdy3brbvc3A9ToKpNSGrvVaGXJg8kHbiD8gbX%2FCiWI0fnMcSI5Nde8%2F1WaL2MRUVtHgqiKfKqoNrqeOwYmBs2hNG3%2Fqsoca5X728kNqI%2FSHKxJAECF1fyAIolyF8XQugYDhZhm57GfyTxqI%2BiBx%2BAlMxGuBiqDCBsG1DiKrMEv54VqhQV5WUsE1wnbsPqXtM%2FKeR5BfP7w%2Ffvwk1LuBqa6O3rn7xfDdksUNYKAyxGV29Nq8wAFiKzX4IhJ9Qo4jIGIsvSDNE10RZWz2D68MwC%2FqQVvz3a0L%2Bk64eid11FTgltzjM0HkdM5NCewfxUo4pLjErDSRrMI2Tc1hROh4NdoTcg56rxUteyQDk0UTVr9ffo%2FgjqFQOJJxHcYXfDIbnV6TC6hfTjTy6bk8Hdq%2FPmW3qdbB1v6dps2SCS906zDeICbV2Z14Tc86D4ydZW5CnhBZqojXDL%2BJGQB5LTHiPL3iMPnW%2B6cGOp0B%2FWTj5QkaR9PFzhGVz8DN4rApfueTdgRTxtHJm%2FPrkboUGkIEiCWp87oL54rr%2BU6IEOOQY2jlOp21HGqrvbtj1lpcumneq42msVoW2r5Mxc1PYucUA7Hc%2BOMKjQDwzFiLVnUPHAu76ihJAB0T%2FAlaN%2Bt1TFzPD%2B4Uo814LF4%2F8dME4t7dBV2FcYBdG4smBfLK61O6yVulc61vq%2BUnaw%3D%3D&X-Amz-Signature=76b20a3ae3cf63adc3d9bc7c5d522b14da8fc13c5acbeaafdb6cf0246233d243'; // Replace with the actual video URL
   const videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
   return (
      <>
      <Navbar/>
      <div className="container col-md-8 col-md-offset-2 my-2">
      <VideoPlayer videoUrl={videoUrl}/>
    </div>
    </>
  );
}

export default App;