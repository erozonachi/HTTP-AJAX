import styled from 'styled-components';

const AppContainer = styled.div`
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin: 1em 0;

    li {
      padding: 1em;
      background-color: #555;
      color: white;

      > a {
        text-decoration: underline;
        &:link, &:visited {
          color: inherit;
        }
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

export default AppContainer;
