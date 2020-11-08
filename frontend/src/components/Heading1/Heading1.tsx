import React from 'react';
import './Heading1.scss';

interface heading1props {
  children: string;
}

const Heading1 = ({ children }: heading1props) => {
  return (
    <div className='heading1-container'>
      <h1>{children}</h1>
    </div>
  );
};

export default Heading1;
