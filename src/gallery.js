import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import image1 from './images/hk1.jpeg';
import image2 from './images/hk2.jpeg';
import image3 from './images/hk3.jpeg';
import image4 from './images/hk4.jpeg';
import image5 from './images/hk5.jpeg';
import image6 from './images/hk6.jpeg';
import image7 from './images/hk7.jpeg';
import image8 from './images/hk8.jpeg';
import image9 from './images/hk9.jpeg';
const gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  
  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
  };
  return (
    <Slider {...settings}>
    {images.map((images, index)=>(
      <div key={index}>
           <img src={images} alt={`Slide ${index + 1}`} />
      </div>
    ))};
   </Slider>  
  );
  };

export default gallery;