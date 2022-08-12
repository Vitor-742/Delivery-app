import React, { useState } from 'react';

const MIN_LENGTH_PASSWORD = 5;
const MIN_LENGTH_NAME = 11;

export default function ManageForm() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [disabledRegister, setDisableRegister] = useState(false);

  const ableBtnRegister = () => {
    const reg = /\S+@\S+\.\S+/;
    if (
      reg.test(inputs.email)
      && inputs.password.length > MIN_LENGTH_PASSWORD
      && inputs.name.length > MIN_LENGTH_NAME
    ) {
      setDisableRegister(true);
    } else {
      setDisableRegister(false);
    }
  };

  return (
    <div>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          data-testid="admin_manage__input-name"
          onChange={ (e) => {
            setInputs({ ...inputs, name: e.target.value });
            ableBtnRegister();
          } }
          value={ inputs.name }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          data-testid="admin_manage__input-email"
          onChange={ (e) => {
            setInputs({ ...inputs, email: e.target.value });
            ableBtnRegister();
          } }
          value={ inputs.email }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          data-testid="admin_manage__input-password"
          onChange={ (e) => {
            setInputs({ ...inputs, password: e.target.value });
            ableBtnRegister();
          } }
          value={ inputs.password }
        />
      </label>
      <label htmlFor="role">
        Tipo
        <select
          name="role"
          data-testid="admin_manage__select-role"
          onChange={ (e) => {
            setInputs({ ...inputs, role: e.target.value });
            ableBtnRegister();
          } }
          value={ inputs.role }
        >
          <option value="customer" name="customer">
            Cliente
          </option>
          <option value="seller" name="seller">
            Vendedor
          </option>
        </select>
      </label>
      <button
        type="button"
        data-testid="admin_manage__button-register"
        disabled={ !disabledRegister }
      >
        Cadastrar
      </button>
    </div>
  );
}
