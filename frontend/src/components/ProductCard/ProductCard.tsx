import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

// import product from '../../products';

interface ProductCardPropsTypes {
  img: string;
  heading: string;
  to: string;
  rating: number;
  numReviews: number;
  price: number;
}
const ProductCard = ({
  img,
  heading,
  to,
  rating,
  numReviews,
  price,
}: ProductCardPropsTypes) => {
  return (
    <div className='product-card-container'>
      <div className='product-card-inerr'>
        <Link to={to}>
          <img src={img} alt='product' className='product-card-img' />
        </Link>
        <div className='product-card-contain'>
          <div className='product-card-contain-inner'>
            <Link to={to}>
              <h2>{heading}</h2>
            </Link>
            <Rating value={rating} text={`${numReviews} reviews`} />
            <h3>{price} TK</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
