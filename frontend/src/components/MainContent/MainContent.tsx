import React from 'react';
import './MainContent.scss';
import CSS from 'csstype';

import Heading1 from '../Heading1/Heading1';
import SubHeading from '../SubHeading/SubHeading';
import ButtonLabel from '../ButtonLabel/ButtonLabel';
import Button1 from '../Button1/Button1';

const SubHeadingStyles: CSS.Properties = {
  marginTop: '1rem',
};

const MainContent = () => {
  return (
    <div className='shopmaincontent-container'>
      <div className='shopmaincontent-headings'>
        <Heading1>White</Heading1>
        <Heading1>Pigeon</Heading1>
        <SubHeading style={SubHeadingStyles}>Powered by Greenbir</SubHeading>
      </div>
    </div>
  );
};

export default MainContent;
