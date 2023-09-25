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
    <source src="https://d2dj84mly4mfx8.cloudfront.net/video/1690754816_video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3MTSLC4PGQMB4MXD%2F20230925%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230925T091432Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCWV1LXdlc3QtMiJIMEYCIQDUm%2Frskm6UGIioaj9%2FsrKof5K34Hcpbta92kdYGSfJCgIhAJhfDrgDeB7MOKMON4jcyvePPxScZQElrMHnjUU705x3KpkDCFoQABoMNzgyOTk3NTkxODM4Igyg1OeN0AXc7qfEbWMq9gKcvr3xOyKmnjGcNygF8tgcPz4x0Q7ZAOundMNUgA%2FMk3Nytw3tbK1mAMvA9KZdonCvVnXjmIuMoQr9SZ9ZpOPmsfXnGnACTC0Dhz45zL59VtnQoPRvkRuJaxmX6%2FC1EgoqhI5ajgRUMtnV8QPgI4BJ2sSS%2FYRU1hbbYyqGE3OJYRDpjvHi1V4NwUmWEu1B5uEySvoxZFxGSnv1j2hUyY8HrNiRexSTIJrXgRRpnALclVFAJ%2BIWrNUjrTmXpWySC26EhSpOwZKjUD57800Q2gSlcDUcLnehwL3Q%2FApfcJRqV7JYiD2Q26j0GI0Abzvf3D1VuSYKM27SrsRAj4ohN3K0%2FHNIm1ZacwiFV6X4VMmtlJcvtfQ0bMgtHmvDhwl%2F%2FXUrlDDkKNxDwFNs2525fX8x1OdGTw3cNEtWIRXztgoQ%2FzaUlrSVPhFGayiTovvlFrqvxO41BXgJ7xkFHK4pGOHOA%2FWsSYh2PY8uUH57FtrNvQcrEthewTD2nsWoBjqcAR5DGEN8tLHpmpfZmB3WnBV5M%2FSDywS77lanPb2nCa1TP9D0pgpXNegVF1EKFghCvig7EUwT%2BLHkNjhKdQeyCdM5HSTlnCFcDjgDWLuhqghg9X90rTbijWgdw6VtsCHp3OFFlVdyf3dgyOWmGyZTB88jJ4rPzOZ5t0jN5dX19WQuA%2F%2BMctl6Xw1NqfwRTpbll7AuOLLNHdNHgQObVQ%3D%3D&X-Amz-Signature=12adaba7da9c1f2ac2db54fa9e8e1da158e64f4eca3f309935b9500ce3be45c3" type="application/x-mpegURL"></source>
  </video>
    </div>
    </>
  );
}

export default App;