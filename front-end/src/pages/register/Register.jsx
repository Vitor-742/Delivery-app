import React from 'react';
import Btn from '../../components/btn/Btn';
import './register.css';

function Register() {
  return (
    <div>
      <h2>Cadastro</h2>
      <div className="form_container">
        <form className="register">
          <label htmlFor="name">
            <span>Nome</span>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              data-testid="common_register__input-name"
            />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="seu-email@site.com.br"
              data-testid="common_register__input-email"
            />
          </label>
          <label htmlFor="password">
            <span>Senha</span>
            <input
              type="password"
              name="password"
              placeholder="*******"
              data-testid="common_register__input-password"
            />
          </label>
          <Btn
            styleBtn="btn_green"
            textBtn="CADASTRAR"
            data-testid="common_register__button-register"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
