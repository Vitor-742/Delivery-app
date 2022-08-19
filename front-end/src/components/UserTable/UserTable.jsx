import { useContext, useEffect } from 'react';
import UserCell from './UserCell';
import { ManagerContext } from '../../pages/admin/Context';

export default function UserTable() {
  const { users, getUsers } = useContext(ManagerContext);

  useEffect(() => {
    getUsers();
  }, [users]);

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
            <UserCell key={ user.id } data={ user } index={ i } />
          ))}
      </tbody>
    </table>
  );
}
