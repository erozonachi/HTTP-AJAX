import React from 'react';
import ListItem from './ListItem';
import FriendsList from './StyledComponents/FriendsList';

export default function ListContainer(props) {
  return(
    <FriendsList>
      <h2>Friends List</h2>
      <ul>
        {props.friends.map(friend => <ListItem key={`${friend.id}`} friend={friend} />)}
      </ul>
    </FriendsList>
  );
}
