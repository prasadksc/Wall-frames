import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import  Images  from '../productsData/images';


function ImageSlides() {
  
  return (
    <div className="slider">
          <Carousel
            data={Images}
            time={2000}
            width="100%"
            height="400px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
          />
        </div>
    
  );
}

export default ImageSlides;


