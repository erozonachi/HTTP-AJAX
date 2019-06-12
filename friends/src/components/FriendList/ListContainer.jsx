import React from 'react';
import ListItem from './ListItem';

export default function ListContainer(props) {
  return(
    <div>
      <h2>Friends List</h2>
      <ul>
        <li>
          <span>Name</span>
          <span>Age</span>
          <span>Email</span>
        </li>
        {props.friends.map(friend => <ListItem key={`${friend.id}`} friend={friend} />)}
      </ul>
    </div>
  );
}
