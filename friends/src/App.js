import React, { useState, useEffect, } from 'react';
import Axios from 'axios';

function App() {
  const [friends, setFriends] = useState([]);
  const [errorMsg, setErrorMsg] = useState(``);
  const [spinner, setSpinner] = useState(false);

  const getFriends = () => {
    setSpinner(true);

    Axios(`http://localhost:5000/friends`)
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

  useEffect(() => {
    getFriends();
  });

  return;
}

export default App;
