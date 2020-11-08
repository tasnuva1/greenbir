import React, { useState } from 'react';
import './ProductScreen.scss';

import products from '../../products';
import Rating from '../../components/Rating/Rating';
import Button1 from '../../components/Button1/Button1';
import Header from '../../components/Header/Header';

import ReactImageMagnify from 'react-image-magnify';
// import {
//   GlassMagnifier,
//   // MOUSE_ACTIVATION,
//   // TOUCH_ACTIVATION
// } from 'react-image-magnifiers';

const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);

  // const [hover, sethover] = useState(false);

  // const [imageurl, setimageurl] = useState(product!.innerImages[0]);

  return (
    <div className='product-screen-container'>
      <div className='product-screen-inerr'>
        <Header />
        <div className='product-screen-top'>
          <div className='praduct-screen-left-box'>
            <Button1 className='product-screen-back'>go back</Button1>
            {/* <img
              src={product?.innerImages[0]}
              alt='item'
              className='product-screen-main-image1'
            /> */}
            {/* if(imageurl){' '}
            {
              <GlassMagnifier
                imageSrc={imageurl}
                imageAlt='Example'
                largeImageSrc={imageurl}
                allowOverflow={false} // Optional
                magnifierBorderColor='#fff'
                magnifierBackgroundColor='#40916c'
                // magnifierBorderColor: '##40916c',
                magnifierSize='35%'
                className='product-screen-main-image'
                style={{
                  width: '100%',
                  height: '40rem',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  objectFit: 'cover',
                }}
              />
            } */}
            <div className='zoom-container'>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: product?.innerImages[0]!,
                    width: 637,
                    height: 400,
                    imageClassName: 'product-screen-main-image',
                    style: {
                      // width: '100%',
                      // height: '40rem',
                      borderRadius: '2rem',
                      // overflow: 'hidden',
                      // object-fit: contain;
                      objectFit: 'cover',
                      // margin-top: 2rem;
                    },
                  },
                  largeImage: {
                    src: product?.innerImages[0]!,
                    width: 1000,
                    height: 1000,
                  },
                  // fadeDurationInMs: 0,
                  // hoverOffDelayInMs: 0,
                  // pressDuration: 0,
                  enlargedImageContainerDimensions: {
                    width: 600,
                    height: 500,
                  },
                  // isHintEnabled: true,
                  shouldUsePositiveSpaceLens: true,
                }}
              />
            </div>
            <div className='small-images-container'>
              {product?.innerImages.map((img) => (
                <img
                  src={img}
                  alt='item'
                  // onMouseEnter={'fs'}
                  // onMouseLeave={}
                />
              ))}
            </div>
          </div>
          <div className='product-screen-right-box'>
            <h1>{product?.name}</h1>
            <Rating
              value={product?.rating}
              text={`${product?.numReviews} reviews`}
            />
            <h3>{product?.price} TK</h3>
            <p>{product?.description}</p>

            <div className='status'>
              <p>status:</p>
              <p>{product!.countInStock! > 0 ? 'In Stock' : 'Out Of Stock'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
