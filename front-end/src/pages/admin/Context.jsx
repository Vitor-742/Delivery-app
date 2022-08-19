import axios from 'axios';
import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ManagerContext = createContext();

export default function ManagerContextProvider({ children }) {
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

  const value = useMemo(
    () => ({
      users,
      setUsers,
      getUsers,
    }),
    [users, setUsers],
  );

  return (
    <ManagerContext.Provider value={ value }>{children}</ManagerContext.Provider>
  );
}

ManagerContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.obj),
}.isRequired;
