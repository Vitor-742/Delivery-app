import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function CommonRegister() {
  const history = useHistory();
  const MIN_NAME_LENGTH = 12;
  const emailRegex = /\S+@\S+\.\S+/;
  const MIN_PASSWORD_LENGTH = 6;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateName = name.length >= MIN_NAME_LENGTH;
  const validateEmail = emailRegex.test(email);
  const validatePassword = password.length >= MIN_PASSWORD_LENGTH;
  const [isDisabled, setDisabled] = useState(false);
  const [invalidRegister, setInvalidRegister] = useState(false);

  const handleSubmitBtn = () => {
    if (validateName && validateEmail && validatePassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setInvalidRegister(false);
      const { data } = await axiosInstance.post('/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    } catch (err) {
      setInvalidRegister(true);
    }
  };

  useEffect(() => {
    handleSubmitBtn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, password]);

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
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            data-testid="common_register__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            data-testid="common_register__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          onClick={ (e) => handleSubmit(e) }
          disabled={ isDisabled }
        >
          CADASTRAR
        </button>
        {invalidRegister && (
          <p data-testid="common_register__element-invalid_register">
            revise dados e tente novamente
          </p>
        )}
      </form>
    </div>
  );
}
