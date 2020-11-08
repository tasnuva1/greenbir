import React from 'react';
import './BlurContainer.scss';

interface blurcontainerPro {
  heading: string;
  para: string;
}

const BlurContainer = ({ heading, para }: blurcontainerPro) => {
  return (
    <div className='blur-container'>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
};

export default BlurContainer;
