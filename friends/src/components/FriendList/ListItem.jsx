import React from 'react';
import FriendItem from './StyledComponents/FriendItem';
import { Link, } from 'react-router-dom';

export default function ListItem(props) {
  const handleDelete = () => {
    props.delHandler(props.friend.id);
  }

  return(
    <FriendItem>
      <h3>{props.friend.name}</h3>
      <span><em>Age:&nbsp;</em>{props.friend.age}</span>
      <span><em>Email:&nbsp;</em>{props.friend.email}</span>
      <div>
        <Link to={`/new_friend/${props.friend.id}`}><button>Edit</button></Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </FriendItem>
  );
}
