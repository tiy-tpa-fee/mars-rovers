import React from 'react'

const ImageDisplay = ({ images }) =>
  <ul>
    {images.map(image =>
      <li key={image.id}>
        <img src={image.img_src} alt={image.earth_date} />
      </li>
    )}
  </ul>

export default ImageDisplay
