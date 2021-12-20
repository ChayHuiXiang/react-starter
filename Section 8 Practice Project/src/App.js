import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const submitHandler = (userData) => {
    setUsersList((prevUsersList)=> {
      return [...prevUsersList, userData];
    });
  }

  return (
    <div>
      <AddUsers onSubmit={submitHandler}/>
      <UsersList usersList={usersList}/>
    </div>
  );
}

export default App;
