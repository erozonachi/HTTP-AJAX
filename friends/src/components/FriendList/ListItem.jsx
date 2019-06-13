import React from 'react';
import FriendItem from './StyledComponents/FriendItem';

export default function ListItem(props) {
  return(
    <FriendItem>
      <h3>{props.friend.name}</h3>
      <span><em>Age:&nbsp;</em>{props.friend.age}</span>
      <span><em>Email:&nbsp;</em>{props.friend.email}</span>
    </FriendItem>
  );
}
