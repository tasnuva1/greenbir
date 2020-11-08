import React from 'react';
import Header from '../../components/Header/Header';
import './BlogScreen.scss';

const BlogScreen = () => {
  return (
    <div className='blog-screen-bg'>
      <div className='blog-screen-container'>
        <Header />
        Blog page
      </div>
    </div>
  );
};

export default BlogScreen;
