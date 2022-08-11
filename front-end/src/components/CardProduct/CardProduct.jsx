import React, { useState } from 'react';
import { number, string } from 'prop-types';

export default function CardProduct({
  id = 0,
  name = 'PlaceHolder',
  image = 'http://localhost:3001/images/heineken_600ml.jpg',
  price = 100,
}) {
  const [quantity, setQuantity] = useState(0);
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
          onClick={ () => {
            setQuantity((prevValue) => {
              const updatedValue = prevValue - 1;
              return updatedValue;
            });
          } }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="text"
          value={ quantity }
          readOnly
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ () => {
            setQuantity((prevValue) => {
              const updatedValue = prevValue + 1;
              return updatedValue;
            });
          } }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
    </div>
  );
}

CardProduct.propTypes = {
  id: number,
  name: string,
  image: string,
  price: number,
}.isRequired;
