import React from 'react';
import Swiper from 'react-id-swiper';

import Paper from '../PageSample/Paper'
  
const Pagination = () => {
  
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return (
    <Swiper {...params}>
      <div><Paper /></div>
      <div><Paper /></div>
      <div><Paper /></div>
      <div><Paper /></div>
      <div><Paper /></div>
    </Swiper>
  )
};

export default Pagination;