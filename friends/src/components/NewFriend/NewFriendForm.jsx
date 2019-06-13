import React, { useState, } from 'react';
import FormContainer from './StyledComponents/FormContainer';

export default function NewFriendForm(props) {
  let id = props.match.params.id.trim();
  const initialFormState = id? props.getFriend(id) : {
    name: '',
    age: '',
    email: '',
  };

  const [friend, setFriend] = useState(initialFormState);

  const handleOnChange = (event) => {

    if(event.target.placeholder.includes(`Name`)) {
      setFriend({...friend, name: event.target.value,});
    }
    if(event.target.placeholder.includes(`Age`)) {
      setFriend({...friend, age: event.target.value,});
    }
    if(event.target.placeholder.includes(`Email`)) {
      setFriend({...friend, email: event.target.value,});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (friend.name && friend.age && friend.email) {
      id? props.editSubmitHandler(friend, id) : props.addSubmitHandler(friend);
      props.history.push('/');
    }
  }

  return(
    <FormContainer>
      <h2>{props.match.params.id.trim()? 'Edit Existing Friend' : 'Add New Friend'}</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={friend.name} placeholder='Enter Name' />
        <input onChange={handleOnChange} value={friend.age} placeholder='Enter Age' />
        <input onChange={handleOnChange} value={friend.email} placeholder='Enter Email' />
        <button type='submit'>{props.match.params.id.trim()? 'Edit Friend' : 'Add Friend'}</button>
      </form>
    </FormContainer>
  );
}
