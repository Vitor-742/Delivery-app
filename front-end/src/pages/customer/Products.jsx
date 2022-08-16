import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import ListProducts from '../../components/ListProducts/ListProducts';

export default function Products() {
  const [allProducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
    if (!cartLocalStorage) localStorage.setItem('carrinho', '[]');
    else setCart(cartLocalStorage);
  }, []);

  useState(() => {
    try {
      axiosInstance.get('/customer/products').then((resolve) => {
        setProducts(resolve.data);
      });
    } catch (err) {
      if (err.response.status === NOT_FOUND) setError(true);
    }
  }, []);

  const history = useHistory();

  const btnCart = () => {
    history.push('/customer/checkout');
  };

  return (
    <>
      <NavBar />
      <ListProducts data={ allProducts } func={ setCart } />
      <span data-testid="customer_products__checkout-bottom-value">
        {cart
          .reduce((acc, item) => item.quant * parseFloat(item.price) + acc, 0)
          .toFixed(2)
          .replace('.', ',')}
      </span>
      <button
        type="button"
        onClick={ btnCart }
        data-testid="customer_products__button-cart"
      >
        Ver carrinho

      </button>
    </>
  );
}
