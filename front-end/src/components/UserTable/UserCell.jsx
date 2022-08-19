import axios from 'axios';
import PropTypes from 'prop-types';

export default function UserCell({
  data: { id, name, email, role },
  handler,
  index: i,
}) {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });
  const TEST_ID = 'admin_manage__element-user-table-';

  const handleDelete = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axiosInstance.delete(`/user/delete/${id}`, {
        headers: { Authorization: user.token },
      });
      handler(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td data-testid={ `${TEST_ID}item-number-${i}` }>{i + 1}</td>
      <td data-testid={ `${TEST_ID}name-${i}` }>{name}</td>
      <td data-testid={ `${TEST_ID}email-${i}` }>{email}</td>
      <td data-testid={ `${TEST_ID}role-${i}` }>{role}</td>
      <td>
        <button
          data-testid={ `${TEST_ID}remove-${i}` }
          type="button"
          onClick={ handleDelete }
        >
          Deletar
        </button>
      </td>
    </tr>
  );
}

UserCell.propTypes = {
  data: PropTypes.obj,
  handler: PropTypes.function,
  index: PropTypes.number,
}.isRequired;
