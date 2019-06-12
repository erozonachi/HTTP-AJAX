import React from 'react';
import ListItem from './ListItem';
import FriendItem from './StyledComponents/FriendItem';
import FriendsList from './StyledComponents/FriendsList';

export default function ListContainer(props) {
  return(
    <FriendsList>
      <h2>Friends List</h2>
      <ul>
        <FriendItem head={true}>
          <span>Name</span>
          <span>Age</span>
          <span>Email</span>
        </FriendItem>
        {props.friends.map(friend => <ListItem key={`${friend.id}`} friend={friend} />)}
      </ul>
    </FriendsList>
  );
}
