import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CommonLogin from './pages/CommonLogin';
import CommonRegister from './pages/CommonRegister';
import Products from './pages/customer/Products';
import Manage from './pages/admin/Manage';
import Checkout from './pages/customer/Checkout';
import SellerOrders from './pages/seller/SellerOrders';
import OrderDetails from './pages/customer/OrderDetails';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
        <CommonLogin />
      </Route>
      <Route path="/login" component={ CommonLogin } />
      <Route exact path="/register" component={ CommonRegister } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/admin/manage" component={ Manage } />
    </Switch>
  );
}

export default App;
