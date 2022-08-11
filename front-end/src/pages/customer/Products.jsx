import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import ListProducts from '../../components/ListProducts/ListProducts';

export default function Products() {
  const [allProducts, setProducts] = useState([]);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  useState(() => {
    try {
      axiosInstance.get('/customer/products').then((resolve) => {
        setProducts(resolve.data);
      });
    } catch (err) {
      if (err.response.status === NOT_FOUND) setError(true);
    }
  }, []);

  return (
    <>
      <NavBar />
      <ListProducts data={ allProducts } />
    </>
  );
}
