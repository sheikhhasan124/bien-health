import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../imges/banner1.png'
import banner2 from '../../../imges/banner2.jpg'
import banner3 from '../../../imges/banner3.jpg'

const Banner = () => {
    
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
   <div>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default Banner;