import styled from 'styled-components';

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > h2 {
    font-size: 2.4rem;
    font-weight: bolder;
  }
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default FriendsList;
