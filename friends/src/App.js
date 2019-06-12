import React, { useState, useEffect, } from 'react';
import Axios from 'axios';
import ListContainer from './components/FriendList/ListContainer';

function App() {
  const url = `http://localhost:5000/friends`;

  const [friends, setFriends] = useState([]);
  const [errorMsg, setErrorMsg] = useState(``);
  const [spinner, setSpinner] = useState(false);

  const getFriends = () => {
    setSpinner(true);

    Axios(url)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => {
      setErrorMsg(err.statusText);
    })
    .finally(() => {
      setSpinner(false);
    })
  };

  const handleAddSubmit = (newFriend) => {
    Axios.post(url, newFriend)
    .then(response => {
      setFriends(response.data);
    })
    .catch(err => setErrorMsg(err.message));
  }

  useEffect(() => {
    getFriends();
  });

  return(
    <div>
      {spinner && <div>Loading friends...</div>}
      {errorMsg && <div>{errorMsg}</div>}
      <ListContainer friends={friends} />
    </div>
  );
}

export default App;
