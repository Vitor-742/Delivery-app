const registerValidate = (name, email, password) => {
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
