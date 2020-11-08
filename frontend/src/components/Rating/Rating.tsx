import React from 'react';
import './Rating.scss';
import fullstar from '../../images/fullstar.svg';
import haffstar from '../../images/haffstar.svg';
import emtystar from '../../images/emtystar.svg';

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <div className='ratings-stars'>
        <img
          src={value >= 1 ? fullstar : value >= 0.5 ? haffstar : emtystar}
          alt=''
        />
        <img
          src={value >= 2 ? fullstar : value >= 1.5 ? haffstar : emtystar}
          alt=''
        />
        <img
          src={value >= 3 ? fullstar : value >= 2.5 ? haffstar : emtystar}
          alt=''
        />
        <img
          src={value >= 4 ? fullstar : value >= 3.5 ? haffstar : emtystar}
          alt=''
        />
        <img
          src={value >= 5 ? fullstar : value >= 4.5 ? haffstar : emtystar}
          alt=''
        />
      </div>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
