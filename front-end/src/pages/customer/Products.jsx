import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ListProducts from '../../components/ListProducts/ListProducts';
import calculateTotal from '../../utils/calculateTotal';

export default function Products() {
  const [allProducts, setProducts] = useState([]);
  const [total, setTotal] = useState(calculateTotal);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  useEffect(() => {
    window.addEventListener('storage', () => {
      setTotal(calculateTotal);
    });
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (!cartLocalStorage) localStorage.setItem('cart', '[]');
  }, []);
  const history = useHistory();

  function handleClick() {
    history.push('/customer/checkout');
  }

  useState(() => {
    try {
      axiosInstance.get('/customer/products').then((resolve) => {
        setProducts(resolve.data);
      });
    } catch (err) {
      if (err.response.status === NOT_FOUND) setError(true);
    }
  }, []);

  // const btnCart = () => {
  //   history.push('/customer/checkout');
  // };

  // useEffect(() => {
  //   window.addEventListener('storage', () => {
  //     setTotal(calculateTotal);
  //   });
  // }, []);

  return (
    <>
      <NavBar />
      <ListProducts data={ allProducts } />
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ handleClick }
        disabled={ !total }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          {total.toFixed(2).toString().replace(/\./, ',')}
        </span>
      </button>
    </>
  );
}
