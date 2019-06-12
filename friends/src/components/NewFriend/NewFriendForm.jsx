import React from 'react';

export default function NewFriendForm(props) {
  return(
    <div>
      <h2>Add New Friend</h2>
      <form>
        <input placeholder='Enter Name' />
        <input placeholder='Enter Age' />
        <input placeholder='Enter Email' />
      </form>
    </div>
  );
}
