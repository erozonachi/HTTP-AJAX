import React from 'react';
import FriendItem from './StyledComponents/FriendItem';

export default function ListItem(props) {
  return(
    <FriendItem>
      <span>{props.friend.name}</span>
      <span>{props.friend.age}</span>
      <span>{props.friend.email}</span>
    </FriendItem>
  );
}
