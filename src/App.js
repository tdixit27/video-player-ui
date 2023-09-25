import React from 'react';
import Navbar from './components/Navbar';

function App() {

   
   return (
      <>
      <Navbar/>
      <div className="container col-md-8 col-md-offset-2 my-2">
   <video
    id="my-video"
    className="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    data-setup="{}"
  >
    {/* <source src="https://d2dj84mly4mfx8.cloudfront.net/video/DomesticViolence.m3u8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3MTSLC4PCLZK636H%2F20230911%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230911T102707Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCWV1LXdlc3QtMiJHMEUCIAj6EWe4Im39K8S6CspuhWOtKEHpAvbJbiQguakVR12nAiEA%2BHm%2BF6lBRWDcoKAB%2Fan7qKITqLwme%2FqqSPxvqoyoyLkqogMI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3ODI5OTc1OTE4MzgiDNlH8DF5D1jz0z4a1Cr2AjaR9TchZJ5Kr8fsJw4alLYbvMpkQAdy3brbvc3A9ToKpNSGrvVaGXJg8kHbiD8gbX%2FCiWI0fnMcSI5Nde8%2F1WaL2MRUVtHgqiKfKqoNrqeOwYmBs2hNG3%2Fqsoca5X728kNqI%2FSHKxJAECF1fyAIolyF8XQugYDhZhm57GfyTxqI%2BiBx%2BAlMxGuBiqDCBsG1DiKrMEv54VqhQV5WUsE1wnbsPqXtM%2FKeR5BfP7w%2Ffvwk1LuBqa6O3rn7xfDdksUNYKAyxGV29Nq8wAFiKzX4IhJ9Qo4jIGIsvSDNE10RZWz2D68MwC%2FqQVvz3a0L%2Bk64eid11FTgltzjM0HkdM5NCewfxUo4pLjErDSRrMI2Tc1hROh4NdoTcg56rxUteyQDk0UTVr9ffo%2FgjqFQOJJxHcYXfDIbnV6TC6hfTjTy6bk8Hdq%2FPmW3qdbB1v6dps2SCS906zDeICbV2Z14Tc86D4ydZW5CnhBZqojXDL%2BJGQB5LTHiPL3iMPnW%2B6cGOp0B%2FWTj5QkaR9PFzhGVz8DN4rApfueTdgRTxtHJm%2FPrkboUGkIEiCWp87oL54rr%2BU6IEOOQY2jlOp21HGqrvbtj1lpcumneq42msVoW2r5Mxc1PYucUA7Hc%2BOMKjQDwzFiLVnUPHAu76ihJAB0T%2FAlaN%2Bt1TFzPD%2B4Uo814LF4%2F8dME4t7dBV2FcYBdG4smBfLK61O6yVulc61vq%2BUnaw%3D%3D&X-Amz-Signature=76b20a3ae3cf63adc3d9bc7c5d522b14da8fc13c5acbeaafdb6cf0246233d243" type="application/x-mpegURL"></source> */}

    <source src="https://d2dj84mly4mfx8.cloudfront.net/video/1690754816_video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3MTSLC4PGQMB4MXD%2F20230925%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230925T091432Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCWV1LXdlc3QtMiJIMEYCIQDUm%2Frskm6UGIioaj9%2FsrKof5K34Hcpbta92kdYGSfJCgIhAJhfDrgDeB7MOKMON4jcyvePPxScZQElrMHnjUU705x3KpkDCFoQABoMNzgyOTk3NTkxODM4Igyg1OeN0AXc7qfEbWMq9gKcvr3xOyKmnjGcNygF8tgcPz4x0Q7ZAOundMNUgA%2FMk3Nytw3tbK1mAMvA9KZdonCvVnXjmIuMoQr9SZ9ZpOPmsfXnGnACTC0Dhz45zL59VtnQoPRvkRuJaxmX6%2FC1EgoqhI5ajgRUMtnV8QPgI4BJ2sSS%2FYRU1hbbYyqGE3OJYRDpjvHi1V4NwUmWEu1B5uEySvoxZFxGSnv1j2hUyY8HrNiRexSTIJrXgRRpnALclVFAJ%2BIWrNUjrTmXpWySC26EhSpOwZKjUD57800Q2gSlcDUcLnehwL3Q%2FApfcJRqV7JYiD2Q26j0GI0Abzvf3D1VuSYKM27SrsRAj4ohN3K0%2FHNIm1ZacwiFV6X4VMmtlJcvtfQ0bMgtHmvDhwl%2F%2FXUrlDDkKNxDwFNs2525fX8x1OdGTw3cNEtWIRXztgoQ%2FzaUlrSVPhFGayiTovvlFrqvxO41BXgJ7xkFHK4pGOHOA%2FWsSYh2PY8uUH57FtrNvQcrEthewTD2nsWoBjqcAR5DGEN8tLHpmpfZmB3WnBV5M%2FSDywS77lanPb2nCa1TP9D0pgpXNegVF1EKFghCvig7EUwT%2BLHkNjhKdQeyCdM5HSTlnCFcDjgDWLuhqghg9X90rTbijWgdw6VtsCHp3OFFlVdyf3dgyOWmGyZTB88jJ4rPzOZ5t0jN5dX19WQuA%2F%2BMctl6Xw1NqfwRTpbll7AuOLLNHdNHgQObVQ%3D%3D&X-Amz-Signature=12adaba7da9c1f2ac2db54fa9e8e1da158e64f4eca3f309935b9500ce3be45c3" type="video/mp4"></source>
  </video>
    </div>
    </>
  );
}

export default App;