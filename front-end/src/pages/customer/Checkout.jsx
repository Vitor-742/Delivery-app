import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function Checkout() {
  const [allCartProducts, setCartProducts] = useState([]);
  useState(() => {
    setCartProducts(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Finalizar Pedido</h1>
      <span>
        {allCartProducts.map((product, ind) => (
          <div key={ ind }>
            <p
              data-testid={ `customer_checkout__element-order-table-item-number-${ind}` }
            >
              {ind}
            </p>
            <p data-testid={ `customer_checkout__element-order-table-name-${ind}` }>
              {product.name}
            </p>
            <p data-testid={ `customer_checkout__element-order-table-quantity-${ind}` }>
              {product.quantity}
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-unit-price-${ind}` }
            >
              {product.price}
            </p>
            <p
              data-testid={
                `customer_checkout__element-order-table-sub-total-${ind}`
              }
            >
              {(parseFloat(product.price) * product.quant).toFixed(2)}
            </p>
            <p data-testid={ `customer_checkout__element-order-table-remove-${ind}` }>
              Remover
            </p>
          </div>))}
        <span data-testid="customer_checkout__element-order-total-price">
          {allCartProducts
            .reduce((acc, item) => item.quant * parseFloat(item.price) + acc, 0)
            .toFixed(2)
            .replace('.', ',')}
        </span>
      </span>
      <h1>Detalhes e endereço para entrega</h1>
      <span>
        <select
          name="select"
          data-testid="customer_checkout__select-seller"
        >
          <option value="valor1">Valor 1</option>
        </select>
        <input
          type="text"
          placeholder="endereço"
          data-testid="customer_checkout__input-address"
        />
        <input
          type="number"
          placeholder="numero"
          data-testid="customer_checkout__input-addressNumber"
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar

        </button>
      </span>
    </>
  );
}
