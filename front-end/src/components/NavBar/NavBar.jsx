import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const logout = () => {
    localStorage.removeItem('user');
  };
  return (
    <nav>
      <ul>
        <Link to="customer/products">
          <li data-testid="customer_products__element-navbar-link-products">
            Produtos
          </li>
        </Link>
        <Link to="/customer/orders">
          <li data-testid="customer_products__element-navbar-link-orders">
            Pedidos
          </li>
        </Link>
        <li data-testid="customer_products__element-navbar-user-full-name">
          {name}
        </li>
        <Link to="/login" onClick={ logout }>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </li>
        </Link>
      </ul>
    </nav>
  );
}
