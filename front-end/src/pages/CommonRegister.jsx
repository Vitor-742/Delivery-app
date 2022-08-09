import React, { useState } from 'react';
import registerValidate from '../utils/registerValidate';

export default function CommonRegister() {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            data-testid="common_register__input-name"
            onChange={ (e) => setInputs({ ...inputs, name: e.target.value }) }
            value={ inputs.name }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            data-testid="common_register__input-email"
            onChange={ (e) => setInputs({ ...inputs, email: e.target.value }) }
            value={ inputs.email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_register__input-password"
            onChange={ (e) => setInputs({ ...inputs, password: e.target.value }) }
            value={ inputs.password }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          onClick={ () => console.log(inputs) }
          disabled={ registerValidate(
            inputs.name,
            inputs.email,
            inputs.password,
          ) }
        >
          CADASTRAR
        </button>
        <span data-testid="common_register__element-invalid_register" />
      </form>
    </div>
  );
}
