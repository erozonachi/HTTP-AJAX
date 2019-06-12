import React, { useState, } from 'react';

export default function NewFriendForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleOnChange = (event) => {

    if(event.target.placeholder.includes(`Name`)) {
      setName(event.target.value);
    }
    if(event.target.placeholder.includes(`Age`)) {
      setAge(event.target.value);
    }
    if(event.target.placeholder.includes(`Email`)) {
      setEmail(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && age && email) {
      props.addSubmitHandler({name: name, age: age, email: email});
      setName('');
      setAge('');
      setEmail('');
    }
  }

  return(
    <div>
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={name} placeholder='Enter Name' />
        <input onChange={handleOnChange} value={age} placeholder='Enter Age' />
        <input onChange={handleOnChange} value={email} placeholder='Enter Email' />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
}
