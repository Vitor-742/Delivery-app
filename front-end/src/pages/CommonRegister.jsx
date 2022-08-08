import React, { useState } from "react";

export default function CommonRegister() {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  return (
    <div className="login-container">
      <form className="login-form">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          data-testid="common_register__input-name"
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          value={inputs.name}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          data-testid="common_register__input-email"
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          value={inputs.email}
        />
        <label>Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          data-testid="common_register__input-password"
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          value={inputs.password}
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          onClick={(e) => console.log(inputs)}
        >
          CADASTRAR
        </button>
        <span data-testid="common_register__element-invalid_register" />
      </form>
    </div>
  );
}
