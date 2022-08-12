import React from "react";

export default function ManageForm() {
  return (
    <div>
      <label htmlFor="name">
        Nome
        <input type="text" name="name" data-testid="admin_manage__input-name" />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          data-testid="admin_manage__input-password"
        />
      </label>
      <label htmlFor="role">
        Tipo
        <select name="role" data-testid="admin_manage__select-role">
          <option value="client" name="client">
            Cliente
          </option>
          <option value="seller" name="seller">
            Vendedor
          </option>
        </select>
      </label>
      <button data-testid="admin_manage__button-register">Cadastrar</button>
    </div>
  );
}
