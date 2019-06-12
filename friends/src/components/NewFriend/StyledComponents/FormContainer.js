import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;

  > h2 {
    font-size: 2.4rem;
    font-weight: bolder;
    padding: .5em 0;
  }
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: .5em;
    box-shadow: 4px gray;

    > input, > button {
      outline: none;
      border: none;
      width: 90%;
      padding: .5em;
    }
    > button {
      background-color: teal;
      color: white;
    }
  }
`;

export default FormContainer;
