import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function SellerOrders() {
  const [order, setOrder] = useState([]);
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  useEffect(() => {
    axiosInstance.get('/seller/orders').then((response) => {
      setOrder(response);
    });
  }, []);

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`seller/orders/${id}`);
  };

  return (
    <>
      <NavBar />
      <ol>
        {order.map((item) => (
          <li key={ item.id }>
            <button type="button" onClick={ () => handleClick(item.id) }>
              <p data-testid={ `seller_orders__element-order-id-${item.id}` }>
                {item.id}
              </p>
              <p data-testid={ `seller_orders__element-delivery-status-${item.id}` }>
                {item.status}
              </p>
              <p data-testid={ `seller_orders__element-order-date-${item.id}` }>
                {item.saleDate}
              </p>
              <p data-testid={ `seller_orders__element-card-price-${item.id}` }>
                {item.totalPrice}
              </p>
              <p data-testid={ `seller_orders__element-card-address-${item.id}` }>
                {item.deliveryAddress}
              </p>
            </button>
          </li>))}
      </ol>
    </>
  );
}
