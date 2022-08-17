import React, { useState } from 'react';
import { number, string } from 'prop-types';

export default function CardProduct({
  id = 0,
  name = 'PlaceHolder',
  image = 'http://localhost:3001/images/heineken_600ml.jpg',
  price = 100,
}) {
  const [quantity, setQuantity] = useState(0);
  const updateLS = (quant) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartWithoutItem = cart.filter((i) => i.id !== id);
    cartWithoutItem.push({ name, quantity: quant, price, id });
    localStorage.setItem('cart', JSON.stringify(cartWithoutItem));
  };

  function localCart(value) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (value === 0) {
      cart = cart.filter((e) => e.id !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const exists = cart.some((e) => e.id === id);
      if (exists) {
        cart = cart.map((e) => {
          if (e.id === id) {
            e.quantity = value;
            return e;
          }
          return e;
        });
        console.log(cart);
      } else {
        cart.push({ id, product: name, quantity: value, price });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  function handleQuantity(value) {
    if (value >= 0) {
      localCart(value);
      window.dispatchEvent(new Event('storage'));
      updateLS(value);
      setQuantity(value);
    }
  }

  return (
    <div>
      <h4 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h4>
      <img
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <button
          type="button"
          // onClick={ () => {
          //   setQuantity((prevValue) => {
          //     if (prevValue === 0) return 0;
          //     const updatedValue = prevValue - 1;
          //     updateLS(updatedValue);
          //     return updatedValue;
          //   });
          // } }
          onClick={ () => handleQuantity(quantity - 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="text"
          value={ quantity }
          onChange={ ({ target }) => handleQuantity(target.value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          // onClick={ () => {
          //   setQuantity((prevValue) => {
          //     const updatedValue = prevValue + 1;
          //     updateLS(updatedValue);
          //     return updatedValue;
          //   });
          // } }
          onClick={ () => handleQuantity(quantity + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace(/\./, ',')}
      </p>
    </div>
  );
}

CardProduct.propTypes = {
  id: number,
  name: string,
  image: string,
  price: number,
}.isRequired;
