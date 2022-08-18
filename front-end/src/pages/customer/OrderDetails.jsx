import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function OrderDetails() {
  const [order, setOrder] = useState([]);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });
  useState(() => {
    try {
      axiosInstance.get('/customer/orders/:id').then((resolve) => {
        setOrder(resolve);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ID_STATUS = 'customer_order_details__element-order-details-label-delivery-status';
  const ID_ITEM_NUMBER = 'customer_order_details__element-order-table-item-number';
  const ID_NAME_ITEM = 'customer_order_details__element-order-table-name';
  const ID_QUANTITY_ITEM = 'customer_order_details__element-order-table-quantity';
  const ID_PRICE_ITEM = 'customer_order_details__element-order-table-sub-total';
  const ID_SUBTOTAL = 'customer_order_details__element-order-total-price';

  return (
    <>
      <NavBar />
      <h1>Detalhe do pedido</h1>
      <span>
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            pedido
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            vendedor
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            data
          </p>
          <p
            data-testid={ ID_STATUS }
          >
            entregue
          </p>
          <p
            data-testid="customer_order_details__button-delivery-check"
          >
            marcar como entregue
          </p>
        </div>
        <div>
          <ul>
            {order.map((item, ind) => (
              <li key={ ind }>
                <p
                  data-testid={ `${ID_ITEM_NUMBER}-${ind}` }
                >
                  {ind}
                </p>
                <p
                  data-testid={ `${ID_NAME_ITEM}-${ind}` }
                >
                  {item.name}
                </p>
                <p
                  data-testid={ `${ID_QUANTITY_ITEM}-${ind}` }
                >
                  {item.quantity}
                </p>
                <p
                  data-testid={ `${ID_PRICE_ITEM}-${ind}` }
                >
                  {item.price}
                </p>
                <p
                  data-testid={ `${ID_SUBTOTAL}-${ind}` }
                >
                  {parseFloat(item.price) * item.quantity}
                </p>
              </li>))}
          </ul>
        </div>
        <p>
          {
            order
              .reduce((acc, item) => parseFloat(item.price) * item.quantity + acc)
              .toFixed(2)
          }
        </p>
      </span>
    </>
  );
}
