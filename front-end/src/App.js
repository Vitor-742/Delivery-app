import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CommonLogin from './pages/CommonLogin';
import CommonRegister from './pages/CommonRegister';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
        <CommonLogin />
      </Route>
      <Route path="/login" component={ CommonLogin } />
      <Route path="/register" component={ CommonRegister } />
    </Switch>
  );
}

export default App;
