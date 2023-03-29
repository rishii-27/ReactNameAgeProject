import React, { useState } from 'react';
import AddUser from './Components/AddUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './Components/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className='container mb-5'>
      <h1 className='text-center'>Name Age Form </h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
