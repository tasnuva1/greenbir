import React from 'react';
import './SubHeading.scss';

interface subheadingprops {
  children: string;
  style?: any;
}

const SubHeading = ({ children, style }: subheadingprops) => {
  return (
    <div className='subheading-container' style={style}>
      <p>{children}</p>
    </div>
  );
};

export default SubHeading;
