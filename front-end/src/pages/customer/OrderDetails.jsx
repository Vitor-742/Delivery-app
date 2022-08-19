import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [seller, setSeller] = useState({});

  const { id } = useParams();
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const getOrderDetails = async () => {
    try {
      const { data } = await axiosInstance.get(`/customer/orders/${id}`);
      setOrder(data.order);
      setProducts(data.products);
      setSeller(data.seller);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getOrderDetails();
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
            {order.id}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {seller.name}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {moment(order.saleDate).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid={ ID_STATUS }
          >
            {order.status}
          </p>
          <button
            type="button"
            disabled={ order.status !== 'Em Trânsito' }
            data-testid="customer_order_details__button-delivery-check"
          >
            marcar como entregue
          </button>
        </div>
        <div>
          <ul>
            {products.map((item, ind) => (
              <li key={ ind }>
                <p
                  data-testid={ `${ID_ITEM_NUMBER}-${ind}` }
                >
                  {ind}
                </p>
                <p
                  data-testid={ `${ID_NAME_ITEM}-${ind}` }
                >
                  {item.product.name}
                </p>
                <p
                  data-testid={ `${ID_QUANTITY_ITEM}-${ind}` }
                >
                  {item.quantity}
                </p>
                <p
                  data-testid={ `${ID_PRICE_ITEM}-${ind}` }
                >
                  {item.product.price}
                </p>
                <p
                  data-testid={ `${ID_SUBTOTAL}-${ind}` }
                >
                  {parseFloat(item.product.price) * item.quantity}
                </p>
              </li>))}
          </ul>
        </div>
        <p data-testid="customer_order_details__element-order-total-price">
          {
            order.totalPrice.replace(/\./, ',')
          }
        </p>
      </span>
    </>
  );
}
