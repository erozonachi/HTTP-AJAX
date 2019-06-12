import React from 'react';

export default function ListItem(props) {
  return(
    <li>
      <span>{props.friend.name}</span>
      <span>{props.friend.age}</span>
      <span>{props.friend.email}</span>
    </li>
  );
}
