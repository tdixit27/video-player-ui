import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Navbar from './components/Navbar';

function App() {

   const videoUrl = 'https://d2dj84mly4mfx8.cloudfront.net/video/DomesticViolence.m3u8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3MTSLC4PHY7IGHFZ%2F20230724%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230724T083321Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCWV1LXdlc3QtMiJHMEUCIQCK4A08GPN8EZJafRTHWmYMVhbYGhf11ERbKXKpd0D3egIgSFn1C9fmeaM9H6oxD30Vn8m7egwkZP4q00NQbgLjHZQqmQMIEhAAGgw3ODI5OTc1OTE4MzgiDB%2FPvRIUPdJBAew6iir2Av6RVy2w5p15c7CxP5DpikwnTozEpxiIbbKrZvStpFytO5THiQgGg%2FNHm1VGI2Ez7D%2BETk3q2ly3g%2B9rDyoRVZwwEJzY1vzBQbLMYd4afP%2BX%2FQ3EEd1q8YKw3wjWra%2BkaShian0upyeRgNMVLN5mSFwwpULp8Ifdsag3xD45i8IdsoyzUfWjPhBnsQogSdbd1qHvwvi%2BVz0KBOpwCh856Rl6mnCbTtjc1N60srtHchZ1FL67jp1gUrIFt0PB%2BZuvLXRKbpxcpcRyvYyQ%2FPdlOHJ8pYXDfxhySfXTWDsl4DswxM2f1fLfYSf%2BykuXegCPnL1UwWom2xRuD1f3IK1THnjldFA7%2BMoiCY2tjqIVVeH%2BMHBbEM6FPloeve27CFl65H2VqSasALJs670noyB1snNjvBObfi1tT8y18T5ArruIPofEN9BXAB%2FyfHhmINc30lYOS8Y9wY4VN%2Bk3O2kzMkzkTn1jzN%2FBSxj2gyETgYj7ZZf1OJKBMM%2Fu%2BKUGOp0BNSiR92T%2BSrf%2F%2BqgE%2FO3QU4t3DSfpeq8jRURxtIFEvaQFZCqpApC0EuWTELJSpHUO7e6vnXjEA%2F9GNj9avMa7rJ5uFqlBDFrJit2cFuK1AqyeWlqBsn%2BLb2tJqEPie%2FZrCMZzaRmvigGrp4r%2Fw7M3QFTzdqcx4nf6gCZ4NcYpwPoyzN%2BOxU07HB7AxwQQxOxgw%2BcfPeuR22aSWfOfFA%3D%3D&X-Amz-Signature=83e9de07cbc1730bc29011e700db9c6e48a5136ef569dc3f7f265258dd0d4562'; // Replace with the actual video URL
  
  // const videoUrl = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
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