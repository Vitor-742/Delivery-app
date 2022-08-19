import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function SellerOrders() {
  const [order, setOrders] = useState([]);
  const history = useHistory();
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const getOrdersFromSeller = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.role !== 'seller') history.push('/login');
    try {
      const { data } = await axiosInstance.get(`/seller/orders/${user.id}`);
      setOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrdersFromSeller();
  }, []);

  const handleClick = (id) => {
    history.push(`seller/orders/${id}`);
  };

  return (
    <>
      <NavBar />
      <ol>
        {order && order.map((item) => (
          <li key={ item.id }>
            <button
              type="button"
              data-testid={ `seller_orders__element-order-id-${item.id}` }
              onClick={ () => handleClick(item.id) }
            >
              <p>
                {item.id}
              </p>
              <p data-testid={ `seller_orders__element-delivery-status-${item.id}` }>
                {item.status}
              </p>
              <p data-testid={ `seller_orders__element-order-date-${item.id}` }>
                {item.saleDate}
              </p>
              <p data-testid={ `seller_orders__element-card-price-${item.id}` }>
                {item.totalPrice.replace('.', ',')}
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
