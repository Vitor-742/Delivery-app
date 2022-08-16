import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

export default function ListProducts({ data: allProducts, func: setCart }) {
  return (
    allProducts.length > 0
    && allProducts.map(({ id, name, url_image: image, price }, i) => (
      <CardProduct
        key={ i }
        id={ id }
        name={ name }
        image={ image }
        price={ price }
        func={ setCart }
      />
    ))
  );
}
