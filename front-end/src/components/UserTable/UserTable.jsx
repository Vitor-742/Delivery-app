import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCell from './UserCell';

export default function UserTable() {
  const [users, setUsers] = useState([]);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
  });

  const getUsers = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axiosInstance.get('/users', {
        headers: { Authorization: user.token },
      });
      if (data) setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Role</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users
          && users.map((user, i) => (
            <UserCell key={ user.id } data={ user } handler={ setUsers } index={ i } />
          ))}
      </tbody>
    </table>
  );
}
