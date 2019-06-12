import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import ListContainer from './components/FriendList/ListContainer';
import NewFriendForm from './components/NewFriend/NewFriendForm';

function App() {
  const url = `http://localhost:5000/friends`;

  const [friends, setFriends] = useState([]);
  const [errorMsg, setErrorMsg] = useState(``);

  useEffect(() => {
    getFriends();
  });

  function getFriends() {

    axios.get(url)
    .then(response => {
      if(JSON.stringify(friends) !== JSON.stringify(response.data)) {
        setFriends(response.data);
      }
    })
    .catch(err => {
      setErrorMsg(err.message);
    });
  }

  const handleAddSubmit = (newFriend) => {
    axios.post(url, newFriend)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => setErrorMsg(err.message));
  }

  return(
    <div>
      {errorMsg && <div>{errorMsg}</div>}
      <ListContainer friends={friends} />
      <NewFriendForm addSubmitHandler={handleAddSubmit} />
    </div>
  );
}

export default App;
