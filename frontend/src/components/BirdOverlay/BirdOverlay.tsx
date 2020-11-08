import React from 'react';
import './BirdOverlay.scss';

const BirdOverlay = ({ img }) => {
  return (
    <div className='bird-overlay'>
      <div className='bird-overlay-inerr'>
        <img src={img} alt='bird' />
      </div>
    </div>
  );
};

export default BirdOverlay;
