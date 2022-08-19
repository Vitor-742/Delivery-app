import React from 'react';
import ManageForm from '../../components/ManageForm/ManageForm';
import UserTable from '../../components/UserTable/UserTable';

export default function Manage() {
  return (
    <div>
      <ManageForm />
      <UserTable />
    </div>
  );
}
