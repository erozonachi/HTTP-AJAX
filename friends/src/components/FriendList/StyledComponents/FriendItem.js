import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  align-item: baseline;
  width: 100%;
  padding: .5em;
  font-weight: ${props => props.head? 'bold' : `initial`};
  > span {
    display: flex;
    width: 20%;
    padding: 0 .25em;
  }
`;

export default FriendItem;
