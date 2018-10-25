import React from 'react';
import { Carousel } from 'react-materialize';

const SSCarousel = () => (

    <Carousel carouselId="ss-carousel"
    options={{ fullWidth: true }}
    images={[
      '/images/slides/AdobeStock_107139675.jpeg',
      '/images/slides/AdobeStock_79567735.jpeg',
      '/images/slides/AdobeStock_128736245.jpeg'
    ]}
  />

);

export default SSCarousel;