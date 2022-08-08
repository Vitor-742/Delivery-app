import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import CommonLogin from './pages/CommonLogin';
import { Switch, Route, Redirect } from 'react-router-dom';
import CommonRegister  from './pages/CommonRegister';

function App() {
  return (
    <Switch>
      <Route path='/'><Redirect to="/login" /> : <CommonLogin /></Route>
      <Route path='/login' component={ CommonLogin } />
      <Route path='/register' component={ CommonRegister } />
    </Switch>
  );
}

export default App;
