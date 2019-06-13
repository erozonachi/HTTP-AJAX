import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: baseline;
  width: 50%;
  background-color: white;
  color: #555;
  box-shadow: 4px 4px 4px 4px #ccc;
  > h3 {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1em 0;
    width: 100%;
    text-align: center;
  }
  > span {
    display: flex;
    padding: .5em 0;
    > em {
      font-weight: bold;
    }
  }
`;

export default FriendItem;
