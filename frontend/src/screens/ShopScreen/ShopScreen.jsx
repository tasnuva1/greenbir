import React from 'react';
import './ShopScreen.scss';

import products from '../../products';

import MainContent from '../../components/MainContent/MainContent';
import ButtonLabel from '../../components/ButtonLabel/ButtonLabel';
import Button1 from '../../components/Button1/Button1';
import Heading2 from '../../components/Heading2/Heading2';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';

const ShopScreen = () => {
  return (
    <div className='shop-screen-container'>
      <div className='shop-screen-inerr'>
        <Header />
        <MainContent />
        <div className='shopmaincontent-btn'>
          <ButtonLabel amound={600} />
          <Button1>buy now</Button1>
        </div>
        <div className='production-whole-container'>
          <Heading2>LATEST PRODUCTS</Heading2>
          <div className='product-list'>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                heading={product.name}
                to={`/product/${product._id}`}
                img={product.image}
                numReviews={product.numReviews}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
