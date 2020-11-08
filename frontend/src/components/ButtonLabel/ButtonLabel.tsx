import React from 'react';
import './ButtonLabel.scss';

interface ButtonLabelProps {
  amound: number;
}

const ButtonLabel = ({ amound }: ButtonLabelProps) => {
  return (
    <div className='buttonlabel-container'>
      <label htmlFor='taka' className='buttonlabel'>
        {amound && <span>{amound} TK</span>}
      </label>
    </div>
  );
};

export default ButtonLabel;
