import React from 'react';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          Pedidos
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          Usuário
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          Sair
        </li>
      </ul>
    </nav>
  );
}
