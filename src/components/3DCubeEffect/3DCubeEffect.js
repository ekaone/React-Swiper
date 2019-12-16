import React from 'react';
import Swiper from 'react-id-swiper';
import Paper from '../PageSample/Paper'

const CubeEffect = () => {
  const params = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 1
  }

  return (
    <Swiper {...params}>
      <div>
        <Paper />
      </div>
      <div>
        <Paper />
      </div>
      <div>
        <Paper />
      </div>
      <div>
        <Paper />
      </div>
    </Swiper>
  )
};

export default CubeEffect;
    