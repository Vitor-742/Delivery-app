import React, { useState } from 'react';
import axios from 'axios';

export default function ManageForm() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [disabledRegister, setDisableRegister] = useState(false);
  const [invalidRegister, setInvalidRegister] = useState(false);

  const MIN_LENGTH_PASSWORD = 5;
  const MIN_LENGTH_NAME = 11;
  const reg = /\S+@\S+\.\S+/;
  const validEmail = reg.test(inputs.email);
  const validPass = inputs.password.length > MIN_LENGTH_PASSWORD;
  const validName = inputs.name.length > MIN_LENGTH_NAME;
  const STATUS = 201;
  const user = localStorage.getItem('user');
  const corte = 91;
  const t = user.slice(corte);
  const token = t.split('"');

  const createUser = async () => {
    try {
      setInvalidRegister(true);
      const { status } = await axios({
        headers: { Authorization: token[0] },
        hasToken: true,
        method: 'post',
        url: 'http://localhost:3001/admin/manage',
        data: inputs,
      });
      if (status === STATUS) {
        setInputs({
          name: '',
          email: '',
          password: '',
          role: 'customer',
        });
        return status;
      }
    } catch (error) {
      setInvalidRegister(true);
    }
  };

  const ableBtnRegister = () => {
    if (
      validName
      && validEmail
      && validPass
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
        onClick={ async () => createUser() }
      >
        Cadastrar
      </button>
      {invalidRegister && (
        <span data-testid="admin_manage__element-invalid-register">
          Um usuário já existe com esse email!
        </span>
      )}
    </div>
  );
}
