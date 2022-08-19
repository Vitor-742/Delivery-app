import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import OrderItem from '../../components/OrderItem/OrderItem';

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const getOrdersFromUser = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axiosInstance.get(`/seller/orders/${user.id}`);
      console.log(data);
      setOrders(data);
    } catch (err) {
      if (error.message.includes('401')) {
        history.push('/customer/products');
      }
    }
  };

  useEffect(() => {
    getOrdersFromUser();
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {orders.map((order) => (
          <OrderItem key={ order.id } data={ order } />
        ))}
      </main>
    </div>
  );
}
