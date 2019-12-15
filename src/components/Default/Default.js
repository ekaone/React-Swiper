import React from 'react'
import Swiper from 'react-id-swiper'

import Paper from '../PageSample/Paper'

const params = {
  spaceBetween: 5,
}

export default function Default() {
  return (
    <>
      <Swiper {...params}>
        <div>
          <Paper />
        </div>
        <div>
          <Paper />
        </div>
      </Swiper>
    </>
  )
}
