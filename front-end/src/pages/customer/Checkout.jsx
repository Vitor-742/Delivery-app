import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function Checkout() {
  const [allCartProducts, setCartProducts] = useState([]);

  const [user, setUser] = useState([]);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const history = useHistory();

  useState(() => {
    setCartProducts(JSON.parse(localStorage.getItem('cart')));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  function removeItemFromCart(id) {
    const cart = allCartProducts.filter((e) => e.id !== id);
    setCartProducts(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async function handleSubmit() {
    const result = await axiosInstance.post(
      '/customer/checkout',
      {
        userId: user.id,
        sellerId: 2,
        totalPrice: allCartProducts.reduce(
          (acc, item) => item.quantity * parseFloat(item.price) + acc,
          0,
        ),
        deliveryAddress: 'Rua das Rosas, 37',
        deliveryNumber: '123456',
        products: allCartProducts,
      },
      { headers: { Authorization: user.token } },
    );
    console.log(result);
    history.push(`/customer/orders/${result.data.id}`);
  }

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
              {ind + 1}
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-name-${ind}` }
            >
              {product.name}
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-quantity-${ind}` }
            >
              {product.quantity}
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-unit-price-${ind}` }
            >
              {product.price.toString().replace(/\./, ',')}
            </p>
            <p
              data-testid={ `customer_checkout__element-order-table-sub-total-${ind}` }
            >
              {(parseFloat(product.price) * product.quantity)
                .toFixed(2)
                .toString()
                .replace(/\./, ',')}
            </p>
            <button
              type="button"
              onClick={ () => removeItemFromCart(product.id) }
              data-testid={ `customer_checkout__element-order-table-remove-${ind}` }
            >
              Remover
            </button>
          </div>
        ))}
        <span data-testid="customer_checkout__element-order-total-price">
          {allCartProducts
            .reduce(
              (acc, item) => item.quantity * parseFloat(item.price) + acc,
              0,
            )
            .toFixed(2)
            .replace('.', ',')}
        </span>
      </span>
      <h1>Detalhes e endereço para entrega</h1>
      <span>
        <select name="select" data-testid="customer_checkout__select-seller">
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
          onClick={ handleSubmit }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar
        </button>
      </span>
    </>
  );
}
