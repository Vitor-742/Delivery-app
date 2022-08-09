const registerValidate = (name, email, password) => {
  /**
   * Validação com Regex consultada em
   * https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
   */
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const NAME_LENGTH = 12;
  const PASSWORD_LENGTH = 6;
  const validateEmail = emailRegex.test(email);

  return (
    !validateEmail
    || password.length < PASSWORD_LENGTH
    || name.length <= NAME_LENGTH
  );
};

export default registerValidate;
