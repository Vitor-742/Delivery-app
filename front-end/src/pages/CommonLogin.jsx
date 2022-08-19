import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MIN_LENGTH_PASSWORD = 5;

export default function CommonLogin() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [disableLogin, setDisablelogin] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const STATUS_OK = 200;

  const history = useHistory();

  function handleClick() {
    history.push('/register');
  }

  const routeHomePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      switch (user.role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'administrator':
        history.push('/admin/manage');
        break;
      default:
        history.push('/seller/orders');
        break;
      }
    }
  };

  useEffect(() => {
    routeHomePage();
  }, []);

  const getUser = async () => {
    try {
      console.log(inputs);
      const { status, data: { id, name, email, role, token } } = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: inputs,
      });
      localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));
      if (status === STATUS_OK && role === 'administrator') {
        history.push('./admin/manage');
      } else if (status === STATUS_OK && role === 'seller') {
        history.push('./seller/orders');
      } else if (status === STATUS_OK) history.push('./customer/products');
    } catch (error) {
      console.log(error);
      setIncorrectLogin(true);
    }
  };

  const ableBtnLogin = () => {
    const reg = /\S+@\S+\.\S+/;
    if (
      reg.test(inputs.email)
      && inputs.password.length >= MIN_LENGTH_PASSWORD
    ) {
      setDisablelogin(true);
    } else {
      setDisablelogin(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="login">
          Login
          <input
            type="text"
            name="login"
            data-testid="common_login__input-email"
            onChange={ (e) => {
              setInputs({ ...inputs, email: e.target.value });
              ableBtnLogin();
            } }
            value={ inputs.email }
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            name="senha"
            data-testid="common_login__input-password"
            onChange={ (e) => {
              setInputs({ ...inputs, password: e.target.value });
              ableBtnLogin();
            } }
            value={ inputs.password }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !disableLogin }
          onClick={ async () => getUser() }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleClick }
        >
          Ainda não tenho conta
        </button>
        { incorrectLogin && (
          <span data-testid="common_login__element-invalid-email">
            email ou senha incorreto
          </span>
        )}
      </form>
    </div>
  );
}
