import React, { useState, } from 'react';

export default function NewFriendForm(props) {
  const [friend, setFriend] = useState({name: '', age: '', email: '',});

  const handleOnChange = (event) => {
    const friendData = friend;

    if(event.target.placeholder.includes(`Name`)) {
      friendData.name = event.target.value;
      setFriend(friendData);
    }
    if(event.target.placeholder.includes(`Age`)) {
      friendData.age = event.target.value;
      setFriend(friendData);
    }
    if(event.target.placeholder.includes(`Email`)) {
      friendData.email = event.target.value;
      setFriend(friendData);
    }
  }

  return(
    <div>
      <h2>Add New Friend</h2>
      <form>
        <input onChange={handleOnChange} value={friend.name} placeholder='Enter Name' />
        <input onChange={handleOnChange} value={friend.age} placeholder='Enter Age' />
        <input onChange={handleOnChange} value={friend.email} placeholder='Enter Email' />
      </form>
    </div>
  );
}
