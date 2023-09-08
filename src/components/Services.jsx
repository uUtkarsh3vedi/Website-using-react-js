import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/pxfuel.jpg"
import img2 from "../assets/176-1762399_solar-panels-wallpaper-hd.jpg";
import video from "../assets/time_lapse_.mp4"
const Services = () => {
  return (
    <div className="Services">

<Carousel
   infiniteLoop 
   autoPlay 
   showArrows
   interval={1500}
  >
  <div>
        <video src={video} autoPlay loop muted alt= "item1" />
        <p className="legend">Solar field</p>
    </div>
    <div>
        <img src={img1} alt= "item1" />
        <p className="legend">IT projects</p>
    </div>
    <div>
        <img src={img2} alt= "item1" />
        <p className="legend">Solar projects</p>
    </div>
</Carousel>

    </div>
  );
};

export default Services;