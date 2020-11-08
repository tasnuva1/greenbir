import React from 'react';
import './HomeScreen.scss';

import arrow from '../../icons/arrow.svg';
import BlurContainer from '../../components/BlurContainer/BlurContainer';
import { Link } from 'react-router-dom';
import Heading1 from '../../components/Heading1/Heading1';
import SubHeading from '../../components/SubHeading/SubHeading';

import bg1 from '../../images/bg1-v4.jpg';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  return (
    <>
      <div className='home-main-bg' style={{ backgroundImage: `url(${bg1})` }}>
        <div className='home-screen-container'>
          <Header />
          <main className='main-container'>
            <div className='main-inerr'>
              <Heading1>Birds are </Heading1>
              <Heading1>the beauty.</Heading1>
              <SubHeading>the beauty that can't be described.</SubHeading>
              {/* <h1> Birds are </h1>
          <h1>the beauty.</h1>
          <p>the beauty that can't be described.</p> */}
            </div>
            <div className='main-button-container'>
              <button>
                <Link to='/shop'>
                  explore
                  <span>
                    <img src={arrow} alt='arrow' />
                  </span>
                </Link>
              </button>
            </div>
            <div className='blur-outer'>
              <BlurContainer
                heading='info'
                para='The site featuring a wide range of birds ranging from a variety of
        pigeons to unusual or unique birds.'
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
