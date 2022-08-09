import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function CommonLogin() {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const history = useHistory();

  function handleClick() {
    history.push('/register');
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="login">
          Login
          <input
            type="text"
            name="login"
            data-testid="common_login__input-email"
            onChange={ (e) => setInputs({ ...inputs, email: e.target.value }) }
            value={ inputs.email }
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            name="senha"
            data-testid="common_login__input-password"
            onChange={ (e) => setInputs({ ...inputs, password: e.target.value }) }
            value={ inputs.password }
          />
        </label>
        <button data-testid="common_login__button-login" type="button">
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ handleClick }
        >
          Ainda não tenho conta
        </button>
        <span data-testid="common_login__element-invalid-email" />
      </form>
    </div>
  );
}
