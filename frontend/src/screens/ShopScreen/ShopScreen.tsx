import React, { useEffect, useState } from 'react';
import './ShopScreen.scss';

// import products from '../../products';

import MainContent from '../../components/MainContent/MainContent';
import ButtonLabel from '../../components/ButtonLabel/ButtonLabel';
import Button1 from '../../components/Button1/Button1';
import Heading2 from '../../components/Heading2/Heading2';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';

import axios from 'axios';

const ShopScreen = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };

  //   fetchProduct();
  // }, []);

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
  const defaultProduct: productmodal[] = [];

  const [products, setProduct]: [
    productmodal[],
    (product: productmodal[]) => void
  ] = useState(defaultProduct);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<
    boolean
  >(true);
  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    axios
      .get<productmodal[]>('/api/products/')
      .then((response) => {
        setProduct(response.data);
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
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
  } else {
    return (
      <div className=''>
        {error} <h1>No showing</h1>{' '}
      </div>
    );
  }
};

export default ShopScreen;
