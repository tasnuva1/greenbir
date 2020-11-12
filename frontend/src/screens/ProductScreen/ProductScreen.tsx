import React, { useState, useEffect } from 'react';
import './ProductScreen.scss';

// import products from '../../products';
import Rating from '../../components/Rating/Rating';
import Button1 from '../../components/Button1/Button1';
import Header from '../../components/Header/Header';

import ReactImageMagnify from 'react-image-magnify';

import axios from 'axios';

// import {
//   GlassMagnifier,
//   // MOUSE_ACTIVATION,
//   // TOUCH_ACTIVATION
// } from 'react-image-magnifiers';

const ProductScreen = ({ match }) => {
  interface productmodal {
    _id: string;
    name: string;
    image: string;
    innerImages: string[];
    DetaileDescription?: string[];
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  }
  // let defaultProduct: productmodal;

  const [product, setProduct]: [
    productmodal,
    (product: productmodal) => void
  ] = useState({});
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<
    boolean
  >(true);
  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get<productmodal>(`/api/products/${match.params.id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(true);
        });
    };
    fetchProduct();
  }, [match.params.id]);

  if (!loading) {
    return (
      <div className='product-screen-container'>
        <div className='product-screen-inerr'>
          <Header />
          <div className='product-screen-top'>
            <div className='praduct-screen-left-box'>
              <Button1 className='product-screen-back'>go back</Button1>
              <div className='zoom-container'>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: product.innerImages[0],
                      width: 637,
                      height: 400,
                      imageClassName: 'product-screen-main-image',
                      style: {
                        borderRadius: '2rem',
                        objectFit: 'cover',
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
                {product?.innerImages.map((img, index) => (
                  <img
                    src={img}
                    alt='item'
                    // onMouseEnter={'fs'}
                    // onMouseLeave={}
                    key={index}
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
                <p>
                  {product!.countInStock! > 0 ? 'In Stock' : 'Out Of Stock'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=''>
        <div>ProductScreen</div>
        <h1>Lodding</h1>
      </div>
    );
  }
};

export default ProductScreen;

// import React from 'react';

// const ProductScreen = () => {
//   return <div>ProductScreen</div>;
// };

// export default ProductScreen;
