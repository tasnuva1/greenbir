import React from 'react';
import Header from '../../components/Header/Header';
import './ContectScreen.scss';

import green from '../../images/solidcolorgreen.svg';
import bg1 from '../../images/ContectPage/bg1.svg';

const ContectScreen = () => {
  return (
    <div
      className='contect-screen-bg'
      style={{
        backgroundImage: `url(${green})`,
      }}
    >
      <div
        className='contect-screen-bg-side'
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className='contect-screen-container'>
          <Header />
          Contect page
        </div>
      </div>
    </div>
  );
};

export default ContectScreen;
